const { mapItemObjToStr } = require("../mappers/mapItemObjToStr");
const { updateItem } = require("../use-cases/updateItem");
const { getArgumentValue } = require("../utils/getArgumentValue");
const { getBlocks } = require("../utils/getBlocks");

const handleItemUpdate = async (msg) => {
  const channelId = msg.channel.id;
  const messageBlocks = getBlocks(msg.content);
  const itemIndex = parseInt(messageBlocks[1]);
  const quantity = parseInt(getArgumentValue(messageBlocks, '-q', null));
  const description = getArgumentValue(messageBlocks, '-d', null);
  const updatedItem = await updateItem(itemIndex, quantity, description, channelId);
  msg.channel.send(`Updated item: \n${mapItemObjToStr(updatedItem, itemIndex)}`);
};

exports.handleItemUpdate = handleItemUpdate;
