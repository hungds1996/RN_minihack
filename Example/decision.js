// return false to cheat, true to cooperate
// [
//   { yours: true, theirs: true },
//   { yours: true, theirs: false },
// ]
const decide = (history = []) => {
  const theirDecisions = history.length > 0 ? Array.from({length : history.length}, (n, i) => history[i]["theirs"]) : [];

  function isTrue(decision) {
    return decision == true;
  }

  return history.length == 0 ? false : theirDecisions.slice(theirDecisions.length - 2, theirDecisions.length).every(isTrue) ? false :
    history[history.length - 1]['theirs'] == true ? true : false
  // return history.length == 0 ? false : history[history.length - 1]['theirs'] == true ? true : false;
}
module.exports = decide;