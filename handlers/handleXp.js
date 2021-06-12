const { getXpBoard } = require('../use-cases/getXpBoard');
const { mapXpBoardToView } = require('../mappers/mapXpBoardToView');

const handleXp = async (msg) => {
  const channelId = msg.channel.id;
  const xpBoard = await getXpBoard(channelId);

  msg.channel.send(mapXpBoardToView(xpBoard));
};

exports.handleXp = handleXp;
