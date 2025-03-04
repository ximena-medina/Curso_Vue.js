<script setup>
    const name = "Vue 3";
const arrayFrutas = [
    {
        name: "Manzana",
        price: "$1.00",
        description: "Una manzana",
        stock: 0,
    },
    {
        name: "Pera",
        price: "$2.00",
        description: "Una pera",
        stock: 10,
    },
    {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
        stock: 20,
    },
];
</script>
<template>
  <h1> hola vue {{ name.toUpperCase() }}</h1>
  <ul>
    <template li v-for="item in arrayFrutas" :item.name>
      <li v-if="item.stock > 0">{{ item.name }} - {{ item.price }}</li>
    </template>
  </ul>
</template>

<style>
h1 {
  color: blue;
}
</style>

<!-------------------------OTRO EJEMPLO----------------------------------->


<!-- <template>
  <div>
    <h2>Lista de usuarios:</h2>
    <ul>
      <template
        v-for="(user, index) in users"
        :key="user.id"
      >
        <li>
          <h3>{{ user.name }}</h3>
          <ul>
            <template
              v-for="(post, index) in user.posts"
              :key="post.id"
            >
              <li>{{ post.title }}</li>
            </template>
          </ul>
        </li>
      </template>
    </ul>
</div>
</template>

<script setup>
const users = [
  {
    id: 1,
    name: 'Juan',
    posts: [
      { id: 1, title: 'Mi primer post' },
      { id: 2, title: 'Mi segundo post' },
    ]
  },
  {
    id: 2,
    name: 'Maria',
    posts: [
      { id: 3, title: 'Mi tercer post' },
      { id: 4, title: 'Mi cuarto post' },
    ]
  }
]
</script> -->
 