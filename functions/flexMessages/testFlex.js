// exports.testFlex = () => {
//     return {
//       "type": "flex",
//       "altText": "テストメッセージ",
//       "contents": {
//         "type": "bubble",
//         "header": {
//           "type": "box",
//           "layout": "vertical",
//           "contents": [
//             {
//               "type": "text",
//               "text": "はじめまして",
//               "size": "3xl",
//               "align": "center",
//             },
//           ],
//         },
//         "body": {
//           "type": "box",
//           "layout": "vertical",
//           "contents": [
//             {
//               "type": "button",
//               "action": {
//                 "type": "datetimepicker",
//                 "label": "日時選択",
//                 "data": "date",
//                 "mode": "datetime",
//               },
//             },
//           ],
//         },
//         "footer": {
//           "type": "box",
//           "layout": "vertical",
//           "contents": [
//             {
//               "type": "button",
//               "action": {
//                 "type": "message",
//                 "label": "はい",
//                 "text": "YES",
//               },
//             },
//             {
//               "type": "button",
//               "action": {
//                 "type": "postback",
//                 "label": "いいえ",
//                 "data": "no",
//               },
//             },
//           ],
//         },
//       },
//     }
//   };