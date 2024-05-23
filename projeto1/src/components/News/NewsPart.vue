<template>
    <section id="page-banner" class="pt-105 pb-110 bg_cover" data-overlay="8" style="background-image: url(../../../assets/images/page-banner-2.jpg)">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-banner-cont">
              <h2>Novidades</h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><router-link to="#">Home</router-link></li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div id="app">
      <div class="messages-container">
        <div v-for="(message, index) in messages" :key="message.id" :class="{'highlight-message': index === 0, 'message': true}">
          <h3>Evento {{ index + 1 }}</h3>
         <input v-model="message.title" placeholder="Título" type="text" class="title-input">
          <textarea v-model="message.description" placeholder="Descrição" class="message-input" rows="3"></textarea>
          <input v-model="message.datetime" placeholder="Data e Hora" type="text" class="message-input">
          <input v-model="message.location" placeholder="Local" type="text" class="message-input">
          <div class="message-buttons" v-if="isLoggedIn && isAdministrator">
            <button @click="updateMessage(message)" class="update-button">Atualizar</button>
            <button @click="deleteMessage(message.id)" class="delete-button">Deletar</button>
          </div>
          <button @click="showOnMap(message.location)" class="show-map-button">Mostrar no Mapa</button>
        </div>
      </div>
      <hr>
      <div class="new-message" v-if="isLoggedIn && isAdministrator">
        <h3>Adicionar Novo Evento</h3>
        <input v-model="newTitle" placeholder="Novo Título" type="text" class="title-input">
        <textarea v-model="newDescription" placeholder="Nova Descrição" class="message-input" rows="3"></textarea>
        <input v-model="newDatetime" placeholder="Nova Data e Hora" type="text" class="message-input">
        <input v-model="newLocation" placeholder="Novo Local" type="text" class="message-input">
        <button @click="addNewMessage" class="add-button">Adicionar</button>
      </div>
    </div>
  </template>
  
  
  <script>
  import { getFirestore, onSnapshot, collection, doc, deleteDoc, setDoc, addDoc, orderBy, query } from 'firebase/firestore';
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { ref, onUnmounted } from 'vue';
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  
  const firebaseConfig = {
  apiKey: "AIzaSyAVQLj0DrthXyZd_1elbEtn_pHHUuE0YmM",
  authDomain: "frontendctesp.firebaseapp.com",
  projectId: "frontendctesp",
  storageBucket: "frontendctesp.appspot.com",
  messagingSenderId: "848378733674",
  appId: "1:848378733674:web:b82f61a434d8b506f05613"
};
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  const auth = getAuth();
  
  export default {
    name: 'App',
    data() {
      return {
        messages: ref([]),
        newTitle: '',
        newDescription: '',
        newDatetime: '',
        newLocation: '',
        isLoggedIn: ref(false),
        isAdministrator: ref(false),
      }
    },
    methods: {
      addNewMessage() {
        addDoc(collection(db, 'messages'), {
          title: this.newTitle,
          description: this.newDescription,
          datetime: this.newDatetime,
          location: this.newLocation,
          date: Date.now().toString()
        });
  
        this.newTitle = '';
        this.newDescription = '';
        this.newDatetime = '';
        this.newLocation = '';
      },
      updateMessage(message) {
        setDoc(doc(db, 'messages', message.id), {
          title: message.title,
          description: message.description,
          datetime: String(message.datetime),
          location: message.location,
          date: String(message.date)
        });
      },
      deleteMessage(id) {
        deleteDoc(doc(db, 'messages', id));
      },
      showOnMap(location) {
        // Verificar se a localização está no formato esperado
        if (typeof location !== 'string') {
            console.error('Localização inválida.');
            return;
        }

        // Separar as coordenadas da string
        const [lngStr, latStr] = location.split(',');

        // Converter as coordenadas para números
        const lng = parseFloat(lngStr.trim());
        const lat = parseFloat(latStr.trim());

        // Verificar se as coordenadas são válidas
        if (isNaN(lng) || isNaN(lat)) {
            console.error('Coordenadas inválidas.');
            return;
        }

        // Redirecionar para a página do mapa com as coordenadas
        this.$router.push({ path: '/map', query: { lng, lat } });
        }
    },
    mounted() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.isLoggedIn = true;
          this.isAdministrator = user.email === 'adm@adm.com';
        } else {
          this.isLoggedIn = false;
          this.isAdministrator = false;
        }
      });
  
      const latestQuery = query(collection(db, "messages"), orderBy('date'));
      const livemessages = onSnapshot(latestQuery, (snapshot) => {
        this.messages = snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          datetime: doc.data().datetime,
          location: doc.data().location,
          date: doc.data().date
        }));
      });
  
      onUnmounted(livemessages);
    }
  }
  </script>
  
  <style scoped>
  @import "vue-maplibre-gl/dist/vue-maplibre-gl.css";
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  
  #app {
    padding: 20px;
    background-color: #f8f9fa;
  }
  
  .messages-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .message, .highlight-message {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 80%;
  }
  
  .message h3 {
    text-align: center;
    color: #333;
    margin-bottom: 10px;
  }
  
  .message-input {
    width: 100%;
    margin: 5px 0;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .message-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  
  .update-button {
    background-color: #28a745;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .delete-button {
    background-color: #dc3545;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .show-map-button {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .highlight-message {
    border: 2px solid;
  }
  
  .new-message {
  margin: 40px auto; /* Change this line */
  padding: 20px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 80%;
  text-align: center;
}
  
  .new-message h3 {
    color: #333;
    margin-bottom: 10px;
  }
  
  .add-button {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
  }
  .title-input {
  font-weight: bold; /* Negrito */
  font-size: 1.25rem; /* Tamanho da fonte maior */
  width: 100%;
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

  </style>
  