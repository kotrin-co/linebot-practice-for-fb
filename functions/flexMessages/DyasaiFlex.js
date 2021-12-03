exports.DyasaiFlex = () => {
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
              "text": "下記の中から、お子さんのきらい（苦手）な野菜をもう１つ教えてください",
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
                  "weight": "bold",
                  "color": "#4169e1",
                  "align": "center",
                  "gravity": "center"
                }
              ],
              "action": {
                "type": "message",
                "label": "嫌いな野菜② ピーマン",
                "text": "嫌いな野菜② ピーマン"
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
                  "weight": "bold",
                  "color": "#4169e1",
                  "align": "center",
                  "gravity": "center"
                }
              ],
              "action": {
                "type": "message",
                "label": "嫌いな野菜② かぼちゃ",
                "text": "嫌いな野菜② かぼちゃ"
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
                  "weight": "bold",
                  "color": "#4169e1",
                  "align": "center",
                  "gravity": "center"
                }
              ],
              "action": {
                "type": "message",
                "label": "嫌いな野菜② にんじん",
                "text": "嫌いな野菜② にんじん"
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
                  "weight": "bold",
                  "color": "#4169e1",
                  "align": "center",
                  "gravity": "center"
                }
              ],
              "action": {
                "type": "message",
                "label": "嫌いな野菜② ほうれん草",
                "text": "嫌いな野菜② ほうれん草"
              }
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "image",
                  "url": "https://firebasestorage.googleapis.com/v0/b/menta-learning.appspot.com/o/D46D4560-24E6-4400-9CDA-AE9C296A70FE.png?alt=media&token=1063d6d7-f674-467c-9713-edc7a05f0bb0"
                },
                {
                  "type": "text",
                  "text": "ない",
                  "weight": "bold",
                  "color": "#4169e1",
                  "align": "center",
                  "gravity": "center"
                }
              ],
              "action": {
                "type": "message",
                "label": "嫌いな野菜② ない",
                "text": "嫌いな野菜② ない"
              }
            }
          ],
          "action": {
            "type": "message",
            "label": "嫌いな野菜① ピーマン",
            "text": "嫌いな野菜① ピーマン"
          }
        }
      }
    }
  };