class Game {
  constructor() {
    this.stack = [[1, 2, 3], [], []]
  }
}

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Game.prototype.promptMove(callback) {
  reader.question("Which tower do you want to take from?", answer => {
    const startIdx = parseInt(answer);
    reader.question("Which tower do you want to move to?", answer2 => {
      const endIdx = parseInt(answer2);
      callback(answer, answer2);
    });
  });
}

Game.prototype.isValidMove(startTowerIdx, endTowerIdx) {
  let disk = this.stack[startTowerIdx].unshift;
  if disk < this.stack[endTowerIdx][0] || this.stack[endTowerIdx] === [];
    return true;
  else {
    return false;
  }
}
