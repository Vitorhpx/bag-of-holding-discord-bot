const { saveItem } = require("../repository/saveItem");
const { buildInventoryString } = require("../utils/buildRepositoryStrings");

const addItem = async (name, qnt, desc, channelId) => {
  const item = {
    name: name,
    qnt: qnt,
    desc: desc
  };
  await saveItem(item, buildInventoryString(channelId));
  return item;
};

exports.addItem = addItem;
