const { dbClient } = require('./dbClient');

const fetchXpBoard = async (xpBoardId) => {
  const xpBoard = await dbClient.get(xpBoardId);
  return xpBoard;
};

exports.fetchXpBoard = fetchXpBoard;
