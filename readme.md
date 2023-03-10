# Desafio Bruxo

Este projeto foi reescrito em TypeScript com o objetivo de melhorar a manutenção do código, aumentar a legibilidade e a escalabilidade, além disso conta com uma estrutura de pastas e organização otimizada e melhorias na exibição de personages. Ele consiste em uma aplicação que consome a API de personagens da Saga Harry Potter e exibe uma lista de personagens, permitindo filtrá-los por nome, casa e ancestralidade.

## Tecnologias utilizadas

- Vite
- React
- TypeScript
- Styled Components
- React Icons

## Instalação

Para executar o projeto localmente, é necessário ter o Node.js instalado em sua máquina. Em seguida, clone o repositório e execute os seguintes comandos no diretório raiz:

```sh
yarn
yarn dev
```

A aplicação estará disponível em http://localhost:5173.

## Funcionamento

Ao carregar a página, a aplicação realiza uma requisição à API da Saga Harry Potter para buscar a lista de personagens. A lista é exibida em forma de cards que mostra a imagem, o nome e a descrição, como casa, ancestralidade e informações da varinha de cada personagem. Também há um campo de busca que permite filtrar os personagens por nome e dois campos select para selecionar qual casa e ancestralidade queira exibir. Esses filtros são combináveis.

A busca é realizada em tempo real, ou seja, à medida que o usuário digita o nome do personagem no campo de busca, a lista é atualizada automaticamente.

## Estrutura do projeto

- src/components: componentes reutilizáveis que podem ser usados em diferentes partes da aplicação.
- src/contexts: contextos da aplicação, que armazenam dados que podem ser compartilhados entre diferentes componentes.
- src/hooks: custom hooks que encapsulam lógicas complexas e podem ser reutilizados em diferentes partes da aplicação.
- src/pages: componentes que representam as páginas da aplicação.
- src/utils: constantes.
- src/types: interfaces que representam os dados retornados pela API.
- src/styles: componentes que representam o tema da aplição, com cores, fontes e medidas customizadas.

## Custom Hooks

useFetchData: realiza a requisição à API e retorna os dados dos personagens, bem como os estados de carregamento e erro.
useFilterByName: filtra os personagens pelo nome, de acordo com o valor digitado pelo usuário no campo de busca. Este hook utiliza o contexto de filtro para armazenar o valor do campo de busca.

## Contextos

FilterContext: armazena o estado do campo de busca e do filtro por ordem alfabética. Esses estados são compartilhados entre o componente de lista de personagens e o componente de campo de busca. O estado do campo de busca é utilizado pelo hook useFilterByName para realizar a filtragem dos personagens.

## Considerações finais

Ao reescrever o projeto em TypeScript, foi possível torná-lo mais seguro e menos suscetível a erros comuns de JavaScript. Além disso, o uso de interfaces e tipagem aumentou a legibilidade do código e facilitou a manutenção. O projeto também foi estruturado de forma a facilitar a reutilização de componentes e hooks em diferentes partes da aplicação, tornando-o mais escalável.
