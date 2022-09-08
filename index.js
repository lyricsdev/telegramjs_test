const TelegramBot = require('node-telegram-bot-api');
const {config} = require('dotenv');
const CommandHandler = require('./modules/Commands');
const Setupcommands = require('./modules/Commands');
config()
const token = process.env.token;
const bot = new TelegramBot( token, {polling: true});
Setupcommands(bot);
bot.onText(/\/edit/, function onEditableText(msg) {
    const opts = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Edit Text',
              callback_data: 'edit'
            }
          ]
        ]
      }
    };
    bot.sendMessage(msg.from.id, 'Original Text', opts);
  });
  bot.on('callback_query', function onCallbackQuery(callbackQuery) {
    const action = callbackQuery.data;
    const msg = callbackQuery.message;  
    if (action === 'edit') {
    bot.editMessageText("Edited Text", {
        chat_id: msg.chat.id,
        message_id: msg.message_id,
      });
    }
  });
bot.on('message', (msg) => {
    CommandHandler(bot,msg);
    
});