const { dbClient } = require("./dbClient");

const saveTransaction = async (transaction, transactionsId, balanceId) => {
  try {
    let transactions = await dbClient.get(transactionsId);
    let balance = await dbClient.get(balanceId);
    if (transactions === null) {
      transactions = [];
    }
    if (balance === null) {
      balance = {
        copper: 0,
        silver: 0,
        gold: 0,
        platinum: 0
      };
    }
    transactions.push(transaction);
    balance = updateBalance(balance, transaction);

    await dbClient.set(transactionsId, transactions);
    await dbClient.set(balanceId, balance);
  } catch (error) {
    throw error;
  }
};

const updateBalance  = (balance, transaction) => {
  let newBalance = {};
  newBalance.copper = balance.copper + transaction.copper;
  newBalance.silver = balance.silver + transaction.silver;
  newBalance.gold = balance.gold + transaction.gold;
  newBalance.platinum = balance.platinum + transaction.platinum;

  return newBalance;
}

exports.saveTransaction = saveTransaction;
