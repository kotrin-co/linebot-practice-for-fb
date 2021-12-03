exports.ClevelFlex = () => {
    return {
      "type": "flex",
      "altText": "野菜選択",
      "contents": {
        "type": "bubble",
        "header": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "選んだ野菜のきらい（苦手）な度合いを教えてください",
              "weight": "bold",
              "size": "md",
              "wrap": true,
              "align": "center"
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/menta-learning.appspot.com/o/vegetable_yasai_kirai.png?alt=media&token=dbc6dc98-8610-494c-84ed-370c75e361b2",
          "size": "xxl"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "レベル1　好んでは食べないが食べられる",
              "size": "sm",
              "margin": "xxl",
              "color": "#4169e1",
              "weight": "bold",
              "action": {
                "type": "message",
                "label": "嫌いな野菜① レベル1",
                "text": "嫌いな野菜① レベル1"
              },
              "wrap": true
            },
            {
              "type": "text",
              "text": "レベル2　刻んだり煮込んだりすればOK",
              "size": "sm",
              "margin": "xxl",
              "color": "#4169e1",
              "weight": "bold",
              "action": {
                "type": "message",
                "label": "嫌いな野菜① レベル2",
                "text": "嫌いな野菜① レベル2"
              },
              "wrap": true
            },
            {
              "type": "text",
              "text": "レベル3　どんな方法でも食べない",
              "size": "sm",
              "margin": "xxl",
              "color": "#4169e1",
              "weight": "bold",
              "action": {
                "type": "message",
                "label": "嫌いな野菜① レベル3",
                "text": "嫌いな野菜① レベル3"
              },
              "wrap": true
            }
          ]
        }
      }
    }
  };