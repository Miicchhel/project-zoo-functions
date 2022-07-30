const data = require('../data/zoo_data');

const { species, employees } = data;

function encontrarAnimal(array) {
  return array[0].residents.reduce((maior, bicho) => {
    const { age } = bicho;
    if (maior.age < age) return bicho;
    return maior;
  });
}

function getOldestFromFirstSpecies(id) {
  const buscandoAnimalPeloId = employees.find((pessoa) => pessoa.id === id).responsibleFor[0];
  const filtrandoSpecies = species.filter((animal) => animal.id === buscandoAnimalPeloId);
  return Object.values(encontrarAnimal(filtrandoSpecies));
}
// const id = 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1';
// console.log(getOldestFromFirstSpecies(id));

module.exports = getOldestFromFirstSpecies;
