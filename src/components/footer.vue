<script setup></script>
<template>
    <div class="bg-[#A8BEB9] flex justify-between mt-5">
    <div class="pl-32 py-10  space-y-3">
        <h2 class="text-[25px]">Votre sécurité</h2>
        <p>Qui sommes-nous ?</p>
        <p>Mentions légales</p>
        <p>Conditions générales</p>
        <p>Cookies</p>
    </div>
    <div class="mt-16 ml-20">
        <RouterLink to="/"> <img class="w-60" src="../../public/logo.svg"> </RouterLink>
        <p class="-ml-5 text-[25px] font-extralight">Label de fabrication française</p>
    </div>
    <div class="py-10 mr-20 text-center">
        <h2 class="text-[25px]">Nous suivre</h2>
        <p class="mb-10">Rejoignez-nous sur les réseaux sociaux</p>
        <div class="flex justify-around ">
            <img src="../../public/facebook.svg">
            <img src="../../public/Page-1.svg">
            </div>
    </div>
    </div>
</template>