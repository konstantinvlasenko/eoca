<template>
  <div class="card">
    <div class="card-content">
      <span class="card-title">2016/2017 Standings...</span><a href="resources/2016-2017-EOCA-GRANDPRIX-STANDINGS.pdf" target="_blank"><i class="right material-icons blue-text">open_in_new</i></a>
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
      { group: 'Open', name: 'FM Qiyu Zhou' },
      { group: 'U2200', name: 'Sam Marin' },
      { group: 'U1900', name: 'Abdelaziz Mahdjoubi' },
      { group: 'U1600', name: 'Daniel Xu' }]
    }
  }
}
</script>