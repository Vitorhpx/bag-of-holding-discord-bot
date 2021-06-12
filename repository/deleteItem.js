const { dbClient } = require("./dbClient");

const deleteItem = async (item, inventoryId) => {
  try {
    let inventory = await dbClient.get(inventoryId);
    inventory = inventory.filter(itemToFilter => item.id !== itemToFilter.id);
    await dbClient.set(inventoryId, inventory);
  } catch (error) {
    throw error;
  }
};
exports.deleteItem = deleteItem;
