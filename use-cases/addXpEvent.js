const { saveXpEvent } = require('../repository/saveXpEvent');
const { buildXpBoardString } = require('../utils/buildRepositoryStrings');

const addXpEvent = async (name, qnt, channelId) => {
  const xpEvent = {
    name: name,
    qnt: qnt,
  };
  await saveXpEvent(xpEvent, buildXpBoardString(channelId));

  return xpEvent;
};

exports.addXpEvent = addXpEvent;
