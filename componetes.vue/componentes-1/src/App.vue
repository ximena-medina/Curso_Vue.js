<script setup> 
import { onMounted, ref } from "vue";

import BlogPost from "./components/BlogPost.vue";
import PaginatePost from "./components/PaginatePost.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";

const posts = ref([])
const postXpage = 10
const start = ref(0)
const end = ref(10)
const loading = ref(true)

const favorite = ref("")

const changeFavorite = (title) => {
  favorite.value = title
}

const next = () => {
  start.value = start.value + postXpage
  end.value = end.value + postXpage
}

const Previus = () => {
  start.value = start.value - postXpage
  end.value = end.value - postXpage
}

// Otras alternativas: utilizar el onMounted (async()) o un cosnt fetchData = async() => {}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => res.json())  
  .then((data) => {
    posts.value = data
  })
  .finally(() => (loading.value = false))
</script>

<template>

  <LoadingSpinner v-if="loading"></LoadingSpinner>
  <div class="container" v-else> 
    <h1>APP</h1>
    <h2>My favorite post: {{ favorite }}</h2>

    <PaginatePost 
    @next = "next" @previus = "Previus" :start='start' :end='end' class="mb-2">
    </PaginatePost>

    <BlogPost 
      v-for="post in posts.slice(start, end)" 
      :key="post.id"
      :title="post.title"
      :id="post.id" 
      :body="post.body"
      :changeFavorite="changeFavorite" 
    ></BlogPost>
  </div>
</template>

<!-- <p> checar cambiar favorito desde la app y BlogPos en conjunto. https://bluuweb.github.io/vue-udemy/30-02-components/#components </p> -->
