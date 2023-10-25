<script setup>
import { RouterLink} from 'vue-router'
import headerVue from "../components/header.vue";
import cardCommande from "../components/card-commande.vue";
import footerVue from "../components/footer.vue";

// Import pocketbase
import PocketBase from "pocketbase";
// Objet pocketBase
var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
  pocketbase_ip = "http://193.168.146.127/:80";
else pocketbase_ip = "http://127.0.0.1:8090";

</script>

<template>
    <headerVue />

    <h1 class="text-center mt-5 text-[25px]">Créer un compte</h1>
  <div class="grid justify-center space-y-8 mt-5">
<input type="first-name" required id="first-name" placeholder="prenom">
<input type="name" required id="name" placeholder="nom">
<input type="email" required id="email" placeholder="mail">
<input type="password" reqiured id="password" placeholder="mot de passe">
<button v-on:click="login()">S'inscrire</button>
    </div>
<footerVue/>
</template>

<style scoped>
input {
    border-radius: 5px;
    border: 1px solid #292729;
    font-size: 20px;
    padding-left: 15px;

}

button {
        border-radius: 5px;
    border: 1px solid #292729;
    font-size: 20px;
    background-color: #a8beb9;
}
</style>