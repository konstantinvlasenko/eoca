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
      { group: 'Open', name: 'FM Qiyu Zhou' },
      { group: 'U2200', name: 'Sam Marin' },
      { group: 'U1900', name: 'Abdelaziz Mahdjoubi' },
      { group: 'U1600', name: 'Daniel Xu' }]
    }
  }
}
</script>