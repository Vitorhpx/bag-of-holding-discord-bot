const { mapItemObjToStr } = require("../mappers/mapItemObjToStr");
const { removeItem } = require("../use-cases/removeItem");
const { getBlocks } = require("../utils/getBlocks");

const handleItemRemove = async (msg) => {
  const channelId = msg.channel.id;
  const messageBlocks = getBlocks(msg.content);
  const itemIndex = parseInt(messageBlocks[1]);
  const removedItem = await removeItem(itemIndex,channelId);
  msg.channel.send(`Updated item: \n${mapItemObjToStr(removedItem, itemIndex)}`);
};

exports.handleItemRemove = handleItemRemove;
