const arrayExemplo = [0,1,2,3,4,5,6,7,8,9,10]

// Parecido com o map, porem com a particuliaridade de não ter retorno

const retorno = arrayExemplo.forEach(item => {
    console.log(item * 2)
})

console.log(retorno)