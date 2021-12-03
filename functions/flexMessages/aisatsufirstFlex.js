exports.aisatsufirstFlex = () => {
    return {
      "type": "flex",
      "altText": "野菜選択",
      "contents": {
        "type": "carousel",
        "contents": [
          {
            "type": "bubble",
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "image",
                  "url": "https://firebasestorage.googleapis.com/v0/b/menta-learning.appspot.com/o/iOS%20%E3%81%AE%E7%94%BB%E5%83%8F%20(4).png?alt=media&token=bf1f7d7f-99f6-4432-87c7-44f12fe15d14",
                  "size": "full",
                  "aspectMode": "cover",
                  "aspectRatio": "2:3",
                  "gravity": "top"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": []
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "text",
                          "text": "試作品希望アンケート",
                          "wrap": true,
                          "size": "lg",
                          "weight": "bold",
                          "align": "center",
                          "color": "#ffffff"
                        },
                        {
                          "type": "text",
                          "text": "2021年12月4日〜12月6日",
                          "align": "center",
                          "color": "#ffffff"
                        }
                      ],
                      "spacing": "lg"
                    },
                    {
                      "type": "box",
                      "layout": "vertical",
                      "contents": [
                        {
                          "type": "filler"
                        },
                        {
                          "type": "box",
                          "layout": "baseline",
                          "contents": [
                            {
                              "type": "filler"
                            },
                            {
                              "type": "text",
                              "text": "回答スタート！",
                              "color": "#ffffff",
                              "flex": 0,
                              "offsetTop": "-2px",
                              "weight": "bold",
                              "action": {
                                "type": "message",
                                "label": "回答スタート！",
                                "text": "回答スタート！"
                              }
                            },
                            {
                              "type": "filler"
                            }
                          ],
                          "spacing": "sm"
                        },
                        {
                          "type": "filler"
                        }
                      ],
                      "borderWidth": "1px",
                      "cornerRadius": "4px",
                      "spacing": "sm",
                      "borderColor": "#ffffff",
                      "margin": "xxl",
                      "height": "40px",
                      "action": {
                        "type": "message",
                        "label": "回答スタート！",
                        "text": "回答スタート！"
                      }
                    }
                  ],
                  "position": "absolute",
                  "offsetBottom": "0px",
                  "offsetStart": "0px",
                  "offsetEnd": "0px",
                  "backgroundColor": "#0000002c",
                  "paddingAll": "20px",
                  "paddingTop": "18px"
                }
              ],
              "paddingAll": "0px"
            }
          }
        ]
      }
    }
  };