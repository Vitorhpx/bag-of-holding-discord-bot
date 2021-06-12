const { dbClient } = require('./dbClient');
const { v4 } = require('uuid');

const saveXpEvent = async (xpEvent, xpBoardId) => {
  try {
    let xpBoard = await dbClient.get(xpBoardId);
    if (xpBoard === null) {
      xpBoard = [];
    }
    xpEvent.id = v4();
    xpBoard.push(xpEvent);
    await dbClient.set(xpBoardId, xpBoard);
  } catch (error) {
    throw error;
  }
};
exports.saveXpEvent = saveXpEvent;
