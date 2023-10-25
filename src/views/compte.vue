<script setup>
import { RouterLink} from 'vue-router'
import headerVue from "../components/header.vue";
import cardCommande from "../components/card-commande.vue";
import footerVue from "../components/footer.vue";
</script>

<template>
    <headerVue />

    <div class="justify-start text-[25px] font-extralight flex space-x-14 m-16">
        <p>Prénom</p>
        <p>Nom</p>
        <p>Adresse mail</p>
    </div>

    <div class="w-[155px] h-14 bg-[#292729]">
<div class="w-[980px] h-[25px] flex justify-between   ">
  <RouterLink class="left-0 top-0 text-[25px] font-extralight text-left text-black ml-44" to="/compteHisto">Historique</RouterLink>
  <p class=" left-[222px] top-0 text-[25px] font-light text-left text-black">Mes commandes</p>
  <p class=" left-[532px] top-0 text-[25px] font-extralight text-left text-black">
    Point de fidélité
  </p>
  <p class="left-[821px] top-0 text-[25px] font-extralight text-left text-black"> 
    Paramètres
  </p>
</div>
</div>

<cardCommande/>
<footerVue/>

</template>