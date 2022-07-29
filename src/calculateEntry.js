const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // calcular a quantidade de visitantes por faixa etária
  return entrants.reduce((acc, { age }) => {
    if (age < 18) acc.child += 1;
    if (age >= 18 && age < 50) acc.adult += 1;
    if (age >= 50) acc.senior += 1;
    return acc;
  }, { adult: 0, senior: 0, child: 0 });
}

function calculateEntry(entrants) {
  // somar o valor da entrada das pessoas no zoológico
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const quantidadeEntrada = [countEntrants(entrants)];
  return quantidadeEntrada.reduce((soma, valor) => (
    soma + (valor.child * 20.99) + (valor.adult * 49.99) + (valor.senior * 24.99)), 0);
}

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

// console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
