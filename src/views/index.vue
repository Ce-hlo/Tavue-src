<script setup>
import { RouterLink } from "vue-router";
import headerVue from "../components/header.vue";
import cardHisto from "../components/card-historique.vue";
import cardGammes from "../components/card-gammes.vue";
import footerVue from "../components/footer.vue";
</script>

<template>
  <headerVue />
  <div class="bg-[#292729] h-[90px]">
    <RouterLink
      class="text-white flex justify-center text-[35px]"
      to="/personnaliser"
    >
      Sois unique et personnalise tes lunettes à tes goûts
    </RouterLink>
  </div>
  <div class="flex h-screen w-auto">
    <img
      class="w-[800px] h-[634px] object-cover"
      src="../../public/accueil-droite.jpg"
    />
    <img
      class="w-[788px] h-[634px] object-cover"
      src="../../public/accueil-gauche.jpg"
    />
  </div>
  <div class="flex justify-between">
    <h2 class="text-[35px] font-light text-left text-black m-10">
      Historique de tes lunettes personnalisés
    </h2>
    <div class="w-[155px] h-14 bg-[#292729]"></div>
  </div>

  <div class="grid grid-cols-3">
    <cardHisto/>
    <cardHisto />
    <cardHisto />
  </div>

  <div
    class="bg-[#a8beb9] rounded-[10px] text-center float-right px-5 py-2 mr-5"
  >
    <RouterLink class="text-[25px] font-extralight text-black" to="/compte"
      >Découvrir plus</RouterLink
    >
  </div>

  <div class="flex justify-between mt-32">
    <div class="w-[155px] h-14 bg-[#292729]"></div>
    <h2 class="text-[35px] text-center text-black font-medium">
      Créer des lunettes à ton image
    </h2>
    <div class="w-[155px] h-14 bg-[#292729]"></div>
  </div>

  <div>
    <div class="grid grid-cols-2 mt-32 mb-36">
      <img src="../../public/lunette_accueil.svg" />
      <div class="float-right ml-20 text-center">
        <p
          class="text-[35px] font-light text-center mt-28 mr-60 mb-10 text-black"
        >
          Personnalise la couleur de la monture, sa forme et ses verres
        </p>
        <RouterLink
          class="text-[25px] font-extralight text-black bg-[#a8beb9] rounded-[10px] px-5 py-2 mr-52"
          to="/personnaliser"
          >Go personnaliser</RouterLink
        >
      </div>
    </div>
  </div>

  <div class="flex justify-between mt-18">
    <h2 class="text-[35px] font-light text-left text-black m-10">Nos gammes</h2>
    <div class="w-[155px] h-14 bg-[#292729]"></div>
  </div>

  <div class="grid grid-cols-3">
    <cardGammes />
    <cardGammes />
    <cardGammes />
  </div>

  <div
    class="bg-[#a8beb9] rounded-[10px] text-center float-right px-5 py-2 mr-5"
  >
    <RouterLink class="text-[25px] font-extralight text-black" to="/compte"
      >Découvrir plus</RouterLink
    >
  </div>

  <footer class="mt-20">
    <footerVue />
  </footer>
</template>
