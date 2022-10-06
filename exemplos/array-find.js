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

// Find, sempre utilizamos quando queremos encontrar determinado item dentro de um array,
// usamos condicionais para verificar existencia de um valor
// Caso a verificacao for verdadeira ele vai retornar o registro atual,
// caso contrario vai para proxima posicao do array
// se nao encontrar nenhum ele retorna null
const autorTopGun = arrayExemplo.find((item) => item.nome === 'Tom Cruise');

console.log('Quem e o autor do top gun', autorTopGun);
