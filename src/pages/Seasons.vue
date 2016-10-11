<template>
  <ul class="collapsible popout" data-collapsible="accordion">
    <li v-for="(val, key) in seasons" >
      <div class="collapsible-header" @click=toggleCollapsible(key)><i class="material-icons right">{{ val.expanded ? 'expand_less' : 'expand_more' }}</i>{{ key }}</div>
      <div class="collapsible-body">
        <ul class="collection">
          <li class="collection-item avatar" v-for="tournament in val.tournaments" v-bind:key="tournament.start" v-if="Date.now() > Date.parse(tournament.end)">
            <i class="material-icons circle">done</i>
            <span>{{ tournament.name }}</span><br/>
            <span>{{ tournament.location }}</span>
            <span class="right"><span>{{ tournament.start }}</span> - <span>{{ tournament.end }}</span></span><br/>
            <span class="results" v-if="tournament.OPEN"><a :href="tournament.OPEN" target="_blank">Open</a></span>
            <span class="results" v-if="tournament.U1900"><a :href="tournament.U1900" target="_blank">U1900</a></span>
            <span class="results" v-if="tournament.U1600"><a :href="tournament.U1600" target="_blank">U1600</a></span>
            <span class="results" v-if="tournament.U16"><a :href="tournament.U16" target="_blank">U16</a></span>
            <span class="results" v-if="tournament.U12"><a :href="tournament.U12" target="_blank">U12</a></span>
            <span class="results" v-if="tournament.U10"><a :href="tournament.U10" target="_blank">U10</a></span>
            <span class="results" v-if="tournament.U8"><a :href="tournament.U8" target="_blank">U8</a></span>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
/* global $ */
export default {
  data () {
    return {
      seasons: {
        '2016/2017': {
          expanded: false,
          tournaments: [
            { name: 'Almonte Open', location: 'Almonte', start: '2016-08-27', end: '2016-08-28', OPEN: 'http://chess.ca/crosstable?tournament_check_number=201608065' },
            { name: 'RA Fall Open', location: 'Ottawa', start: '2016-09-23', end: '2016-09-25', OPEN: 'http://chess.ca/crosstable?tournament_check_number=201609031', U1900: 'http://chess.ca/crosstable?tournament_check_number=201609033', U1600: 'http://chess.ca/crosstable?tournament_check_number=201609032' },
            { name: 'National Capital Open', location: 'Ottawa', ref: 'resources/2016/2016-National-Capital-Open.pdf', start: '2016-10-28', end: '2016-10-30' },
            { name: 'RA November Open', location: 'Ottawa', start: '2016-11-25', end: '2016-11-27' },
            { name: 'RA Winter Open', location: 'Ottawa', start: '2017-01-13', end: '2017-01-15' },
            { name: 'Gatineau Open', location: 'Gatineau', start: '2017-03-03', end: '2017-03-05' },
            { name: 'Kingston Open', location: 'Kingston', start: '2017-03-31', end: '2017-04-02' },
            { name: 'CYCC Qualifier', location: 'Nepean', start: '2017-04-17', end: '2017-04-17' },
            { name: 'Arnprior Open', location: 'Arnprior', start: '2017-04-29', end: '2017-04-30' },
            { name: 'Ontario Open', location: 'Ottawa', start: '2017-05-20', end: '2017-05-22' },
            { name: 'Eastern Ontario Open', location: 'Ottawa', start: '2017-06-23', end: '2017-06-25' }
          ]
        },
        '2015/2016': {
          expanded: false,
          tournaments: [
            { name: 'RA Fall Open', location: 'Ottawa', start: '2015-09-18', end: '2015-09-20', OPEN: 'http://chess.ca/crosstable?tournament_check_number=201509037', U1900: 'http://chess.ca/crosstable?tournament_check_number=201509039', U1600: 'http://chess.ca/crosstable?tournament_check_number=201509038' },
            { name: 'National Capital Open', location: 'Ottawa', start: '2015-10-23', end: '2015-10-25', OPEN: 'http://chess.ca/crosstable?tournament_check_number=201510037', U1900: 'http://chess.ca/crosstable?tournament_check_number=201510039', U1600: 'http://chess.ca/crosstable?tournament_check_number=201510038' },
            { name: 'RA November Open', location: 'Ottawa', start: '2015-11-27', end: '2015-11-29', OPEN: 'http://chess.ca/crosstable?tournament_check_number=201512007', U1900: 'http://chess.ca/crosstable?tournament_check_number=201510039', U1600: 'http://chess.ca/crosstable?tournament_check_number=201512008' },
            { name: 'RA Winter Open', location: 'Ottawa', start: '2016-01-08', end: '2016-01-09', OPEN: 'http://chess.ca/crosstable?tournament_check_number=201601025', U1900: 'http://chess.ca/crosstable?tournament_check_number=201601027', U1600: 'http://chess.ca/crosstable?tournament_check_number=201601026' },
            { name: 'Kingston Open', location: 'Kingston', start: '2016-02-26', end: '2016-02-28', OPEN: 'http://chess.ca/crosstable?tournament_check_number=201603006' },
            { name: 'Gatineau Open', location: 'Gatineau', start: '2016-03-04', end: '2016-03-06', OPEN: 'http://chess.ca/crosstable?tournament_check_number=201603020', U1900: 'http://chess.ca/crosstable?tournament_check_number=201603019', U1600: 'http://chess.ca/crosstable?tournament_check_number=201603018' },
            { name: 'CYCC Qualifier', location: 'Nepean', start: '2016-03-28', end: '2016-03-28', U16: 'http://chess.ca/crosstable?tournament_check_number=201604025', U12: 'http://chess.ca/crosstable?tournament_check_number=201604024', U10: 'http://chess.ca/crosstable?tournament_check_number=201604023', U8: 'http://chess.ca/crosstable?tournament_check_number=201604026' },
            { name: 'McIntosh  Open', location: 'Morrisburg', start: '2016-04-09', end: '2016-04-10', OPEN: 'http://chess.ca/crosstable?tournament_check_number=201604039' },
            { name: 'Arnprior Open', location: 'Arnprior', start: '2016-04-30', end: '2016-05-01', OPEN: 'http://chess.ca/crosstable?tournament_check_number=201605009' },
            { name: 'Eastern Ontario Open', location: 'Ottawa', start: '2017-06-24', end: '2017-06-26', OPEN: 'http://chess.ca/crosstable?tournament_check_number=201606067', U1900: 'http://chess.ca/crosstable?tournament_check_number=201606069', U1600: 'http://chess.ca/crosstable?tournament_check_number=201606068' }
          ]
        }
      }
    }
  },
  mounted: function () {
    $(this.$el).collapsible()
  },
  methods: {
    toggleCollapsible: function (season) {
      let _self = this
      _self.seasons[season].expanded = !_self.seasons[season].expanded
      if (_self.seasons[season].expanded) {
        console.log(season)
        Object.keys(_self.seasons).forEach(function (key) {
          if (key !== season) {
            _self.seasons[key].expanded = false
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  .results {
    margin-right: 10px;
  }
</style>
