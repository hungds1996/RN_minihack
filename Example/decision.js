// return false to cheat, true to cooperate
// [
//   { yours: true, theirs: true },
//   { yours: true, theirs: false },
// ]
const decide = (history = []) => {
  return history.length == 0 ? false : history[history.length - 1]['theirs'] == true ? true : false
}

module.exports = decide;