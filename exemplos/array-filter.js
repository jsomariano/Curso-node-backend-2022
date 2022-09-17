const arrayExemplo = [
    {
        id: 1,
        nome: "Robert Downey Jr.",
        genero: "Masculino"
    },
    {
        id: 2,
        nome: "Chris Evans",
        genero: "Masculino"
    },
    {
        id: 3,
        nome: "Scarlett Johansson",
        genero: "Feminino"
    },
    {
        id: 4,
        nome: "Tom Cruise",
        genero: "Masculino"
    },
    {
        id: 5,
        nome: "Zendaya Maree Stoermer Coleman",
        genero: "Feminino"
    }
]


const atores = arrayExemplo.filter(pessoa => pessoa.genero === "Masculino");
const atrizes = arrayExemplo.filter(pessoa => pessoa.genero === "Feminino");

console.log("Os atores são: ", atores)
console.log("As atrizes são: ", atrizes)

