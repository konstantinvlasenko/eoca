<template>
  <div class="card">
    <div class="card-content">
      <span class="card-title">Grand Prix Tournaments 2019/2020</span><i class="right material-icons">event_available</i>
        <ul class="collection">
          <li class="collection-item avatar" v-for="tournament in tournaments" v-bind:key="tournament.start">
            <i class="material-icons circle" v-bind:class="{ green: tournament.next }">{{ Date.now() > Date.parse(tournament.end) ? 'done' : tournament.next ? 'alarm_on' : 'schedule' }}</i>
            <span>{{ tournament.name }}</span>
            <span class="right"><span v-if="tournament.document"><a :href="tournament.document">Information</a></span><span v-if="tournament.french"> | <a :href="tournament.french">Français</a></span></span><br/>
            <span>{{ tournament.location }}</span>
            <template v-if="tournament.tourism"><span class="right"><a :href="tournament.tourism">Tourism {{ tournament.location }}</a></span><br/></template>
            <template v-if="tournament.press"><span><a :href="tournament.press">Press Release</a></span></template>
            <span class="right"><span>{{ tournament.start }}</span> - <span>{{ tournament.end }}</span></span>
            <span class="results" v-if="tournament.OPEN"><a :href="tournament.OPEN" target="_blank">Open</a></span>
            <span class="results" v-if="tournament.U2200"><a :href="tournament.U2200" target="_blank">U2200</a></span>
            <span class="results" v-if="tournament.U1900"><a :href="tournament.U1900" target="_blank">U1900</a></span>
            <span class="results" v-if="tournament.U1800"><a :href="tournament.U1800" target="_blank">U1800</a></span>
            <span class="results" v-if="tournament.U1600"><a :href="tournament.U1600" target="_blank">U1600</a></span>
            <span class="results" v-if="tournament.U1500"><a :href="tournament.U1500" target="_blank">U1500</a></span>
            <span class="results" v-if="tournament.U16"><a :href="tournament.U16" target="_blank">U16</a></span>
            <span class="results" v-if="tournament.U12"><a :href="tournament.U12" target="_blank">U12</a></span>
            <span class="results" v-if="tournament.U10"><a :href="tournament.U10" target="_blank">U10</a></span>
            <span class="results" v-if="tournament.U8"><a :href="tournament.U8" target="_blank">U8</a></span>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tournaments: {},
      completed: {}
    }
  },
  created () {
    this.$http.get('/static/seasons.json').then((response) => {
      this.tournaments = response.body['2019/2020']
      this.tournaments.find(t => Date.now() < Date.parse(t.end)).next = true
    }, (response) => {
      console.log(response)
    })
  }
}
</script>

<style scoped>
  .results {
    margin-right: 10px;
  }
  .true {
    background-color: green;
  }
</style>

