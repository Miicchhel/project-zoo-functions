const handlerElephants = require('../src/handlerElephants');
const { species } = require('../data/zoo_data');

describe('Testes da função HandlerElephants', () => {
  it('1 - Testando se handlerElephants("count") retorna 4', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('2 - Testando se handlerElephants("names") retorna um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names').includes('Jefferson')).toEqual(true);
  });
  it('3 - Testando se handlerElephants("averageAge") retorna um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('4 - Testando se handlerElephants("") retorna null', () => {
    expect(handlerElephants('')).toBeNull();
  });
  it('5 - Testando se handlerElephants() retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('6 - Testando se handlerElephants(6) retorna expected', () => {
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(6)).toEqual(expected);
    expect(handlerElephants({})).toEqual(expected);
    expect(handlerElephants([])).toEqual(expected);
  });
  it('7 - Testando se handlerElephants(chave) retorna elephants[chave]', () => {
    expect(handlerElephants('id')).toEqual(species[species.length - 2].id);
    expect(handlerElephants('name')).toEqual(species[species.length - 2].name);
    expect(handlerElephants('popularity')).toEqual(species[species.length - 2].popularity);
    expect(handlerElephants('location')).toEqual(species[species.length - 2].location);
    expect(handlerElephants('availability')).toEqual(species[species.length - 2].availability);
    expect(handlerElephants('residents')).toEqual(species[species.length - 2].residents);
  });
});
