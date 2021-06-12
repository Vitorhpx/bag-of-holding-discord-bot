const { mapXpEventToStr } = require('./mapXpEventToStr');

const mapXpBoardToView = (xpBoard) => {
  if (xpBoard !== null && xpBoard.length > 0) {
    const totalXp = xpBoard.reduce((acc, xpEvent) => acc + xpEvent.qnt, 0);
    const last10EventsMapped = xpBoard
      .slice(-10)
      .reverse()
      .map((event) => mapXpEventToStr(event));

    return `**:bar_chart: Party total XP:** ${totalXp}\r\n**Last 10 Events:**\r\n${last10EventsMapped}`;
  }

  return `You have 0 xp records`;
};

exports.mapXpBoardToView = mapXpBoardToView;
