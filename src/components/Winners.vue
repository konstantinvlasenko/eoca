<template>
  <table class="striped">
    <tbody>
      <tr v-for="player in players">
        <td >{{ player.group }}</td>
        <td class="right-align">{{ player.name }}</td>
      </tr>
    </tbody>
  </table>
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