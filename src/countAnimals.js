const data = require('../data/zoo_data');

function contaTodosAnimaisPeloSex(animal) {
  return data.species.find((bicho) => bicho.name === animal.specie).residents
    .filter((bicho) => bicho.sex === animal.sex).length;
}

function contaTodosAnimaisPelaSpecie(animal) {
  return data.species.find((bicho) => bicho.name === animal.specie).residents.length;
}

function countAnimals(animal) {
  if (!animal) {
    const animais = {};
    data.species.forEach((elemento) => { animais[elemento.name] = elemento.residents.length; });
    return animais;
  }
  if (animal.specie && animal.sex) {
    return contaTodosAnimaisPeloSex(animal);
  }
  return contaTodosAnimaisPelaSpecie(animal);
}

// console.log(countAnimals());
// console.log(countAnimals({ specie: 'giraffes' }));
// console.log(countAnimals({ specie: 'bears', sex: 'male' }));

module.exports = countAnimals;
