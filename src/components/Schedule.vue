<template>
  <div class="card">
    <div class="card-content">
      <span class="card-title">Grand Prix Tournaments 2018/2019</span><i class="right material-icons">event_available</i>
      <ul class="collapsible popout" data-collapsible="accordion">
        <li>
          <div class="collapsible-header active"><i class="material-icons right"></i>Upcoming</div>
          <div class="collapsible-body">
            <ul class="collection">
              <li class="collection-item avatar" v-for="tournament in tournaments" v-bind:key="tournament.start">
                <i class="material-icons circle" v-bind:class="{ green: tournament.next }">{{ Date.now() > Date.parse(tournament.end) ? 'done' : tournament.next ? 'alarm_on' : 'schedule' }}</i>
                <span>{{ tournament.name }}</span>
                <span class="right"><span v-if="tournament.document"><a :href="tournament.document">Information</a></span></span><br/>
                <span>{{ tournament.location }}</span><template v-if="tournament.tourism"><span class="right"><a :href="tournament.tourism">Tourism in {{ tournament.location }}</a></span><br/></template>
                <span class="right"><span>{{ tournament.start }}</span> - <span>{{ tournament.end }}</span></span><br/>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div class="collapsible-header"><i class="material-icons right"></i>Completed</div>
          <div class="collapsible-body">
            <ul class="collection">
              <li class="collection-item avatar" v-for="tournament in completed" v-bind:key="tournament.start" v-if="Date.now() > Date.parse(tournament.end)">
                <i class="material-icons circle">done</i>
                <span>{{ tournament.name }}</span><br/>
                <span>{{ tournament.location }}</span>
                <span class="right"><span>{{ tournament.start }}</span> - <span>{{ tournament.end }}</span></span><br/>
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
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* global $ */
export default {
  data () {
    return {
      tournaments: {},
      completed: {}
    }
  },
  created () {
    this.$http.get('/static/seasons.json').then((response) => {
      this.tournaments = response.body['2018/2019']
      this.completed = this.tournaments.filter((tournament) => { return Date.now() > Date.parse(tournament.end) })
      this.tournaments = this.tournaments.filter((tournament) => { return Date.now() < Date.parse(tournament.end) })
      this.tournaments[0].next = true
    }, (response) => {
      console.log(response)
    })
  },
  mounted () {
    $(this.$el).collapsible()
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

  .collapsible-header >i::after {
    content: 'expand_more'
  }
  
  .collapsible-header.active >i::after {
    content: 'expand_less'
  }
</style>

