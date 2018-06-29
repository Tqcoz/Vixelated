const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`with Vixels!`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '-';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}help`){
    message.channel.send("**Hello, @Staff will be here shortly to help you out!**");
 const DiscordRPC = require("discord-rpc");

const ClientId = '462054174234902541';

DiscordRPC.register(ClientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log("ready");
  rpc.setActivity({
    details: `Do -help if you need me.`,
    state: 'Blowing Bubbles!',
    // largeImageKey: 'large',
    // largeImageText: 'Providing Vixelated',
    // smallImageKey: 'small',
    // smallImageText: 'Online',
    instance: false,
  });
});

rpc.login(ClientId).catch(console.error);
  }
});

bot.login(process.env.token);
