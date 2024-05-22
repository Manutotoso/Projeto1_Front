# FrontendCTESP

Este projeto é uma aplicação web para gerenciar eventos, que inclui a capacidade de exibir esses eventos em um mapa. 
A aplicação foi construída usando Vue.js e Firebase para o armazenamento de dados e autenticação de usuários.

## Funcionalidades

- Adicionar, atualizar e deletar eventos.
- Exibir eventos em um mapa.
- Autenticação de usuários com Firebase Authentication.
- Diferenciação de privilégios de administrador.

## Tecnologias Utilizadas

- Vue.js
- Firebase (Firestore, Authentication)
- MapLibre GL JS para mapas

### Pré-requisitos

- Node.js e npm instalados na sua máquina.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production and npm used

```sh
npm run build
npm install firebase
npm install vue-router@4
npm install vue-maplibre-gl
npm install -D sass
npm install vue-maplibre-gl
9FBkxdhAHfvtjOyUiDuk
```
### Configure o Firebase:

    ```sh
    const firebaseConfig = {
    apiKey: "AIzaSyAVQLj0DrthXyZd_1elbEtn_pHHUuE0YmM",
    authDomain: "frontendctesp.firebaseapp.com",
    projectId: "frontendctesp",
    storageBucket: "frontendctesp.appspot.com",
    messagingSenderId: "848378733674",
    appId: "1:848378733674:web:b82f61a434d8b506f05613"
    ```

### Execute o projeto:

    ```bash
    npm run DEV
    ```