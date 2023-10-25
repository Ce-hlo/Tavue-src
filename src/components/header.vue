<template>
  <div class="bg-gradient-to-b from-[#a8beb9] to-[#e7ebec]">
 
    <nav class="p-4 flex items-center justify-center">
        <div class="space-x-4">
    
            <ul class="flex space-x-40">
              <li class="text-[25px]">
                 <RouterLink to="/"><img class="w-[137px] h-[79px] absolute left-[59px] top-[19px] object-cover" src="../../public/logo.svg"></RouterLink> 
              </li>
                <li class="text-[25px]">
                  <RouterLink class="text-black" to="/">Nos gammes</RouterLink>
                </li>
                <li class="text-[25px]">
                  <RouterLink class="text-black" to="/personnaliser">Outils de personnalisation</RouterLink>
                </li>
                <li class="text-[25px]">
                  <RouterLink class="text-black" to="/">A propos</RouterLink>
                </li>
                <li>
                 <RouterLink to="/compte"> <img class="w-[29px] h-[50.72px]" src="../../public/profil.svg"></RouterLink>  
              </li>
            </ul>

            
        </div>

    </nav>
    
    <RouterView />

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>