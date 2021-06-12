const handleHelp = async (msg) => {
  helpText = "**Commands:**\r\n\r\n**:crossed_swords: Add new item:** $add `\"Item name\"` -q `optional_quantity_number` -d `\"Optional Description\"`\r\n**Ex:** `$add \"Arrows +2\" -q 10 -d \"Arrows bought from the elf merchant\"`\r\n\r\n**:pencil: Update item:** $update `item_index_number` -q `optional_new_quantity_number` -d `\"Optional New Description\"`\r\n**Ex:** `$update 1 -q 8` (updating the second item quantity to 8, you spent 2 arrows from the 10)\r\n\r\n**:x: Remove item:** $remove `item_index_number`\r\n**Ex:** `$remove 1` (deleting the second item from the inventory)\r\n\r\n**:toolbox: See inventory:** $inventory\r\n\r\n**:coin: Add new transaction:** $coin -p `optional_platinum_number` -g `optional_gold_number` -s `optional_silver_number` -c `optional_copper_number` -d `\"Optional description number\"`\r\n**Ex:** `$coin -g 100` (adding 100g)\r\n**Ex:**  `$coin -g -10 -d \"Spent 10 gold coins\"`\r\n\r\n**:receipt: See last transactions:** $extract\r\n\r\n**:moneybag: See my coinbag balance:** $coinbag"

  msg.channel.send(helpText);
};

exports.handleHelp = handleHelp;
