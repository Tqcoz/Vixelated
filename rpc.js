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
