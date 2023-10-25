<script setup>
import { RouterLink } from "vue-router";
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

  // user connecté ? au départ faux
  let isConnected = ref(false)

  // Element de connexion
  let user = ref('')
  let psw = ref('')

  // User connecté
  let currentUser = ref(null)
  let avatar = ref(null)

  const login=async()=>{
  try{
    const authData = await pb.collection('users')
    .authWithPassword(user.value, psw.value)
    console.log("connecté : ",authData)
    //refresh()    
  }catch(error){
//    console.log("erreur de connexion : ",error.message)
    alert("Erreur d'identification : mauvais login et/ou mot de passe")
    user.value = ""
    psw.value = ""
  }
}
  }

</script>

<template>
  <headerVue />

  <h1 class="text-center mt-5 text-[25px]">Se connecter</h1>
  <div class="grid justify-center space-y-12 mt-5">
    <input type="email" required id="email" v-model="user" />
    <input type="password" reqiured id="password" v-model="psw" />
    <div>
      <input type="checkbox" required id="checkbox" />
      <label class="ml-2">J'accepte les conditions d'utilisation</label>
    </div>
    <button v-on:click="login()">Se connecter</button>
  </div>
  <footerVue />
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
