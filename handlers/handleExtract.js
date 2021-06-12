const { mapTransacObjToStr } = require("../mappers/mapTransacObjToStr");
const { getTransactions } = require("../use-cases/getTransactions");

const handleExtract = async (msg) => {
  const channelId = msg.channel.id;
  const transactions = await getTransactions(channelId);
  const lastTransactions = transactions.slice(-10).reverse();
  const mappedTransactions = lastTransactions.map((transact) => `\n ${mapTransacObjToStr(transact)}`);

  msg.channel.send(`**Your last 10 transactions:** ${mappedTransactions}`);
};

exports.handleExtract = handleExtract;
