const { fetchXpBoard } = require('../repository/fetchXpBoard');
const { buildXpBoardString } = require('../utils/buildRepositoryStrings');

const getXpBoard = async (channelId) => {
  const xpBoard = await fetchXpBoard(buildXpBoardString(channelId));
  return xpBoard;
};

exports.getXpBoard = getXpBoard;
