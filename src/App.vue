<template>
  <div id="app">
    <navigation></navigation>
    <welcome></welcome>
    <div class="container">
      <router-view></router-view>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Welcome from './components/Welcome'
import Bottom from './components/Bottom'

export default {
  components: {
    Navigation,
    Welcome,
    Bottom
  }
}
</script>
