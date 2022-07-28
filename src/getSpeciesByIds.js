const data = require('../data/zoo_data');

// console.log(data);

function getSpeciesByIds(...ids) {
  // if (ids.length === 0) return [];
  // return [data.species.find((species) => species.id === ids[0])];
  return data.species.filter((species) => ids.find((id) => species.id === id));
}

module.exports = getSpeciesByIds;
