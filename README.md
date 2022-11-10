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
