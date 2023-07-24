<template>
  <p class="text-center text-h6">Grand Prix Tournaments 2023/2024</p>
  <v-container class="w-50">
    <v-row :key="start" v-for="{ name, location, start, end, document, next } in tournaments" class="bg-indigo-lighten-5 ma-auto">
      <v-col cols="1" class="float-right"><v-icon icon="mdi-clock-outline" color="green"></v-icon></v-col>
      <v-col cols="5"><span>{{ name }}</span><br/><span>{{ location }}</span><br/><span v-if="document"><a :href="document">Information</a></span></v-col>
      <v-col cols="3">{{ start }}</v-col>
      <v-col cols="3">{{ end }}</v-col>
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
