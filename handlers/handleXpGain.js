const { addXpEvent } = require('../use-cases/addXpEvent');
const { getBlocks } = require('../utils/getBlocks');
const { getArgumentValue } = require('../utils/getArgumentValue');
const { mapXpEventToStr } = require('../mappers/mapXpEventToStr');

const handleXpGain = async (msg) => {
  const messageBlocks = getBlocks(msg.content);
  const channelId = msg.channel.id;

  const eventName = messageBlocks[1];
  const quantity = parseInt(getArgumentValue(messageBlocks, '-q', 1));
  const addedXpEvent = await addXpEvent(eventName, quantity, channelId);
  msg.channel.send(`Xp event added: \n${mapXpEventToStr(addedXpEvent)}`);
};

exports.handleXpGain = handleXpGain;
