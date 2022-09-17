
// Esses são os tipos primitivos 
const minhaString = "";
const meuNumero = 1;
const meuBoolean = true;
const meuNull = null;
const meuUndefined = undefined;

// Esses são os tipos não primitivos
const meuArray = [];
const meuObjeto = {};
const minhaFuncao = () => { };
function minhaOutraFuncao() { };
const minhaData = new Date();
const minhaRegex = new RegExp();

const explicacao = `
    Olha que legal, isso aqui se chama template string, muito pratico para escrever textos(strings), você não precisa ficar passando
    + para ficar concatenando.

    tipos primitivos
    - Olha o tipo da minha variavel(minhString): ${typeof minhaString}
    - Olha o tipo da minha variavel(meuNumero): ${typeof meuNumero}
    - Olha o tipo da minha variavel(meuBoolean): ${typeof meuBoolean}
    - Olha o tipo da minha variavel(meuNull): ${typeof meuNull}
    - Olha o tipo da minha variavel(meuUndefined): ${typeof meuUndefined}

    Tipos nao primitivos
    - Olha o tipo da minha variavel(meuArray): ${typeof meuArray}
    - Olha o tipo da minha variavel(meuObjeto): ${typeof meuObjeto}
    - Olha o tipo da minha variavel(minhaFuncao): ${typeof minhaFuncao}
    - Olha o tipo da minha variavel(minhaOutraFuncao): ${typeof minhaOutraFuncao}
    - Olha o tipo da minha variavel(minhaData): ${typeof minhaData}
    - Olha o tipo da minha variavel(minhaRegex): ${typeof minhaRegex}

    Essas variaveis podem se declaradas de 3 formas, com let, var e const.
    - const, são imutaveis, não se pode mudar o valor delas e sempre devem ser iniciadas!
    - var, mutavel, e possui escopo global, e tem alguns comportamentos perigosos, exemplo: hoisting
    - let, assim como var e mutavel, porem tem escopo local, ha algumas melhorias em relacao ao var, logo e mais indicada!
`

console.log(explicacao)