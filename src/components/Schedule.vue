<template>
  <div>
    <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
      <caption class="mdl-typography--title">Grand Prix Tournaments 2016/2017</caption>
      <tbody class="mdl-typography--subhead">
        <tr v-for="tournament in tournaments">
          <td class="mdl-data-table__cell--non-numeric">{{ tournament.name }}</td>
          <td>{{ tournament.date }}</td>
          <td>{{ tournament.location }}</td>
          <td><i class="material-icons mdl-color-text--green">done</i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tournaments: [
      { name: 'Almonte Open', date: 'Aug 27,28', location: 'Almonte', ref: 'resources/2016/1st-Almonte-Open.pdf' },
      { name: 'RA Fall Open', date: 'Sep 23,24,25', location: 'Ottawa', ref: 'resources/2016/2016-RA-Fall-Open.pdf' },
      { name: 'National Capital Open', date: 'Oct 28,29,30', location: 'Ottawa', ref: 'resources/2016/2016-National-Capital-Open.pdf' },
      { name: 'RA November Open', date: 'Nov 25,26,27', location: 'Ottawa' },
      { name: 'RA Winter Open', date: 'Jan 13,14,15', location: 'Ottawa' },
      { name: 'Gatineau Open', date: 'Mar 3,4,5', location: 'Gatineau' },
      { name: 'Kingston Open', date: 'Mar 31 - Apr 2', location: 'Kingston' },
      { name: 'CYCC Qualifier', date: 'Apr 17', location: 'Nepean' },
      { name: 'Arnprior Open', date: 'Apr 29,30', location: 'Arnprior', ref: 'resources/2017/Arnprior-Open.pdf' },
      { name: 'Ontario Open', date: 'May 20,21,22', location: 'Ottawa' },
      { name: 'Eastern Ontario Open', date: 'Jun 23,24,25', location: 'Ottawa' }]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
caption {
  margin-bottom: 10px
}
</style>