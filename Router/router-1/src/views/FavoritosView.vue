<script setup>
import { useFavoritosStore } from '@/store/favoritosStore'
import { storeToRefs } from 'pinia';

const useFavoritos = useFavoritosStore()

const {favoritos} = storeToRefs(useFavoritos)
</script>

<template>
    <h1>Apartado de favoritos </h1>
    <ul class="list-group">
        <li class="list-group-item active" aria-current="true" v-for="poke in favoritos" :key = "poke.id">
            {{ poke.name }}
        </li>
    </ul>
</template>