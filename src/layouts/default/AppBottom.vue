<template>
  <v-footer class="bg-indigo-lighten-1">
    <v-row justify="center" no-gutters>
      <router-link  to="/" v-slot="{ navigate }">
        <v-btn color="white" variant="text" class="mx-2" rounded="xl" @click="navigate">Home</v-btn>
      </router-link>
      <router-link  to="/constitution" v-slot="{ navigate }">
        <v-btn color="white" variant="text" class="mx-2" rounded="xl" @click="navigate">Constitution</v-btn>
      </router-link>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>eoca</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script setup>
</script>
