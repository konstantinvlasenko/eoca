<template>
  <div>
    <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
      <caption class="mdl-typography--title">2015/2016 Winners<i class="material-icons md-18 mdl-color-text--green">done</i></caption>
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
      { group: 'Open', name: 'GM Bator Sambuev' },
      { group: 'U2200', name: 'William Doubleday' },
      { group: 'U1900', name: 'Ray Kuryliw' },
      { group: 'U1600', name: 'Paul St.Pierre' }]
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