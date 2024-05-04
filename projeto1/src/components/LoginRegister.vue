<template>
        <div>
            <h1>Login</h1>
            <form @submit.prevent="login">
                <label for="login-username">Username:</label>
                <input type="text" id="login-username" v-model="loginUsername" required>
                <label for="login-password">Password:</label>
                <input type="password" id="login-password" v-model="loginPassword" required>
                <button type="submit">Login</button>
            </form>
    
            <h1>Register</h1>
            <form @submit.prevent="register">
                <label for="register-username">Username:</label>
                <input type="text" id="register-username" v-model="registerUsername" required>
                <label for="register-password">Password:</label>
                <input type="password" id="register-password" v-model="registerPassword" required>
                <button type="submit">Register</button>
            </form>
        </div>
    </template>
    
    <script>
    // Add the missing import statement for the fetch function
    import fetch from 'node-fetch';
    
    export default {
        data() {
            return {
                loginUsername: '',
                loginPassword: '',
                registerUsername: '',
                registerPassword: ''
            };
        },
        methods: {
            async login() {
                try {
                    const response = await fetch('../assets/user.json');
                    const users = await response.json();
                    const user = users.find(user => user.username === this.loginUsername && user.password === this.loginPassword);
                    if (user) {
                        alert('Login successful');
                    } else {
                        alert('Login failed');
                    }
                } catch (error) {
                    console.error('Error fetching users:', error);
                }
            },
            async register() {
                try {
                    const response = await fetch('../assets/user.json');
                    let users = await response.json();
                    const userExists = users.some(user => user.username === this.registerUsername);
                    if (userExists) {
                        alert('User already exists');
                    } else {
                        users.push({ username: this.registerUsername, password: this.registerPassword });
                        const response = await fetch('../assets/user.json', {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(users)
                        });
                        if (response.ok) {
                            alert('Registration successful');
                        } else {
                            alert('Failed to register');
                        }
                    }
                } catch (error) {
                    console.error('Error registering user:', error);
                }
            }
        }
    };
    </script>
  