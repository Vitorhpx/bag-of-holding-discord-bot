const { dbClient } = require("./dbClient");

const putItem = async (updatedItem, inventoryId) => {
  try {
    let inventory = await dbClient.get(inventoryId);
    const indexToUpdate = inventory.map((item) => item.id).indexOf(updatedItem.id);
    if (indexToUpdate !== -1) {
      inventory[indexToUpdate] = updatedItem;
    }
    await dbClient.set(inventoryId, inventory);

  } catch (error) {
    throw error;
  }
};
exports.putItem = putItem;
