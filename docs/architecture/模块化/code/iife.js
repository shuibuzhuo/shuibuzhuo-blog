(function (global) {
  var scores = [90, 95, 88, 35, 55, 91];

  function average() {
    const total = scores.reduce(function (res, score) {
      return res + score;
    }, 0);

    return `你的平均分是${total / scores.length}。`;
  }

  function fail() {
    const failScores = scores.filter((score) => score < 60);

    return `很抱歉，你有${failScores.length}次不合格。`;
  }

  function getScores() {
    return scores;
  }

  function setScores(newValue) {
    scores = newValue;
  }

  global.__Module = {
    scores,
    average,
    fail,
    getScores,
    setScores,
  };
})(window);

const module = window.__Module;

console.log(module.scores);
module.scores = [10, 20, 30];
console.log("module.scores", module.scores);
console.log("module.getScores()", module.getScores());
