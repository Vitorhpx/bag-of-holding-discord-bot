const mapXpEventToStr = (xpEvent) => {
  return `\r\n${xpEvent.name} - \`${xpEvent.qnt}\`xp`;
};

exports.mapXpEventToStr = mapXpEventToStr;
