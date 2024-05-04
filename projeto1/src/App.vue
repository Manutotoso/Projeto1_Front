<template>
  <LoginRegister /> <!-- Componente de login e registro -->
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import LoginRegister from './components/LoginRegister.vue' // Importa o componente de login e registro
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    LoginRegister
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
