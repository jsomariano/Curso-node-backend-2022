const condicionaisNode = [
    {
        condicional: "=",
        descricao: "Esse e um parametro de atribuição, usamos para atribuir determinado valor a uma variavel"
    },
    {
        condicional: "==",
        descricao: "Esse e um parametro de comparação, usamos para verificar se determinado valore igual ao outro, seu retorno sempre sera um booleano",
        teste: 1 == 1,
        teste2: 1 == 2,
    },
    {
        condicional: "===",
        descricao: "Esse e um parametro de comparacão, esse verifica alem do valor, o tipo da variavel",
        teste: 1 === 1,
        teste2: 1 === "1"
    },
    {
        condicional: ">",
        descricao: "Esse e um parametro de comparacao, usamos para verificar se um valor e maior que outro",
        teste: 1 > 0,
        teste2: 1 > 1,
    },
    {
        condicional: "<",
        descricao: "Esse e um parametro de comparacao, usamos para verificar se um valor e menor que outro",
        teste: 1 < 0,
        teste2: 1 < 2,
    },
    {
        condicional: ">=",
        descricao: "Esse e um parametro de comparacao, usamos para verificar se o valor e maior ou igual.",
        teste: 1 >= 1,
        teste2: 1 >= 2
    },
    {
        condicional: "<=",
        descricao: "Esse e um parametro de comparacao, usamos para verificar se o valor e menor ou igual.",
        teste: 1  <= 1,
        teste2: 1 <= 0
    },
    {
        condicional: "/",
        descricao: "Divisao, nunca divida por zero",
        teste: 10 / 5,
        teste2: 10 / 0
    },
    {
        condicional: "*",
        descricao: "multiplicacao",
        teste: 2 * 5,
        teste2: 2 * 0 
    },
    {
        condicional: "+ e -",
        descricao: "Mais e menos",
        teste: 1 + 2,
        teste2: 2 - 1,
    },
    {
        condicional: "%",
        descricao: "pegar resto de divisão, ja sabe ne, cuidado com os zeros",
        teste: 10 % 3,
        teste2: 10 % 0
    },
    {
        condicional: "**",
        descricao: "Calculo com expoente",
        teste: 2 ** 3,
        teste2: 2 ** 0
    },
]

console.table(condicionaisNode)