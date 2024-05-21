<template>
    <div class="login-page">
        <div class="login-container">
            <button @click="goHome" class="home-button">Início</button>
            <h1 class="title">Create Account</h1>
            <div class="input-group">
                <input type="text" placeholder="Email" v-model="email" class="input-field"/>
            </div>
            <div class="input-group">
                <input type="password" placeholder="Password" v-model="password" class="input-field"/>
            </div>
            <p v-if="errMsg" class="error-message">{{errMsg}}</p>
            <div class="button-group">
                <button @click="register" class="submit-button">Submit</button>
                <button @click="signInWithGoogle" class="google-button">Sign in With Google</button>
            </div>
        </div>
    </div>
</template>

<style src="../../public/assets/css/SignInView.css"></style>

<script setup>
    import { ref } from 'vue';
    import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
    import { useRouter } from 'vue-router'
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const register = () => {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully registered");
            router.push("/");
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
    };
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push("/");
        })
        .catch((error) => {
        });
    };
    const goHome = () => {
        router.push('/');
    };

</script>