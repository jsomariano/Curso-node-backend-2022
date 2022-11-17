# Introdução

A ideia desse projeto e construir uma aplicação usando NodeJs, essa aplicação deve estar preparada para receber requisições http, e tambem responde-las! As tecnologias usadas para o desenvolvimento dessa aplicação são as mais comums no mercado de trabalho atual, assim trazendo uma arquitetura o mais proximo possivel do ambiente de trabalho porem não fugindo da didatica.

# Como executar o projeto

1 - Quando clonado o projeto, crie um arquivo ```.env```, baseado no arquivo ```.env.example```.

2 - Agora basta executar o comando

```shell
npm install
```

Esse comando instala todas as dependencias declaradas no package.json, se tudo ocorreu bem, agora você tem uma nova pasta, chamada de ```node_modules```

3 - Agora execute o comando

```shell
npm run migrate:latest
```

Esse comando e responsavel por criar as tabelas no banco de dados, ele sa baseia nas migrações disponivels dentro da pasta, `database/migrations`

4 - Agora execute o comando

```shell
npm run start
```
se tudo ocorreu bem, agora você tem a seguinte resposta no terminal ```http://localhost:3000/```

