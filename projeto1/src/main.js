import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVQLj0DrthXyZd_1elbEtn_pHHUuE0YmM",
  authDomain: "frontendctesp.firebaseapp.com",
  projectId: "frontendctesp",
  storageBucket: "frontendctesp.appspot.com",
  messagingSenderId: "848378733674",
  appId: "1:848378733674:web:b82f61a434d8b506f05613"
};

// Initialize Firebase

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
