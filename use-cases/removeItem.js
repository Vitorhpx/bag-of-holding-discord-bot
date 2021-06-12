const { deleteItem } = require("../repository/deleteItem");
const { fetchAllItems } = require("../repository/fetchAllItems");
const { buildInventoryString } = require("../utils/buildRepositoryStrings");


const removeItem = async (index, channelId) => {
  const allItems = await fetchAllItems(buildInventoryString(channelId));
  const itemToRemove = allItems[index];
  await deleteItem(itemToRemove, buildInventoryString(channelId));
  return itemToRemove;
};

exports.removeItem = removeItem;
