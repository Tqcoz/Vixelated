const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`with Vixels!`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '?';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}`){
    message.channel.send("**Hello, I am Vixelated! I was actually an Human like you until I got bit by an Vixel which is a female fox and then I turned into an Vixel, after that a Tqco named Tqco_Tuesdqy found me and named me Vixelated. I now work for Vixelated which is a Minecraft Client and Web Browser, I am making for people. Sadly it is not available yet due to the fact it's not finished. Whenever it is, I will be sure to announce it to you guys!**");
    
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
    // smallImageText: 'Offline',
    instance: false,
  });
});

rpc.login(ClientId).catch(console.error);
  }
});

bot.login(process.env.token);
