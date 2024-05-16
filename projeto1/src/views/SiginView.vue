<template>
    <h1>Sign In</h1>
    <p><input type="text" placeholder="Email" v-model="email"/> </p>
    <p><input type="password" placeholder="Password" v-model="password"/> </p>
    <p v-if="errMsg">{{errMsg}}</p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign in With Google</button></p>
</template>

<script setup>
    import { ref } from 'vue';
    import { getAuth, sigInWithEmailAndPassword} from "firebase/auth";
    import { useRouter } from 'vue-router'
    const email = ref("");
    const password = ref("");
    const errMsg = ref()
    const router = useRouter();
    
    const register = () => {
        const auth = getAuth();
        sigInWithEmailAndPassword(auth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully signed in");

            console.log(auth.currentUser);

            router.push("/feed");
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "User not found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Wrong password";
                    break;
                default:
                    errMsg.value = "An error occurred";
                    break;
            }
        });
    };
    const signInWithGoogle = () => {
        
    }
</script>