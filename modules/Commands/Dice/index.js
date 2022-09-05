function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
function dice(bot,msg){
    let dice = randomInt(1,6);
    bot.sendMessage(msg.chat.id, dice);
}
module.exports = dice;