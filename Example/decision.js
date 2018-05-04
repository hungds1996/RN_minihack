// return false to cheat, true to cooperate
// [
//   { yours: true, theirs: true },
//   { yours: true, theirs: false },
// ]
const decide = (history = []) => {
  const theirDecisions = history.length > 0 ? Array.from({length : history.length}, (n, i) => history[i]["theirs"]) : [];
  const myDecisions = history.length > 0 ? Array.from({length : history.length}, (n, i) => history[i]["yours"]) : [];
  return 
    history[history.length - 1]['theirs'] == true ? true : theirDecisions.filter(decision => decision == true).length > theirDecisions.filter(decision => decision == false) ? false : false
  // return history.length == 0 ? false : history[history.length - 1]['theirs'] == true ? true : false;
}

module.exports = decide;