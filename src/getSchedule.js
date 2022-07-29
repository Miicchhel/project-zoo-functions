const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

const listaAnimais = species.map((animal) => animal.name);
const listaDias = Object.keys(hours);

// console.log(hours[listaDias[0]]);

function showAnimaisDoDia(dia) {
  return species.reduce((array, bicho) => {
    if (bicho.availability.includes(dia)) array.push(bicho.name);
    return array;
  }, []);
}

function showDayInfo(scheduleTarget) {
  if (!Array.isArray(scheduleTarget)) {
    const { open, close } = hours[scheduleTarget];
    const saida = {};
    saida[scheduleTarget] = { officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: showAnimaisDoDia(scheduleTarget) };
    return saida;
  }
}

function showInfoAllDay() {
  return listaDias.reduce((objDeEntrada, elemento) => {
    const objetoDeSaida = objDeEntrada;
    const { open, close } = hours[elemento];
    const horario = `Open from ${open}am until ${close}pm`;
    objetoDeSaida[elemento] = { officeHour: horario, exhibition: showAnimaisDoDia(elemento) };
    if (elemento === 'Monday') {
      objetoDeSaida[elemento] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    }
    return objetoDeSaida;
  }, {});
}

function getSchedule(scheduleTarget) {
  // console.log(scheduleTarget);
  if (listaAnimais.includes(scheduleTarget)) {
    // console.log('entrei 1º if');
    return species.find((bicho) => bicho.name === scheduleTarget).availability;
  }
  if (scheduleTarget === 'Monday') {
    // console.log('entrei 2º if');
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  if (listaDias.includes(scheduleTarget)) {
    // console.log('entrei 3º if');
    return showDayInfo(scheduleTarget);
  }
  return showInfoAllDay();
}

// console.log(getSchedule('Tuesday'));
// console.log(getSchedule('Monday'));
// console.log(getSchedule());

module.exports = getSchedule;
