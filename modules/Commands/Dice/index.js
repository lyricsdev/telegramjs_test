function RandomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
function Dice(bot,msg){
    let dice = RandomInt(1,6);
    bot.sendMessage(msg.chat.id, dice);
}
module.exports = Dice;