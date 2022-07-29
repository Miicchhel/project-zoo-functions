const { species } = require('../data/zoo_data');

const getElephants = () =>
  species.find((specie) => specie.name === 'elephants');

const averageAge = ({ residents }) =>
  residents.reduce((sum, elephant) => sum + elephant.age, 0) / residents.length;

const computeData = (param, elephants) => {
  switch (param) {
  case 'count': // retorna a quantidade de elefantes
    return elephants.residents.length;
  case 'names': // retorna um array com a relação dos nomes de todos os elefantes
    return elephants.residents.map((elephant) => elephant.name);
  case 'averageAge': // retorna a média de idade dos elefantes
    return averageAge(elephants);
  default:
    return null;
  }
};

const handlerElephants = (param) => {
  if (param === undefined) {
    return undefined;
  }
  if (typeof param !== 'string') {
    return 'Parâmetro inválido, é necessário uma string';
  }
  const elephants = getElephants();
  if (Object.keys(elephants).includes(param)) {
    return elephants[param];
  }
  return computeData(param, elephants);
};

// console.log(handlerElephants('count'));
// console.log(handlerElephants('names'));
// console.log(handlerElephants('averageAge'));
// console.log(handlerElephants(''));
// console.log(handlerElephants(3));
// console.log(handlerElephants('id'));
// console.log((species[species.length - 2].name));
// module.exports = handlerElephants;
