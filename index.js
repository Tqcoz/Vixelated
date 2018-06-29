const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Hey, Wassup!`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '-';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}help`){
    message.channel.send("Hello, @Staff will be here shortly to help you out!");
    
  if (cmd === `${prefix}download`){
    message.channel.send("Uhmm, Vixelated isn't out yet. It will be out when its done.");
  }
});

bot.login(process.env.token);
