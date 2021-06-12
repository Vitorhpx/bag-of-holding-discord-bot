const { dbClient } = require("./dbClient");

const fetchAllItems = async (inventoryId) => {
  const inventory = await dbClient.get(inventoryId);
  return inventory;
};

exports.fetchAllItems = fetchAllItems;
