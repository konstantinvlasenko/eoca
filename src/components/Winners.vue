<template>
  <div class="card">
    <div class="card-content">
      <span class="card-title">2015/2016 Winners</span><i class="right material-icons green-text">done</i>
      <ul class="collection">
        <li class="collection-item" v-for="player in players">
        <span>{{ player.group }}</span>
        <span class="right">{{ player.name }}</span>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      players: [
      { group: 'Open', name: 'GM Bator Sambuev' },
      { group: 'U2200', name: 'William Doubleday' },
      { group: 'U1900', name: 'Ray Kuryliw' },
      { group: 'U1600', name: 'Paul St.Pierre' }]
    }
  }
}
</script>