const somme = (a, b) => a + b;
const diff = (a, b) => a - b;

exports.somme = somme;
exports.diff = diff;

const mult = (a, b) => a * b;
const div = (a, b) => a / b;

module.exports = {
  mult,
  div,
};
