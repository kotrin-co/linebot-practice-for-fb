exports.sisyokutwoFlex = () => {
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
              "text": "お送りする試食について",
              "weight": "bold",
              "size": "md",
              "wrap": true,
              "align": "center"
            }
          ]
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "もう一つ、お送りする試食のお味をお選びください",
              "wrap": true
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "image",
                  "url": "https://firebasestorage.googleapis.com/v0/b/menta-learning.appspot.com/o/character_piman.png?alt=media&token=1063d6d7-f674-467c-9713-edc7a05f0bb0"
                },
                {
                  "type": "text",
                  "text": "ピーマン",
                  "size": "md",
                  "margin": "none",
                  "color": "#4169e1",
                  "weight": "bold",
                  "wrap": true,
                  "align": "center",
                  "gravity": "center"
                }
              ],
              "action": {
                "type": "message",
                "label": "2種類目 ピーマン",
                "text": "2種類目 ピーマン"
              }
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "image",
                  "url": "https://firebasestorage.googleapis.com/v0/b/menta-learning.appspot.com/o/halloween_chara1_pumpkin-1.png?alt=media&token=1063d6d7-f674-467c-9713-edc7a05f0bb0"
                },
                {
                  "type": "text",
                  "text": "かぼちゃ",
                  "size": "md",
                  "margin": "none",
                  "color": "#4169e1",
                  "weight": "bold",
                  "wrap": true,
                  "align": "center",
                  "gravity": "center"
                }
              ],
              "action": {
                "type": "message",
                "label": "2種類目 かぼちゃ",
                "text": "2種類目 かぼちゃ"
              }
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "image",
                  "url": "https://firebasestorage.googleapis.com/v0/b/menta-learning.appspot.com/o/character_ninjin.png?alt=media&token=1063d6d7-f674-467c-9713-edc7a05f0bb0"
                },
                {
                  "type": "text",
                  "text": "にんじん",
                  "size": "md",
                  "margin": "none",
                  "color": "#4169e1",
                  "weight": "bold",
                  "wrap": true,
                  "align": "center",
                  "gravity": "center"
                }
              ],
              "action": {
                "type": "message",
                "label": "2種類目 にんじん",
                "text": "2種類目 にんじん"
              }
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "image",
                  "url": "https://firebasestorage.googleapis.com/v0/b/menta-learning.appspot.com/o/character_hourensou.png?alt=media&token=1063d6d7-f674-467c-9713-edc7a05f0bb0"
                },
                {
                  "type": "text",
                  "text": "ほうれん草",
                  "size": "md",
                  "margin": "none",
                  "color": "#4169e1",
                  "weight": "bold",
                  "wrap": true,
                  "align": "center",
                  "gravity": "center"
                }
              ],
              "action": {
                "type": "message",
                "label": "2種類目 ほうれん草",
                "text": "2種類目 ほうれん草"
              }
            }
          ]
        }
      }
    }
  };