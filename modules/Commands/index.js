const mycmds = [
    {command: '/start', description: 'Start'},
    {command: '/info', description: 'Info'},
    {command: '/help', description: 'Help'}
]
function Setupcommands(bot){
    bot.setMyCommands(mycmds);
}

let enableecho = false;
function CommandHandler(bot,msg) {
    if(enableecho)
    {
        let iscommand = msg.text.startsWith('/');
        if(!iscommand)
        bot.sendMessage(msg.chat.id, msg.text);
    }
    try{
        switch(msg.text){
            case '/start':
                bot.sendMessage(msg.chat.id, 'Welcome to the bot!');
                break;
            case '/info':
                bot.sendMessage(msg.chat.id, 'Info');
                break;
            case '/help':
                bot.sendMessage(msg.chat.id, 'Help');
                break;
            case '/dice':
                bot.sendDice(msg.chat.id);
                break;
            case '/echo':
                enableecho = !enableecho;
                bot.sendMessage(msg.chat.id, `Echo is ${enableecho?'enabled':'disabled'}`);
                break;
            default:
                bot.sendMessage(msg.chat.id, 'Unknown command');
                break;
        }
    } catch (err) {
        console.log(err);
    }
}
module.exports = Setupcommands;
module.exports = CommandHandler;
