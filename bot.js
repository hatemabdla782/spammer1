const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("640277484226740225")
setInterval(function() {
channel.send(`استغفر الله واتوب اليه`);
}, 30)
})

client.login(process.env.BOT_TOKEN);