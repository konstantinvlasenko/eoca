<template>
  <ul class="collapsible popout" data-collapsible="accordion">
    <li v-for="(val, key) in seasons" >
      <div class="collapsible-header"><i class="material-icons right"></i>{{ key }}</div>
      <div class="collapsible-body">
        <ul class="collection">
          <li class="collection-item avatar" v-for="tournament in val" v-bind:key="tournament.start" v-if="Date.now() > Date.parse(tournament.end)">
            <i class="material-icons circle">done</i>
            <span>{{ tournament.name }}</span><br/>
            <span>{{ tournament.location }}</span>
            <span class="right"><span>{{ tournament.start }}</span> - <span>{{ tournament.end }}</span></span><br/>
            <span class="results" v-if="tournament.OPEN"><a :href="tournament.OPEN" target="_blank">Open</a></span>
            <span class="results" v-if="tournament.U2200"><a :href="tournament.U2200" target="_blank">U2200</a></span>
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
      seasons: {}
    }
  },
  created () {
    this.$http.get('//s3.amazonaws.com/eoca/static/seasons.json').then((response) => {
      this.seasons = response.body
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
  .collapsible-header >i::after {
    content: 'expand_more'
  }
  
  .collapsible-header.active >i::after {
    content: 'expand_less'
  }
    
  .results {
    margin-right: 10px;
  }
</style>
