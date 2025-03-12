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
    <ul>
        <li v-for="poke in superhero">
            <RouterLink :to="`/superhero/${poke.name}`">{{ poke.name }}</RouterLink>
        </li>
    </ul>
</template>