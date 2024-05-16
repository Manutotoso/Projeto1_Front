<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/feed">Feed</RouterLink>
    <RouterLink to="/register">Register</RouterLink>
    <RouterLink to="/sigin">Sigin</RouterLink>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
  </nav>
  <RouterView />
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from './router';

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedIn.value = true;
        } else {
            isLoggedIn.value = false;
        }
    });
});


const handleSignOut = () => {
  signOut(auth).then(() => {
   router.push("/");
  });
};

</script>


