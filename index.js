const TelegramBot = require('node-telegram-bot-api');
const {config} = require('dotenv');
const CommandHandler = require('./modules/Commands');
const setupcommands = require('./modules/Commands');
config()
const token = process.env.token;
const bot = new TelegramBot( token, {polling: true});
setupcommands(bot);
bot.on('message', (msg) => {
    CommandHandler(bot,msg);
});