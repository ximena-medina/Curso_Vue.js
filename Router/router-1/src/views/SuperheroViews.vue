<script setup>
import axios from 'axios'
import {ref} from 'vue'
import {RouterLink} from 'vue-router'

const superhero = ref([])

const getData = async () => {
    try {
       const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
       superhero.value = data.results
    } catch (error) {
        console.log(error)
    }
}
getData()

</script>

<template>
    <h1> Personajes </h1>
    <ul class="list-group">
        <li v-for="poke in superhero" class="list-group-item">
            <RouterLink :to="`/superhero/${poke.name}`">{{ poke.name }}</RouterLink>
        </li>
    </ul>
    <button class="btn btn-secondary me-4"> Previus </button>
    <button class="btn btn-success"> Next </button>
</template>