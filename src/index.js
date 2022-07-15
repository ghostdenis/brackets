module.exports = function check(str, bracketsConfig) {
  let openedBrackets = [];
  let closedBrackets = [];
  for (let i in bracketsConfig) {
    openedBrackets.push(bracketsConfig[i][0]);
    closedBrackets.push(bracketsConfig[i][1]);
  }
  let order = [];
  for (let char of str) {
    if (char === order[order.length - 1]) {
      order.pop();
      continue;
    }
    if (openedBrackets.find((o) => char == o)) {
      order.push(closedBrackets[openedBrackets.findIndex((o) => char == o)]);
      continue;
    }
    return false;
  }
  if (order.length) {
    return false;
  } else {
    return true;
  }
}