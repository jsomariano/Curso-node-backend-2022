const arrayExemplo = [
  {
    id: 1,
    nome: 'Robert Downey Jr.',
  },
  {
    id: 2,
    nome: 'Chris Evans',
  },
  {
    id: 3,
    nome: 'Scarlett Johansson',
  },
  {
    id: 4,
    nome: 'Tom Cruise',
  },
  {
    id: 5,
    nome: 'Zendaya Maree Stoermer Coleman',
  },
];

// Sempre usamos o map quando queremos mapear o array, ou seja, no exemplo abaixo retornamos o nome
// inves de retornar o id e o nome.
// Atente-se o map SEMPRE retorna um array, mesmo que sem posicao nenhuma
const nomes = arrayExemplo.map((meuExemplo) => meuExemplo.nome);

const ids = arrayExemplo.map((meuExemplo) => meuExemplo.id);

console.log('Os ids são', ids);
console.log('Os nomes são', nomes);
