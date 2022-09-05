const mycmds = [
    {command: '/start', description: 'Start'},
    {command: '/info', description: 'Info'},
    {command: '/help', description: 'Help'}
]
function setupcommands(bot){
    bot.setMyCommands(mycmds);
}

const dice = require('./Dice');
function CommandHandler(bot,msg) {
    console.log(msg);

    try{
        switch(msg.text){
            case '/start':
                if(msg.chat.type == 'private'){
                    dice(bot,msg);
                }
                break;
            case '/info':
                bot.sendMessage(msg.chat.id, 'Info');
                break;
            case '/help':
                bot.sendMessage(msg.chat.id, 'Help');
                break;
            default:
                bot.sendMessage(msg.chat.id, 'Default');
                break;
        }
    } catch (err) {
        console.log(err);
    }
}
module.exports = setupcommands;
module.exports = CommandHandler;