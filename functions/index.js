const functions = require("firebase-functions");
const express = require('express');
const line = require('@line/bot-sdk');
require('dotenv').config();

// フレックスメッセージを別ファイルから読み込む
const { aisatsufirstFlex } = require("./flexMessages/aisatsufirstFlex");
const { AallergyFlex } = require("./flexMessages/AallergyFlex");
const { allergyaruFlex } = require("./flexMessages/allergyaruFlex");
const { ByasaiFlex } = require("./flexMessages/ByasaiFlex");
const { ClevelFlex } = require("./flexMessages/ClevelFlex");
const { DyasaiFlex } = require("./flexMessages/DyasaiFlex");
const { ElevelFlex } = require("./flexMessages/ElevelFlex");
const { sisyokuFlex } = require("./flexMessages/sisyokuFlex");
const { sisyokutwoFlex } = require("./flexMessages/sisyokutwoFlex");

// firestoreとstorage利用時
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
const FUNCTIONS_URL = "https://asia-northeast1-menta-learning.cloudfunctions.net/app"

// スリープ防止用ライブラリ
const axios = require("axios");

const lineConfig = {
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.ACCESS_TOKEN,
};

const client = new line.Client(lineConfig);

const app = express();
app.post("/", (req, res) => {
  console.log('定期実行用');
  db
    .collection("users")
    .doc("nonSleep")
    .get()
    .then(snap=>{
      const data = snap.data().data;
      res.status(200).send(data);
    });
})
app.post("/hook", line.middleware(lineConfig), (req, res) => lineBot(req, res));

const lineBot = (req, res) => {
  res.status(200).end();
  const events = req.body.events;
  const promises = [];
  for (let i = 0; i < events.length; i++) {
    const ev = events[i];
    console.log(ev);
    switch (ev.type) {
      // メッセージイベント
      case "message":
        promises.push(handleMessageEvent(ev));
        break;
    }
  }
  Promise
    .all(promises)
    .then(() => console.log("all promises passed"))
    .catch((e) => console.error(e.stack));
};

const handleMessageEvent = async (ev) => {
  const text = ev.message.text;
  const replyToken = ev.replyToken;
  const lineId = ev.source.userId;

  if (text === "回答スタート") {
    const profile = await client.getProfile(lineId);
    await  db.collection("users").doc(lineId).set({
      name: profile.displayName,
      start: true,
    });
    const flexMessage = AallergyFlex();
    return client.replyMessage(replyToken, flexMessage);
  }

  const docRef = db
    .collection("users")
    .doc(lineId);

  db.runTransaction((transaction) => {
    return transaction.get(docRef)
      .then(async (doc) => {

        const userData = doc.data();
        console.log('in transaction', userData, text);

        if ("start" in userData) {
          if (userData.start === false) {
            return client.replyMessage(ev.replyToken, {
              type: "text",
              text: "アンケートは終了しました。もう一度回答する場合ははじめの「回答スタート！」をタップしてください",
            });
          }
        }

        // 初期値
        let numberOfAnswers = 0;

        // 今までの回答数の取得
        if ("answers" in userData) {
          numberOfAnswers = Object.keys(userData.answers).length;
        }

        console.log("numberOfAnswers", numberOfAnswers);

        // 1番初めの質問に対する回答記録と２番目の質問
        if (numberOfAnswers === 0) {

          // 次の質問
          if (text === "アレルギーある") {
            // 回答の記録
            transaction.update(docRef, {
              answers: {
                ...userData.answers,
                a0: text,
              }
            });
            const flexMessage = allergyaruFlex();
            return client.replyMessage(replyToken, flexMessage);
          }

          if (text === "アレルギーない") {
            // 回答の記録
            transaction.update(docRef, {
              answers: {
                ...userData.answers,
                a0: text,
              }
            });
            const flexMessage = ByasaiFlex();
            return client.replyMessage(replyToken, flexMessage);
          }
        }


        if (numberOfAnswers === 1) {

          // 次の質問
          if (text === "嫌いな野菜① ピーマン" || text === "嫌いな野菜① かぼちゃ" || text === "嫌いな野菜① にんじん" || text === "嫌いな野菜① ほうれん草") {
            // 回答の記録
            transaction.update(docRef, {
              answers: {
                ...userData.answers,
                a1: text,
              }
            });
            const flexMessage = ClevelFlex();
            return client.replyMessage(replyToken, flexMessage);
          }

          if (text === "嫌いな野菜① ない") {
            // 回答の記録
            transaction.update(docRef, {
              answers: {
                ...userData.answers,
                a1: text,
              }
            });

            // テキストメッセージ
            const textMessage = {
              type: "text",
              text:  `当てはまる嫌いな野菜がないんですね！素晴らしいです👏
それでは、5つの選択肢の中から、欲しいものを2種類選んでください！
ご希望のものをお届けいたします😉
選択は一つずつお願いします！`,
// ここの次にsisyokuFlexに飛びたい
            };
            // sisyokuFlex
            const flexMessage = sisyokuFlex();
            return client.replyMessage(replyToken, [
              textMessage,
              flexMessage,
            ]);
          }

          if (text === "送る") {
            // 回答の記録
            transaction.update(docRef, {
              answers: {
                ...userData.answers,
                a1: text,
              }
            });
            const flexMessage = sisyokuFlex();
            return client.replyMessage(replyToken, flexMessage);
          }

          if (text === "送らない") {
            // 回答の記録
            transaction.update(docRef, {
              answers: {
                ...userData.answers,
                a1: text,
              },
              start: false,
            });
            return client.replyMessage(replyToken, {
              type: "text",
              text: "ここに送らない場合の返信メッセージを入れる"
            });
          }
        }

        if (numberOfAnswers === 2) {

          // 食べられない度①に対する次の質問 嫌いな野菜②へ行くルート
          if (text === "嫌いな野菜① レベル1" || text === "嫌いな野菜① レベル2" || text === "嫌いな野菜① レベル3") {
            // 回答の記録
            transaction.update(docRef, {
              answers: {
                ...userData.answers,
                a2: text,
              }
            });
            const flexMessage = DyasaiFlex();
            return client.replyMessage(replyToken, flexMessage);
          }

          // 欲しい味①に対する次の質問 欲しい味②へ行くルート
          if (text === "1種類目 ピーマン" || text === "1種類目 かぼちゃ" || text === "1種類目 にんじん" || text === "1種類目 ほうれん草") {
            // 回答の記録
            transaction.update(docRef, {
              answers: {
                ...userData.answers,
                a2: text,
              }
            });
            const flexMessage = sisyokutwoFlex();
            return client.replyMessage(replyToken, flexMessage);
          }
        }


        if (numberOfAnswers === 3) {

          // 次の質問
          if (text === "嫌いな野菜② ピーマン" || text === "嫌いな野菜② かぼちゃ" || text === "嫌いな野菜② にんじん" || text === "嫌いな野菜② ほうれん草"){
            // 回答の記録
            transaction.update(docRef, {
              answers: {
                ...userData.answers,
                a3: text,
              }
            });
            const flexMessage = ElevelFlex();
            return client.replyMessage(replyToken, flexMessage);
          }

          if (text === "嫌いな野菜② ない") {
            // 回答の記録
            transaction.update(docRef, {
              answers: {
                ...userData.answers,
                a3: text,
              }
            });
            const textMessage = {
              type: "text",
              text:  `嫌いな野菜は、選択肢の中で1つだけだったようですね👏
では、もう一つは食べてみたい味をお届けします！欲しいものを1つだけ、お選びください`,
// ここの次にsisyokutwoFlexに飛びたい
            };
            const flexMessage = sisyokutwoFlex();

            return client.replyMessage(replyToken, [
              textMessage,
              flexMessage,
            ]);
          }

          // 欲しい味②に対する次の質問 締めの挨拶
          if (text === "2種類目 ピーマン" || text === "2種類目 かぼちゃ" || text === "2種類目 にんじん" || text === "2種類目 ほうれん草") {
            // 回答の記録
            transaction.update(docRef, {
              answers: {
                ...userData.answers,
                a3: text,
              },
              start: false
            });
            return client.replyMessage(replyToken, {
              type: "text",
              text:  `【ありがとうございました！】
後ほど、ご回答いただいた内容を、スタッフが確認いたします。
              
その際、改めてメッセージをお送りしますので、再度ご確認いただけると幸いです😌
              
ご連絡まで少々お待ちください。`,
            });
          }
        }

        if (numberOfAnswers === 4) {

          // 締め
          if (text === "嫌いな野菜② レベル1" || text === "嫌いな野菜② レベル2" || text === "嫌いな野菜② レベル3") {
            // 回答の記録
            transaction.update(docRef, {
              answers: {
                ...userData.answers,
                a4: text,
              },
              start: false,
            });
            return client.replyMessage(replyToken, {
              type: "text",
              text:  `【ありがとうございました！】
後ほど、ご回答いただいた内容を、スタッフが確認いたします。
              
その際、改めてメッセージをお送りしますので、再度ご確認いただけると幸いです😌
              
ご連絡まで少々お待ちください。`,
            });
          }

          if (text === "2種類目 ピーマン" || text === "2種類目 かぼちゃ" || text === "2種類目 にんじん" || text === "2種類目 ほうれん草") {
            // 回答の記録
            transaction.update(docRef, {
              answers: {
                ...userData.answers,
                a4: text,
              },
              start: false,
            });
            return client.replyMessage(replyToken, {
              type: "text",
              text:  `【ありがとうございました！】
後ほど、ご回答いただいた内容を、スタッフが確認いたします。
              
その際、改めてメッセージをお送りしますので、再度ご確認いただけると幸いです😌
              
ご連絡まで少々お待ちください。`,
            });
          }
        }
          // ここにプラス画像を送りたい
      })
  })
};

exports.app = functions.region("asia-northeast1").https.onRequest(app);

// // スリープ防止用
exports.scheduledFunction = functions.region('asia-northeast1').pubsub.schedule('every 1 minutes').onRun(async (context) => {
  //appへ1分ごとにpostする
  try {
    axios.post(FUNCTIONS_URL, {
      data: "　",
    });
    console.log('スリープ防止定期実行');
  } catch(error) {
    console.log('scheduler post failed');
  }
});
