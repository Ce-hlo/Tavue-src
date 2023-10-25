<script setup>
import { RouterLink} from 'vue-router'
import headerVue from "../components/header.vue";
import footerVue from "../components/footer.vue";
</script>


<template>
    <headerVue/>

    <div class="flex ">
<div>
<div class="w-[605px] h-[727px] rounded-[10px] bg-[#a8beb9]  m-32 ">
<div class="grid grid-flow-row">
<div class="m-10">
<p class="text-3xl font-extralight text-left text-black ">Monture</p>
<p class="text-[25px] font-extralight text-left text-black">Couleur</p>
<div class="flex space-x-6">
<div class="w-[31px] h-[31px] rounded-[10px] bg-[#8ba896] border-2 border-[#292729]"></div>
<div class="w-[31px] h-[31px] rounded-[10px] bg-[#5c4636] border-2 border-[#292729]"></div>
<div class="w-[31px] h-[31px] rounded-[10px] bg-[#f3edd7] border-2 border-[#292729]"></div>
<div class="w-[31px] h-[31px] rounded-[10px] bg-[#8f7cb7] border-2 border-[#292729]"></div>
</div>

</div>

<div class="m-10">
<p class="text-3xl font-extralight text-left text-black">Branches</p>
<p class="text-[25px] font-extralight text-left text-black">Couleur</p>
<div class="flex space-x-6">
<div class="w-[31px] h-[31px] rounded-[10px] bg-[#8ba896] border-2 border-[#292729]"></div>
<div class="w-[31px] h-[31px] rounded-[10px] bg-[#5c4636] border-2 border-[#292729]"></div>
<div class="w-[31px] h-[31px] rounded-[10px] bg-[#f3edd7] border-2 border-[#292729]"></div>
<div class="w-[31px] h-[31px] rounded-[10px] bg-[#8f7cb7] border-2 border-[#292729]"></div>
</div>

</div>

<div class="m-10">
<p class="text-3xl font-extralight text-left text-black">Verres</p>
<p class="text-[25px] font-extralight text-left text-black">Couleur</p>
<div class="flex space-x-6">
<div class="w-[31px] h-[31px] rounded-[10px] bg-[#d1e7e9] border-2 border-[#292729]"></div>
<div class="w-[31px] h-[31px] rounded-[10px] bg-[#878887] border-2 border-[#292729]"></div>
<div class="w-[31px] h-[31px] rounded-[10px] bg-[#dbb3ba] border-2 border-[#292729]"></div>
<div class="w-[31px] h-[31px] rounded-[10px] bg-[#d3d7f1] border-2 border-[#292729]"></div>
</div>

</div>

<div class="grid justify-end space-y-5">
<div class="bg-[#FFFFFF] rounded-[10px] text-center px-5 py-2 mr-5 ">
    <RouterLink class="text-[25px] font-extralight text-black flex" to="/compteHisto"
      >Enregistrer</RouterLink>
  </div>

  <div class="bg-[#FFFFFF] rounded-[10px] text-center px-5 py-2 mr-5">
    <RouterLink class="text-[25px] font-extralight text-black flex " to="/compte"
      >Validation</RouterLink>
  </div>

</div>
</div>
</div>
</div>

<img class="w-[820px] mt-16" src="../../public/lunette-perso.svg">

    </div>
    


    <footerVue/>                         
</template>