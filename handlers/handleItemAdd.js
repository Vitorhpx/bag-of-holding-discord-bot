const { addItem } = require("../use-cases/addItem");
const { getBlocks } = require("../utils/getBlocks");
const { getArgumentValue } = require("../utils/getArgumentValue");
const { mapItemObjToStr } = require("../mappers/mapItemObjToStr");


const handleItemAdd = async (msg) => {

  const messageBlocks = getBlocks(msg.content);
  const channelId = msg.channel.id;

  const itemName = messageBlocks[1];
  const quantity = parseInt(getArgumentValue(messageBlocks, '-q', 1));
  const description = getArgumentValue(messageBlocks, '-d', '');
  const addedItem = await addItem(itemName, quantity, description, channelId);
  msg.channel.send(`Item added: \n${mapItemObjToStr(addedItem, null)}`);
};

exports.handleItemAdd = handleItemAdd;


