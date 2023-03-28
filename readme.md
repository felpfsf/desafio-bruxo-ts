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
//instalar as dependências
yarn
// iniciar a aplicação
yarn dev
```

A aplicação estará disponível em <http://localhost:5173>.

## Funcionamento

Ao carregar a página, a aplicação realiza uma requisição à API da Saga Harry Potter para buscar a lista de personagens. A lista é exibida em forma de cards que mostra a imagem, o nome e a descrição, como casa, ancestralidade e informações da varinha de cada personagem. Também há um campo de busca que permite filtrar os personagens por nome e dois campos select para selecionar qual casa e ancestralidade queira exibir. Esses filtros são combináveis.

A busca por nome é realizada em tempo real, ou seja, à medida que o usuário digita o nome do personagem no campo de busca, a lista é atualizada automaticamente.

## Estrutura do projeto

- **src/components**: componentes reutilizáveis que podem ser usados em diferentes partes da aplicação.
- **src/contexts**: contextos da aplicação, que armazenam dados que podem ser compartilhados entre diferentes componentes.
- **src/hooks**: custom hooks que encapsulam lógicas complexas e podem ser reutilizados em diferentes partes da aplicação.
- **src/pages**: componentes que representam as páginas da aplicação.
- **src/utils**: constantes e funções utilizadas na aplicação.
- **src/types**: interfaces que representam os dados retornados pela API.
- **src/styles**: componentes que representam o tema da aplição, com cores, fontes e medidas customizadas.

## Custom Hooks

**useFetchData**: realiza a requisição à API e retorna os dados dos personagens, bem como os estados de carregamento e erro.
**useScroll**: verfica a posição atual do scroll na tela do usuário, permitindo usar para definir quando o botão de "Voltar ao topo" deverá ser exibido.
useDataContext: custom hook para o useContext consumindo o DataContext.

## Contextos

**DataContext**: é um contexto que fornece dados relacionados aos personagens, através da URL da API é feita a requisição e os dados são armazenados em "characters". O context também permite filtrar esses personagens com base em três critérios: acenstralidade, casa e nome fornecido no campo de busca. Os filtros são armazenados em "filters" e podem ser alterados por meio da função "setFilters". Os personagesn filtrados são armazenados em um "filteredCharacters", caso não haja nenhum filtro ativado ele listará todos os personagens. O status indica o estado atual do carregamento de dados, podendo ser "loading", "loaded" ou "error".

## Considerações finais

Ao reescrever o projeto em TypeScript, foi possível torná-lo mais seguro e menos suscetível a erros comuns de JavaScript. Além disso, o uso de interfaces e tipagem aumentou a legibilidade do código e facilitou a manutenção. O projeto também foi estruturado de forma a facilitar a reutilização de componentes e hooks em diferentes partes da aplicação, tornando-o mais escalável.
