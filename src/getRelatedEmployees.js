const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((empregado) => empregado.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  return data.employees.filter((pessoa) => pessoa.managers.includes(managerId))
    .map((pessoa) => `${pessoa.firstName} ${pessoa.lastName}`);
}
// console.log(isManager('ef3778eb-2844-4c7c-b66c-f432073e1c6b'));
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
