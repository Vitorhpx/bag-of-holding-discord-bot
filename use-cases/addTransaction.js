const { saveTransaction } = require("../repository/saveTransaction");
const { buildTransactionsString, buildBalanceString } = require("../utils/buildRepositoryStrings");

const addTransaction = async (copper, silver, gold, platinum, description, channelId) => {
  const transaction = {
    copper,
    silver,
    gold,
    platinum,
    description
  };
  await saveTransaction(transaction, buildTransactionsString(channelId), buildBalanceString(channelId));
  return transaction;
};

exports.addTransaction = addTransaction;
