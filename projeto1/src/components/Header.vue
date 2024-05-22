<template>
     <div class="preloader">
        <div class="loader rubix-cube">
            <div class="layer layer-1"></div>
            <div class="layer layer-2"></div>
            <div class="layer layer-3 color-1"></div>
            <div class="layer layer-4"></div>
            <div class="layer layer-5"></div>
            <div class="layer layer-6"></div>
            <div class="layer layer-7"></div>
            <div class="layer layer-8"></div>
        </div>
    </div>
    <header id="header-part">
       
        <div class="header-top d-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="header-contact text-lg-left text-center">
                            <ul>
                                <li><img src="../../assets/images/all-icon/map.png" alt="icon"><span>Ilha da Madeira</span></li>
                                <li><img src="../../assets/images/all-icon/email.png" alt="icon"><span>ilhadamadeira@gmail.com</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="header-opening-time text-lg-right text-center">
                            <p>Junte-se a Nós e Faça a Diferença</p>
                        </div>
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
        </div> <!-- header top -->  

        <div class="header-logo-support pt-30 pb-10">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4">
                        <div class="logo">
                            <router-link to="/">
                                <img src="../../assets/images/logo.png" alt="Logo">
                            </router-link>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-8">
                        <div class="support-button float-right d-none d-md-block">
                            <div class="support float-left">
                                <div class="icon">
                                    <img src="../../assets/images/all-icon/support.png" alt="icon">
                                </div>
                                <div class="cont">
                                    <p>Precisa de Ajuda?Lige-nos!</p>
                                    <span>*** *** ***</span>
                                </div>
                            </div>
                            <div class="button float-left">
                                <router-link to="/register" class="main-btn">Register</router-link>
                                <router-link to="/sigin" class="main-btn">Sign In</router-link>
                                <button @click="handleSignOut" v-if="isLoggedIn" class="main-btn2">Sign Out</button>
                            </div>
                        </div>
                    </div>
                </div> <!-- row -->
            </div> <!-- container -->
        </div> <!-- header logo support -->

        <div class="navigation">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 col-md-10 col-sm-9 col-8">
                        <nav class="navbar navbar-expand-lg">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>

                            <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item">
                                        <router-link to="/">Inicio</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/about">Sobre Nos</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/news">Novidades</router-link>
                                    </li>
                                </ul>
                            </div>
                        </nav> 
                    </div>
                </div> 
            </div>
        </div>
        
    </header>
    
</template>
<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";

const router = useRouter();
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