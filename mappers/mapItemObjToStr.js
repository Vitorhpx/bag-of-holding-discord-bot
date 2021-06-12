const mapItemObjToStr = (itemObj, index) => {
  const indexLocale = (index !== null) ? (index).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) : null;
  const indexToPrint = indexLocale ? `\`${indexLocale}\` ` : ""
  return `${indexToPrint}${itemObj.qnt}x ${itemObj.name} ${itemObj.desc ? `- ${itemObj.desc}` : ''}`;
};
exports.mapItemObjToStr = mapItemObjToStr;
