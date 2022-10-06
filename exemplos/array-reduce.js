const arrayExemplo = [
  {
    id: 1,
    nome: 'Robert Downey Jr.',
    salario: 4500,
  },
  {
    id: 2,
    nome: 'Chris Evans',
    salario: 3800,
  },
  {
    id: 3,
    nome: 'Scarlett Johansson',
    salario: 5000,
  },
  {
    id: 4,
    nome: 'Tom Cruise',
    salario: 5000,
  },
  {
    id: 5,
    nome: 'Zendaya Maree Stoermer Coleman',
    salario: 3500,
  },
];

// Reduce, geralmente usamos quando queremos reduzir um array a um unico registro,
// muito util para somar valores de um array.
const totalSalarios = arrayExemplo
  .map((autores) => autores.salario)
  .reduce((previous, current) => {
    console.log({ previous, current });

    return previous + current;
  }, 0);

console.log(totalSalarios);
