exports.AallergyFlex = () => {
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
              "text": "お子様のアレルギーについて",
              "size": "lg",
              "weight": "bold",
              "align": "center"
            }
          ]
        },
        "hero": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "image",
              "url": "https://firebasestorage.googleapis.com/v0/b/menta-learning.appspot.com/o/egg_ware_white.png?alt=media&token=967db65b-54ae-472b-b72e-d83245018c80"
            },
            {
              "type": "image",
              "url": "https://firebasestorage.googleapis.com/v0/b/menta-learning.appspot.com/o/drink_milk_pack.png?alt=media&token=967db65b-54ae-472b-b72e-d83245018c80"
            },
            {
              "type": "image",
              "url": "https://firebasestorage.googleapis.com/v0/b/menta-learning.appspot.com/o/mugi.png?alt=media&token=967db65b-54ae-472b-b72e-d83245018c80"
            },
            {
              "type": "image",
              "url": "https://firebasestorage.googleapis.com/v0/b/menta-learning.appspot.com/o/nuts_almond.png?alt=media&token=967db65b-54ae-472b-b72e-d83245018c80"
            }
          ]
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": "今回お届けする商品に、卵・牛乳・小麦粉・ナッツを使用しています。どれかひとつでも当てはまれば「ある」とご回答ください。",
              "wrap": true,
              "gravity": "center",
              "align": "start",
              "size": "sm"
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "ある",
              "color": "#4169e1",
              "weight": "bold",
              "align": "center",
              "action": {
                "type": "message",
                "label": "アレルギーある",
                "text": "アレルギーある"
              }
            },
            {
              "type": "text",
              "text": "ない",
              "color": "#4169e1",
              "weight": "bold",
              "align": "center",
              "action": {
                "type": "message",
                "label": "アレルギーない",
                "text": "アレルギーない"
              }
            }
          ]
        }
      }
    }
  };