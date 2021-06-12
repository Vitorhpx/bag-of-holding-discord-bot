const { deleteItem } = require("../repository/deleteItem");
const { fetchAllItems } = require("../repository/fetchAllItems");
const { putItem } = require("../repository/putItem");
const { buildInventoryString } = require("../utils/buildRepositoryStrings");


const updateItem = async (index, qnt, desc, channelId) => {
  const allItems = await fetchAllItems(buildInventoryString(channelId));
  const itemToUpdate = allItems[index];
  let itemUpdated = itemToUpdate;
  if(!(qnt === null || isNaN(qnt))) {
    itemUpdated.qnt = qnt;
  }
  if(desc !== null) {
    itemUpdated.desc = desc;
  }
  await putItem(itemUpdated, buildInventoryString(channelId));
  return itemUpdated;
};

exports.updateItem = updateItem;
