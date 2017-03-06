<template>
  <div class="card">
    <div class="card-content">
      <span class="card-title">Grand Prix Tournaments 2016/2017</span><i class="right material-icons">event_available</i>
      <transition-group name="flip-list" tag="ul" class="collection">
        <li class="collection-item avatar" v-for="tournament in tournaments" v-bind:key="tournament.start">
          <i class="material-icons circle" v-bind:class="{ green: tournament.next }">{{ Date.now() > Date.parse(tournament.end) ? 'done' : tournament.next ? 'alarm_on' : 'schedule' }}</i>
          <span>{{ tournament.name }}</span><span class="right"><span>{{ tournament.start }}</span> - <span>{{ tournament.end }}</span></span><br/>
          <span>{{ tournament.location }}</span><br/>
          <div class="blue-grey-text text-darken-2">
            <blockquote v-if="tournament.next">
              <div v-if="tournament.place">
                <span><i>{{ tournament.place }}</i></span>
              </div>
              <div v-if="tournament.type">
                <b>{{ tournament.type }}</b> (CFC or FQE membership is required)
                <li class="collection-item" v-if="tournament.time">{{ tournament.time }}</li>
              </div>
              <div v-if="tournament.sections">
                <b>Sections:</b>
                <li class="collection-item" v-for="(val, key) in tournament.sections">{{ key }}: {{ val }}</li>
              </div>
              <div v-if="tournament.rounds">
                <b>Rounds:</b>
                <li class="collection-item">{{ tournament.rounds }}</li>
              </div>
              <div v-if="tournament.registration">
                <b>Registration:</b>
                <li class="collection-item" v-for="reg in tournament.registration">{{ reg }}</li>
              </div>
              <div v-if="tournament.fees">
                <b>Entry Fee:</b>
                <li class="collection-item" v-for="(val, key) in tournament.fees">{{ key }}: {{ val }}</li>
              </div>
              <div v-if="tournament.notes">
                <b>Notes:</b>
                <li class="collection-item" v-for="note in tournament.notes">{{ note }}</li>
              </div>
              <div v-if="tournament.byes">
                <b>Requesting byes:</b> {{ tournament.byes }}
              </div>
              <div>
                <b>Electronic Devices:</b>
                <li class="collection-item">A mobile phone or other electronic device is allowed to be stored in a player’s bag or purse, as long as the device is completely switched off. A player is forbidden to carry a bag holding such a device, without the permission of the arbiter.</li>
              </div>
              <div v-if="tournament.td">
                <b>Tournament Director:</b> {{ tournament.td }}
              </div>
              <div v-if="tournament.to">
                <b>Tournament Organizer:</b> {{ tournament.to }}
              </div>
            </blockquote>
          </div>
          <span class="results" v-if="tournament.OPEN"><a :href="tournament.OPEN" target="_blank">Open</a></span>
          <span class="results" v-if="tournament.U1900"><a :href="tournament.U1900" target="_blank">U1900</a></span>
          <span class="results" v-if="tournament.U1600"><a :href="tournament.U1600" target="_blank">U1600</a></span>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tournaments: {}
    }
  },
  created () {
    this.$http.get('/static/seasons.json').then((response) => {
      this.tournaments = response.body['2016/2017']
      let _pastTournaments = this.tournaments.filter((tournament) => { return Date.now() > Date.parse(tournament.end) })
      let _upcommingTournaments = this.tournaments.filter((tournament) => { return Date.now() < Date.parse(tournament.end) })
      this.tournaments = _upcommingTournaments.concat(_pastTournaments)
      this.tournaments[0].next = true
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
  .flip-list-move {
    transition: transform 1.5s;
  }
</style>

