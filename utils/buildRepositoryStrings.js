function buildRepositoryString(id, name) {
  return `${id}-${name}`;
}

function buildInventoryString(channelId) {
  return buildRepositoryString(channelId, 'inventory');
}

function buildBalanceString(channelId) {
  return buildRepositoryString(channelId, 'balance');
}

function buildTransactionsString(channelId) {
  return buildRepositoryString(channelId, 'transactions');
}

module.exports = {
  buildInventoryString,
  buildBalanceString,
  buildTransactionsString
}