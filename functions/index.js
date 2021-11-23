const functions = require("firebase-functions");
const express = require('express');
const line = require('@line/bot-sdk');
require('dotenv').config();

// フレックスメッセージを別ファイルから読み込む
// const { testFlex } = require("./flexMessages/testFlex");

// // firestoreとstorage利用時
// const admin = require('firebase-admin');
// admin.initializeApp();
// const db = admin.firestore();

// スリープ防止用ライブラリ
// const rp = require('request-promise');

const lineConfig = {
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.ACCESS_TOKEN,
};

const client = new line.Client(lineConfig);

const app = express();
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
      // // ポストバックイベント
      // case "postback":
      //   promises.push(handlePostbackEvent(ev));
      //   break;
      // // 友達登録
      // case "follow":
      //   promises.push(handleFollowEvent(ev));
      //   break;
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

  // 名前の取得
  const profile = await client.getProfile(ev.source.userId);
  const name = profile.displayName;

  if (text === "おはよう") {
    return client.replyMessage(replyToken, {
      type: "text",
      text: "おはようございます！！"
    });
  }

  if (text === "こんにちは") {
    return client.replyMessage(replyToken, {
      type: "text",
      text: `こんにちは！${name}さん^^`,
    });
  }

  if (text === "フレックス") {
    // const flexMessage = testFlex();
    const flexMessage = {
      "type": "flex",
      "altText": "テストメッセージ",
      "contents": {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "はじめまして",
              "size": "3xl",
              "align": "center",
            },
          ],
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "datetimepicker",
                "label": "日時選択",
                "data": "date",
                "mode": "datetime",
              },
            },
          ],
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "はい",
                "text": "YES",
              },
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "いいえ",
                "data": "no",
              },
            },
          ],
        },
      },
    };
    return client.replyMessage(ev.replyToken, flexMessage);
  } else {
    return client.replyMessage(ev.replyToken, {
      type: "text",
      text,
    });
  }
};

// // ポストバックイベント
// const handlePostbackEvent = (ev) => {
//   const data = ev.postback.data;
//   const replyToken = ev.replyToken;

//   if (data === "no") {
//     return client.replyMessage(replyToken, {
//       type: "text",
//       text: "あなたはNoを押しました！！",
//     });
//   }

//   if (data === "date") {
//     const selectedDate = ev.postback.params.datetime;
//     return client.replyMessage(ev.replyToken, {
//       type: "text",
//       text: selectedDate,
//     });
//   }
// };

// // フォローイベント
// const handleFollowEvent = (ev) => {
//   client.getProfile(ev.source.userId)
//       .then((profile) => {
//         const name = profile.displayName;
//         const lineId = ev.source.userId;
//         db
//           .collection("users")
//           .doc(lineId)
//           .set({
//             name: name,
//           });
//         client.replyMessage(ev.replyToken, {
//           type: "text",
//           text: `${name}さん友だち追加ありがとうございます！`,
//         });
//       });
// };

exports.app = functions.region("asia-northeast1").https.onRequest(app);

// // スリープ防止用
// exports.scheduledFunction = functions.region('asia-northeast2').pubsub.schedule('every 1 minutes').onRun(async(context) => {
//   //appへ1分ごとにpostする
//   try {
//     const option = {
//       uri: `${process.env.FUNCTIONS_URL}/app`,
//       method: 'POST',
//       body: {


//       },
//       json:true
//     };
//     await rp(option);
//     console.log('スリープ防止定期実行');
//   } catch(error) {
//     console.log('scheduler post failed');
//   }
// });