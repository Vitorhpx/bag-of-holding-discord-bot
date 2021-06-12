const { getInventory } = require("../use-cases/getInventory");
const { mapItemObjToStr } = require("../mappers/mapItemObjToStr");


const handleItemInfo = async (msg) => {
  const channelId = msg.channel.id;
  const inventory = await getInventory(channelId);
  const mappedInventory = inventory.map((itemObj, index) => mapItemObjToStr(itemObj, index))
  msg.channel.send(mappedInventory);
};

exports.handleItemInfo = handleItemInfo;
