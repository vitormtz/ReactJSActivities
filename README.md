# ReactJS Activities

## Pré-requisitos

- [Node.js](https://nodejs.org/en/) instalado
- [Git](https://git-scm.com/) instalado

## Configuração do projeto

1. **Clone o repositório:**

   Abra o terminal e execute o seguinte comando para clonar o repositório:

   ```bash
   git clone https://github.com/vitormtz/ReactJSActivities.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd ReactJSActivities
   ```

3. **Instale as dependências:**

   Antes de executar os exercícios, você precisa instalar as dependências do projeto. Execute o seguinte comando:

   ```bash
   npm install
   ```

## Inicialização do projeto

1. **Róde o código:**

   Abra o terminal e execute o seguinte comando para iniciar o software:

   ```bash
   npm run dev
   ```
   
1. **Acesse o site**

   Após executar o código acima, uma URL será exibida no terminal. Clique nela para acessar o site.
   
## Explicação das Atividades

## 1. Contador Simples
**Propósito:** Praticar o uso básico do hook `useState` para gerenciar o estado de um componente. O contador permite incrementar e decrementar um valor, com a condição adicional de não permitir que o valor seja menor que zero.

**Desafio:** Implementar uma lógica para evitar que o contador vá abaixo de zero.

## 2. Alteração de Cor de Fundo
**Propósito:** Explorar o uso combinado de `useState` e `useEffect` para alterar dinamicamente o estilo de um componente. A cor de fundo da página muda cada vez que o usuário clica em um botão.

**Desafio:** Gerar cores aleatórias a cada clique.

## 3. Lista de Tarefas
**Propósito:** Criar um aplicativo de lista de tarefas (to-do list) para praticar a manipulação de listas e o uso de `useState`. O usuário pode adicionar, remover e marcar tarefas como concluídas.

**Desafio:** Adicionar funcionalidade para filtrar e exibir apenas tarefas pendentes.

## 4. Temporizador com useEffect
**Propósito:** Implementar um temporizador que conta o tempo em segundos, utilizando `useEffect` para iniciar o temporizador e `useState` para atualizar o tempo exibido.

**Desafio:** Adicionar botões para pausar e reiniciar o temporizador.

## 5. Filtro de Lista
**Propósito:** Criar um componente que filtra uma lista de nomes com base em um campo de entrada. Praticar o uso de `useState` para controlar o valor do filtro e a função `map` para renderizar a lista filtrada.

**Desafio:** Ignorar maiúsculas e minúsculas ao filtrar.

## 6. Formulário de Registro Simples
**Propósito:** Desenvolver um formulário de registro com validações básicas. Utilizar `useState` para armazenar os valores dos campos e exibir uma mensagem de boas-vindas após o envio.

**Desafio:** Adicionar validações para garantir que todos os campos estejam preenchidos antes de enviar.

## 7. Aplicação de Requisição de Dados Simples
**Propósito:** Praticar a requisição de dados de uma API pública (como JSONPlaceholder) usando `useEffect`. Exibir os dados obtidos em uma lista e permitir a recarga dos dados.

**Desafio:** Adicionar um indicador de carregamento durante a requisição.

## 8. Galeria de Imagens com Visualização Detalhada
**Propósito:** Criar uma galeria de imagens onde o usuário pode clicar em uma imagem para visualizá-la em um modal. Utilizar `useState` para controlar a imagem selecionada e renderizar o modal condicionalmente.

**Desafio:** Adicionar botões de navegação entre as imagens e um botão para fechar o modal.

## 9. Timer com Intervalo e Alerta
**Propósito:** Implementar um timer de contagem regressiva onde o usuário define o tempo inicial. Utilizar `useState` para armazenar o tempo e `useEffect` para controlar a contagem regressiva.

**Desafio:** Adicionar botões para pausar e reiniciar o timer.

## 10. Componentes com Tabs Navegáveis
**Propósito:** Criar uma interface de abas (tabs) onde cada aba exibe um conteúdo diferente. Utilizar `useState` para controlar a aba ativa e renderizar o conteúdo correspondente.

**Desafio:** Adicionar um efeito visual para destacar a aba ativa.
