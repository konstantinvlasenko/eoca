<template>
  <div>
    <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
      <caption class="mdl-typography--title">2016/2017 Standings...<i class="material-icons md-18 mdl-color-text--blue">open_in_new</i></caption>
      <tbody class="mdl-typography--subhead">
        <tr v-for="player in players">
          <td class="mdl-data-table__cell--non-numeric">{{ player.group }}</td>
          <td>{{ player.name }}</td>
        </tr>
      </tbody>
    </table>
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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
caption {
  margin-bottom: 10px
}
.md-18 {
  font-size: 18px
}
</style>