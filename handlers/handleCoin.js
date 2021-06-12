const { mapTransacObjToStr } = require("../mappers/mapTransacObjToStr");
const { addTransaction } = require("../use-cases/addTransaction");
const { getArgumentValue } = require("../utils/getArgumentValue");
const { getBlocks } = require("../utils/getBlocks");

const handleCoin = async (msg) => {
  const messageBlocks = getBlocks(msg.content);
  const channelId = msg.channel.id;

  const copper = parseInt(getArgumentValue(messageBlocks, '-c', 0));
  const silver = parseInt(getArgumentValue(messageBlocks, '-s', 0));
  const gold = parseInt(getArgumentValue(messageBlocks, '-g', 0));
  const platinum = parseInt(getArgumentValue(messageBlocks, '-p', 0));
  const description = getArgumentValue(messageBlocks, '-d', '');

  const newTransaction = await addTransaction(copper, silver, gold, platinum, description, channelId);
  msg.channel.send(`Transaction added: \n ${mapTransacObjToStr(newTransaction)}`);
};

exports.handleCoin = handleCoin;
