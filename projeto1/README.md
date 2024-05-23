# 🌏FrontendCTESP🌏

Este projeto é uma aplicação web para gerenciar eventos, que inclui a capacidade de exibir esses eventos em um mapa, para alem disto tem um sistema de login e registo com **persistencia de dados**.Nao tem histórico de pesquisa para esta API porque não existia contexto de uso.
A aplicação foi construída principalmente usando Vue.js e Firebase para o armazenamento de dados e autenticação de usuários.O projeto nao é maioritariamente de SPA por motivos de estética e contem todos os requisitos que foram pedidos para este trabalho.

## Funcionalidades
- ⚙️Sistema Apelativo e intuitivo
- 🛠️Adicionar, atualizar e deletar eventos.
   Exibir eventos em um mapa.
- 🌐 Autenticação de usuários com Firebase Authentication.
- 🛡️Diferenciação de privilégios de administrador.

## Tecnologias Utilizadas

- Vue.js e Vite(como extra);
- Firebase (Firestore, Authentication);
- API MapLibre GL JS para mapas;

# Para Experimentar

**Fazer Login com a conta: adm@adm.com e password:123456**
e na aba novidades será possivel visualizar todas as funcionalidades que um Administrador pode realizar.
### Pré-requisitos

- Node.js e npm instalados na sua máquina.

## Project Setup

```sh
npm i
```

## Iniciar o Projeto

```sh
 npm run dev
```

### NPM usados

```sh
npm run build
npm install firebase
npm install vue-router@4
npm i @vueuse/core
npm install vue-maplibre-gl
npm install -D sass
npm install vue-maplibre-gl
9FBkxdhAHfvtjOyUiDuk
```
### Configuração do Firebase:

    ```sh
    const firebaseConfig = {
    apiKey: "AIzaSyAVQLj0DrthXyZd_1elbEtn_pHHUuE0YmM",
    authDomain: "frontendctesp.firebaseapp.com",
    projectId: "frontendctesp",
    storageBucket: "frontendctesp.appspot.com",
    messagingSenderId: "848378733674",
    appId: "1:848378733674:web:b82f61a434d8b506f05613"
    ```

