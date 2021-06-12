const { dbClient } = require("./dbClient");

const fetchBalance = async (balanceId) => {
  const balance = await dbClient.get(balanceId);
  return balance;
};

exports.fetchBalance = fetchBalance;
