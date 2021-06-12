function getArgumentValue(messageBlocks, argumentIdentificator, defaultValue) {
  const index = messageBlocks.indexOf(argumentIdentificator);

  return index > 0 ? messageBlocks[index + 1] : defaultValue;
}

exports.getArgumentValue = getArgumentValue;
