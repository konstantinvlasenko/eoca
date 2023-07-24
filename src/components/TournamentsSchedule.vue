<template>
  <p class="text-center text-h6">Grand Prix Tournaments 2023/2024</p>
  <v-container>
    <v-row :key="start" v-for="{ name, location, start, end, document, next } in tournaments" class="bg-indigo-lighten-5 ma-auto">
      <v-col cols="1"><v-icon icon="mdi-clock-outline" color="green"></v-icon></v-col>
      <v-col cols="4">{{ name }}</v-col>
      <v-col cols="2">{{ location }}</v-col>
      <v-col cols="2">{{ start }}</v-col>
      <v-col cols="2">{{ end }}</v-col>
      <v-col cols="1"><span v-if="document"><a :href="document">Information</a></span></v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';

  const tournaments = ref([]);

  async function getData() {
    const res = await fetch("/static/seasons.json");
    //const res = await fetch("https://eoca.s3.amazonaws.com/site/static/seasons.json");
    tournaments.value = (await res.json())['2023/2024'];
  }

 getData()
</script>
