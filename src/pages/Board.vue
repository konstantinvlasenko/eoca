<template>
  <div class="board">
    <div class="card">
      <div class="card-content">
        <span class="card-title">Executive</span>
        <ul class="collection">
          <li class="collection-item avatar" v-for="member in members">
            <i v-bind:class="'material-icons circle fa fa-' + member.icon"></i>
            <span class="title">{{ member.title }}</span>
            <p>{{ member.name }}</p>
            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="card">
      <div class="card-content">
        <span class="card-title">OCA/CFC Governors (in the following order)</span>
        <ul class="collection">
          <li class="collection-item avatar" v-for="governor in governors">
            <i class="material-icons circle fa fa-institution"></i>
            <p>{{ governor.name }}</p>
            <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      members: [
        { icon: 'mortar-board teal darken-4', title: 'President', name: 'Aris Marghetis' },
        { icon: 'mortar-board teal darken-1', title: 'Vice-President', name: 'David Gordon' },
        { icon: 'dollar teal lighten-2', title: 'Treasurer', name: 'William Doubleday' },
        { icon: 'sticky-note-o gray', title: 'Secretary', name: 'Garland Best' }
      ],
      governors: [
        { name: 'Aris Marghetis (also EOCA/OCA Regional Vice-President)' },
        { name: 'David Gordon' },
        { name: 'Garland Best' }
      ]
    }
  }
}
</script>

<style scoped>
  .board {
    max-width: 600px;
    margin: 0 auto;
  }
</style>