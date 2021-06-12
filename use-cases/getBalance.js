const { fetchBalance } = require("../repository/fetchBalance");
const { buildBalanceString } = require("../utils/buildRepositoryStrings");

const getBalance = async (channelId) => {
  const balance = await fetchBalance(buildBalanceString(channelId));

  return balance;
};

exports.getBalance = getBalance;
