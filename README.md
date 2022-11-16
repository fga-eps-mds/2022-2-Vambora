# Vambora

Esse README ainda está em contrução.

## Sobre

O Vambora é um projeto realizado por alunos da Universidade de Brasília na disciplina de Métodos de Desenvolvimento de Software com a professora Carla, no semestre 2022-2. O intuito dele é facilitar com que alunos consigam combinar caronas, por meio de cálculo de rotas, horários, campus, entre outros parâmetros.

## Tecnologias

### Geral

Como linguagem principal, optamos por utilizar o TypeScript, que é um superset do JavaScript, e apresenta tipagem estática. A grande vantagem que ele apresenta, é que erros são encontrados antes mesmo de rodar a aplicação, além do autocomplete fornecido pela IDE, que fornece uma produtividade muito boa. Também optamos por fazer testes unitários utilizando o Vitest, que é uma ferramenta recente criada pelos mesmos criadores do Vite e do Vue. Ele apresenta um ganho de performance muito alto quando comparado ao tradicional Jest, pois utiliza o ECMAScript Modules, e roda os testes bem mais rápidamente, além de já possuir integração com o TypeScript. Para garantir um ambiente de desenvolvimento mais padronizado e realista com relação ao ambiente de produção, optamos por utilizar o Docker, juntamente com o docker compose. Por fim, para padronizar a estrutura do código, utilizaremos o ESLint e o Prettier.

### Mobile

No mobile, optamos por utilizar o React Native, que é uma biblioteca criada pelo time do Facebook para o desenvolvimento de interfaces mobile com uma abstração em relação ao desenvolvimento nativo, que tem como principal vantagem a filosofia do "write once, run anywhere", que permite que o mesmo código rode tanto no Android quanto no iOS. Juntamente ao React Native, utlizaremos o Expo, que fornece uma camada de abstração, que facilita a conexão ao projeto e fornece algumas APIs para auxiliar no desenvolvimento do projeto.

### Server

No back-end, optamos por usar o Node, que é um runtime utilizado para rodar código JavaScript (e, no caso desse projeto, TypeScript, utilizando um compilador adequado) no lado do servidor. Com o Docker, uma base de dados PostgreSQL é levantada, juntamente com o Prisma, que é um ORM. Optamos por utilizar o Prisma pois, além de ser um ORM, ele fornece uma excelente integração com o TypeScript. O Docker compose se mostrou bastante útil para fazer essa orquestração, pois com ele conseguimos subir o postgres e, com o dockerize, fazer com que ele espere o banco terminar de subir, para em seguida instalar as depdendências, rodar as migrations, executar o prisma studio para só depois que tudo estiver pronto, rodar o servidor. No back-end, vamos priorizar a utilização de arquitetura SOLID pois, por se tratar de um projeto grande, a escalabilidade se torna muito importante.

## Como rodar

1. Instale o Node (de preferência na versão LTS)
2. Instale o Docker
3. Instale o yarn: 
```
  sudo npm i -g yarn
```
4. Clone o repositório
5. Para executar o server:
```
  docker compose up
```
6. Para executar o mobile:
```
  cd mobile
  yarn
  yarn start
```
7. Scanneie o QR Code no aplicativo do Expo.
8. Caso queira rodar no emulador, basta ter o Android Studio instalado ou o XCode, e rodar: 
```
  yarn android
```
ou
```
  yarn ios
```
respectivamente.

## Backlog do produto

|Épico|Feature|US|Descrição|
|--|--|--|--|
|E01|FT01|US01|Eu, como usuário, gostaria de criar uma conta.|
|E01|FT01|US02|Eu, como usuário, gostaria de ver minha conta.|
|E01|FT01|US03|Eu, como usuário, gostaria de editar os dados da minha conta.|
|E01|FT01|US04|Eu, como usuário, gostaria de apagar minha conta.|
|E01|FT02|US05|Eu, como usuário, gostaria de criar meus dias de aulas.|
|E01|FT02|US06|Eu, como usuário, gostaria de ver meus dias de aulas.|
|E01|FT02|US07|Eu, como usuário, gostaria de editar meus dias de aulas.|
|E01|FT02|US08|Eu, como usuário, gostaria de apagar meus dias de aulas.|
|E01|FT03|US09|Eu, como usuário, gostaria de criar meus horários.|
|E01|FT03|US10|Eu, como usuário, gostaria de ver meus horários.|
|E01|FT03|US11|Eu, como usuário, gostaria de editar meus horários.|
|E01|FT03|US12|Eu, como usuário, gostaria de apagar meus horários.|
|E02|FT04|US13|Eu, como usuário, gostaria de criar uma rota.|
|E02|FT04|US14|Eu, como usuário, gostaria de ver minhas rotas.|
|E02|FT04|US15|Eu, como usuário, gostaria de editar uma rota.|
|E02|FT04|US16|Eu, como usuário, gostaria de apagar uma rota.|
|E02|FT05|US17|Eu, como usuário, gostaria de informar quantas vagas tem no meu carro.|
|E02|FT05|US18|Eu, como usuário, gostaria de solicitar uma vaga em um carro.|
|E02|FT06|US19|Eu, como usuário, gostaria de ver as rotas próximas a minha localização e que tem o mesmo destino que o meu.|
|E02|FT06|US20|Eu, como usuário, gostaria que me enviassem solicitações para acessar meu contato.|
|E02|FT06|US21|Eu, como usuário, gostaria de enviar solicitações para acessar o contato de outras pessoas.|
