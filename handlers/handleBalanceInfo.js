const { getBalance } = require("../use-cases/getBalance");

const handleBalanceInfo = async (msg) => {
  const channelId = msg.channel.id;
  const balance = await getBalance(channelId);
  const printString = `:moneybag:**Your coinbag** :moneybag: \r\n**Copper:** ${balance.copper}\r\n**Silver:** ${balance.silver}\r\n**Gold:** ${balance.gold}\r\n**Platinum: **${balance.platinum}`

  msg.channel.send(printString);
};

exports.handleBalanceInfo = handleBalanceInfo;
