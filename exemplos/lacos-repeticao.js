// for, usado geralmente quando sabe quantidade de registro deseja iterar
const exemploFor = [3, 2, 1]
for (let index = 0; index < exemploFor.length; index++) {
    const element = exemploFor[index];
    console.log("Exemplo de for, estou no index ", index, " pegando o valor ", element)
}

// While, usado geralmente quando queremos executar determinada instrução ate que determinada condiçãos seja atendida
let exemploWhile = 0
while (exemploWhile <= 5) {
    exemploWhile += 1
    console.log("Exemplo de while incrementando uma variavel", exemploWhile)
}

// Do While, quase o mesmo comportamento do while, porem, a condição fica no final da instrução
let exemploDoWhile = 0
do {
    exemploDoWhile += 1
    console.log("Exemplo de Do While incrementando variavel, note a adicao de 1 em comparacao ao While: ", exemploDoWhile)
} while (exemploDoWhile <= 5);