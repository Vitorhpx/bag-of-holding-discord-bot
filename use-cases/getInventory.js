const { fetchAllItems } = require("../repository/fetchAllItems");
const { buildInventoryString } = require("../utils/buildRepositoryStrings");

const getInventory = async (channelId) => {
  const allItems = await fetchAllItems(buildInventoryString(channelId));

  return allItems;
};

exports.getInventory = getInventory;
