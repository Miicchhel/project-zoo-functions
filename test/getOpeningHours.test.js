const getOpeningHours = require('../src/getOpeningHours');
const { hours } = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
  it('1 - Testando se getOpeningHours() retorna hours', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
  it('2 - Testando se getOpeningHours("Tuesday", "09:00-AM") retorna "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('3 - Testando se getOpeningHours("Tuesday", "09:00-AM") retorna "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('4 - Testando se getOpeningHours("Mnday", "8:30-AM") lança o erro "The day must be valid. Example: Monday"', () => {
    expect(() => getOpeningHours('Mnday', '8:30-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('5 - Testando se getOpeningHours("Monday", "8:30-AMM") lança o erro "The abbreviation must be "AM" or "PM""', () => {
    expect(() => getOpeningHours('Monday', '8:30-AMM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('6 - Testando se getOpeningHours("Monday", "13:30-AM") lança o erro "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Monday', '13:30-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('7 - Testando se getOpeningHours("Monday", "11:63-AM") lança o erro "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('Monday', '11:63-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('8 - Testando se getOpeningHours("Monday", "8:00-AM") lança o erro "The zoo is closed"', () => {
    expect(() => getOpeningHours('Monday', '8:00-AM')).toThrow('The zoo is closed');
  });
  it('9 - Testando se getOpeningHours("Monday", "z:00-AM") lança o erro "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Monday', 'z:00-AM')).toThrow('The hour should represent a number');
  });
  it('10 - Testando se getOpeningHours("Monday", "8-AM") lança o erro "The minutes should represent a number"', () => {
    expect(() => getOpeningHours('Monday', '8-AM')).toThrow('The minutes should represent a number');
  });
});
