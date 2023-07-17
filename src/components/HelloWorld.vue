<template>
  <p class="text-center text-h6">Grand Prix Tournaments 2023/2024</p>
  <v-container>
    <v-row :key="start" v-for="{ name, location, start, end, next } in tournaments" class="bg-indigo-lighten-5 ma-auto">
      <v-col cols="1"><v-icon icon="mdi-clock-outline" color="green"></v-icon></v-col>
      <v-col cols="4">{{ name }}</v-col>
      <v-col cols="3">{{ location }}</v-col>
      <v-col cols="2">{{ start }}</v-col>
      <v-col cols="2">
        <div :class="rounded-r-0">{{ end }}</div></v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue';

  const tournaments = ref([]);

  async function getData() {
    const res = await fetch("/static/seasons.json");
    tournaments.value = (await res.json())['2023/2024'];
  }

 getData()
</script>
