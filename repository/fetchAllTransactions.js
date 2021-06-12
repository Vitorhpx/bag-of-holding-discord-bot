const { dbClient } = require("./dbClient");

const fetchAllTransactions = async (transactionsId) => {
  const transactions = await dbClient.get(transactionsId);
  return transactions;
};

exports.fetchAllTransactions = fetchAllTransactions;
