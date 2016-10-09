<template>
  <div class="row">
    <div class="col s12 m8">
      <h5 class="center">Grand Prix Tournaments 2016/2017</h5>
      <schedule></schedule>
    </div>
    <div class="col s12 m4">
      <div class="row z-depth-2">
        <h5 class="center">2016/2017 Standings... <a href="resources/2016-2017-EOCA-GRANDPRIX-STANDINGS.pdf" target="_blank"><i class="material-icons blue-text">open_in_new</i></a></h5>
        <standings></standings>
      </div>
      <div class="row z-depth-2">
        <h5 class="center">2015/2016 Winners <i class="material-icons green-text">done</i></h5>
        <winners></winners>
      </div>
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