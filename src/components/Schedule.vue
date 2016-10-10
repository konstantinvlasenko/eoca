<template>
  <div class="card">
    <div class="card-content">
      <span class="card-title">Grand Prix Tournaments 2016/2017</span><i class="right material-icons">event_available</i>
      <transition-group name="flip-list" tag="ul" class="collection">
        <li class="collection-item avatar" v-for="tournament in tournaments" v-bind:key="tournament.start">
        <i class="material-icons circle" v-bind:class="{ green: tournament.next }">{{ Date.now() > Date.parse(tournament.end) ? 'done' : tournament.next ? 'alarm_on' : 'schedule' }}</i>
        <span>{{ tournament.name }}</span><br/>
        <span>{{ tournament.location }}</span>
        <span class="right"><span>{{ tournament.start }}</span> - <span>{{ tournament.end }}</span></span>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tournaments: [
      { name: 'Almonte Open', location: 'Almonte', ref: 'resources/2016/1st-Almonte-Open.pdf', start: '2016-08-27', end: '2016-08-28' },
      { name: 'RA Fall Open', location: 'Ottawa', ref: 'resources/2016/2016-RA-Fall-Open.pdf', start: '2016-09-23', end: '2016-09-25' },
      { name: 'National Capital Open', location: 'Ottawa', ref: 'resources/2016/2016-National-Capital-Open.pdf', start: '2016-10-28', end: '2016-10-30' },
      { name: 'RA November Open', location: 'Ottawa', start: '2016-11-25', end: '2016-11-27' },
      { name: 'RA Winter Open', location: 'Ottawa', start: '2017-01-13', end: '2017-01-15' },
      { name: 'Gatineau Open', location: 'Gatineau', start: '2017-03-03', end: '2017-03-05' },
      { name: 'Kingston Open', location: 'Kingston', start: '2017-03-31', end: '2017-04-02' },
      { name: 'CYCC Qualifier', location: 'Nepean', start: '2017-04-17', end: '2017-04-17' },
      { name: 'Arnprior Open', location: 'Arnprior', ref: 'resources/2017/Arnprior-Open.pdf', start: '2017-04-29', end: '2017-04-30' },
      { name: 'Ontario Open', location: 'Ottawa', start: '2017-05-20', end: '2017-05-22' },
      { name: 'Eastern Ontario Open', location: 'Ottawa', start: '2017-06-23', end: '2017-06-25' }]
    }
  },
  methods: {
    moveCompletedToBottom: function () {
      let _pastTournaments = this.tournaments.filter((tournament) => { return Date.now() > Date.parse(tournament.end) })
      let _upcommingTournaments = this.tournaments.filter((tournament) => { return Date.now() < Date.parse(tournament.end) })
      this.tournaments = _upcommingTournaments.concat(_pastTournaments)
      this.tournaments[0].next = true
    }
  },
  created: function () {
    setTimeout(this.moveCompletedToBottom, 3000)
  }
}
</script>

<style scoped>
  .true {
    background-color: green;
  }
  .flip-list-move {
    transition: transform 1.5s;
  }
</style>

