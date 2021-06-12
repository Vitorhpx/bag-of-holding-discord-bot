const { getTransactions } = require("../use-cases/getTransactions");

const handleCoinbagInfo = async (msg) => {
  const channelId = msg.channel.id;
  const transactions = await getTransactions(channelId);

  msg.channel.send(`Your last 10 transactions: ${JSON.stringify(transactions.slice(-10).reverse())}`);
};

exports.handleCoinbagInfo = handleCoinbagInfo;
