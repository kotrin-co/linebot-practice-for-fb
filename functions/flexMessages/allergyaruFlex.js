exports.allergyaruFlex = () => {
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
              "text": "アレルギーのある方へ",
              "size": "lg",
              "weight": "bold",
              "align": "center"
            }
          ]
        },
        "hero": {
          "type": "image",
          "url": "https://firebasestorage.googleapis.com/v0/b/menta-learning.appspot.com/o/4.jpg?alt=media&token=2082aa72-e992-46f1-b0f5-60c7bc06f6b2"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "お子様向けに、試食の送付をすることができないのですが、保護者の方宛に試食を送ってもよろしいでしょうか？",
              "wrap": true
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "送る",
              "align": "center",
              "weight": "bold",
              "color": "#4169e1",
              "action": {
                "type": "message",
                "label": "送る",
                "text": "送る"
              }
            },
            {
              "type": "text",
              "text": "送らない",
              "align": "center",
              "weight": "bold",
              "color": "#4169e1",
              "action": {
                "type": "message",
                "label": "送らない",
                "text": "送らない"
              }
            }
          ]
        }
      }
    }
  };