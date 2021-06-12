const Discord = require('discord.js');
const keep_alive = require('./keep_alive.js');
const { getBlocks } = require('./utils/getBlocks.js');


const { handleItemInfo } = require("./handlers/handleItemInfo");
const { handleItemAdd } = require("./handlers/handleItemAdd");
const { handleHelp } = require('./handlers/handleHelp.js');
const { handleExtract } = require('./handlers/handleExtract.js');
const { handleBalanceInfo } = require('./handlers/handleBalanceInfo.js');
const { handleCoin } = require('./handlers/handleCoin.js');
const { handleItemRemove } = require('./handlers/handleItemRemove.js');
const { handleItemUpdate } = require('./handlers/handleItemUpdate.js');


const client = new Discord.Client();
const token = process.env['DISCORD_BOT_SECRET']

client.on('ready', () => {
  console.log("I'm in");
  console.log(client.user.username);
  client.user.setActivity("%help", {
  type: "LISTENING"
});
});

client.on('message', async (msg) => {
  if (msg.author.id != client.user.id) {
    const expressionBlock = getBlocks(msg.content)[0];
    switch(expressionBlock) {
      case "%help":
        handleHelp(msg);
        break;
      case "%extract":
        handleExtract(msg);
        break;
      case "%coinbag":
        handleBalanceInfo(msg);
        break;
      case "%inventory":
        handleItemInfo(msg);
        break;
      case "%coin":
        await handleCoin(msg);
        break;
      case "%add":
        handleItemAdd(msg);
        break;
      case "%remove":
        handleItemRemove(msg);
        break;
      case "%update":
        handleItemUpdate(msg);
        break;
      default:
        return;
    }
  }
});

client.login(token);