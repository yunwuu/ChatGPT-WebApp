var bot = new ChatSDK({
    config: {
      navbar: {
        title: 'Cocogoat ChatGPT Demo'
      },
      robot: {
        avatar: './chatgpt_logo.png'
      },
      messages: [
        {
          type: 'text',
          content: {
            text: '这是一个ChatGPT演示站, 由Cocogoat整合官方API并基于ChatUI开发。请注意, 本站与OpenAI官方无关, 仅用于演示。'
          }
        }
      ]
    },
    requests: {
      send: function (msg) {
        if (msg.type === 'text') {
          return {
            url: 'https://api.cocogoat.moe/chatgpt/',
            method: 'POST',
            body: JSON.stringify({
              "text": msg.content.text
            }),
            headers: {
                'content-type': 'application/json'
            }
          };
        }
      }
    },
    handlers: {
        parseResponse: function (res, requestType) {
          return {
            type: 'text',
            content: {
                text: res
            }
          }
        }
    }
  });
  
bot.run();