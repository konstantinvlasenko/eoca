<template>
  <div class="card">
    <div class="card-content">
      <span class="card-title">2016/2017 Standings...</span><a href="resources/2016-2017-EOCA-GRANDPRIX-STANDINGS.pdf" target="_blank"><i class="right material-icons blue-text">open_in_new</i></a>
      <ul class="collection">
        <li class="collection-item" v-for="player in players">
        <span>{{ player.section }}</span>
        <span class="right">{{ player.firstName }} {{ player.lastName }}</span>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      players: {}
    }
  },
  created () {
    this.$http.get('//s3.amazonaws.com/eoca/static/standings.json').then((response) => {
      console.log(response.body)
      this.players = response.body.filter((p) => { return p.rank === 1 })
    }, (response) => {
      console.log(response)
    })
  }
}
</script>