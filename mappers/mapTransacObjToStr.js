const mapTransacObjToStr = (transacObj) => {

  const desc = transacObj.description !== '' ? ` - ${transacObj.description}` : '';
  return `[Copper: ${transacObj.copper}, Silver: ${transacObj.silver}, Gold: ${transacObj.gold}, Platinum: ${transacObj.platinum}]${desc}`;
};

exports.mapTransacObjToStr = mapTransacObjToStr;
