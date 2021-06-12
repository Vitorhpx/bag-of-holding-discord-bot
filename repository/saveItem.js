const { dbClient } = require("./dbClient");
const { v4 } = require('uuid');

const saveItem = async (item, inventoryId) => {
  try {
    let inventory = await dbClient.get(inventoryId);
    console.log({ inventory });
    if (inventory === null) {
      inventory = [];
    }
    item.id = v4();
    inventory.push(item);
    console.log({ inventory });
    await dbClient.set(inventoryId, inventory);

  } catch (error) {
    throw error;
  }
};
exports.saveItem = saveItem;
