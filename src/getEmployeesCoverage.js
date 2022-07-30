const data = require('../data/zoo_data');

const { employees, species } = data;

function buscaInfoBicho(array) {
  const arrayDosIdsDosBichos = array.map((bichoId) => bichoId);
  // console.log(arrayDosIdsDosBichos.length);
  const especies = [];
  const localizacao = [];
  for (let index = 0; index < arrayDosIdsDosBichos.length; index += 1) {
    const animal = species.find((bicho) => bicho.id === arrayDosIdsDosBichos[index]);
    especies.push(animal.name);
    localizacao.push(animal.location);
  }
  return [especies, localizacao];
}

function teste(entrada) {
  return entrada.reduce((array, pessoa) => {
    const { id, firstName, lastName, responsibleFor } = pessoa;
    const fullName = `${firstName} ${lastName}`;
    const [especies, locations] = buscaInfoBicho(responsibleFor);
    array.push({ id, fullName, species: especies, locations });
    return array;
  }, []);
}

function encontraComNome(entrada) {
  return employees
    .filter((pessoa) => pessoa.firstName === entrada.name || pessoa.lastName === entrada.name);
}

function encontraComId(entrada) {
  return employees.filter((pessoa) => entrada.id === pessoa.id);
}

function lacaErro(parametro) {
  if (parametro.length === 0) throw new Error('Informações inválidas');
}

function getEmployeesCoverage(entrada) {
  if (!entrada) {
    return teste(employees);
  }

  if (entrada.name) {
    const parametro = encontraComNome(entrada);
    lacaErro(parametro);
    return teste(parametro)[0];
  }

  if (entrada.id) {
    const parametro = encontraComId(entrada);
    lacaErro(parametro);
    return teste(parametro)[0];
  }
}

// const lionId = '0938aa23-f153-4937-9f88-4858b24d6bce';
// const tigersId = 'e8481c1d-42ea-4610-8e11-1752cfc05a46';
// const array = [lionId, tigersId];
// console.log(buscaInfoBicho(array));

// console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c' }));
module.exports = getEmployeesCoverage;
