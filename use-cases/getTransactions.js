const { fetchAllTransactions } = require("../repository/fetchAllTransactions");
const { buildTransactionsString } = require("../utils/buildRepositoryStrings");

const getTransactions = async (channelId) => {
  const transactions = await fetchAllTransactions(buildTransactionsString(channelId));

  return transactions;
};

exports.getTransactions = getTransactions;
