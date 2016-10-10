<template>
  <div class="row">
    <div class="col s12 m6">
      <schedule></schedule>
    </div>
    <div class="col s12 m6">
      <standings></standings>
      <winners></winners>
    </div>
  </div>
</template>

<script>
import Schedule from '../components/Schedule'
import Standings from '../components/Standings'
import Winners from '../components/Winners'

export default {
  components: {
    Schedule,
    Standings,
    Winners
  }
}
</script>