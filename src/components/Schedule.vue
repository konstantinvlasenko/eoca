<template>
  <table class="striped">
    <tbody>
      <tr>
        <td><a href="resources/2016/1st-Almonte-Open.pdf" target="_blank">Almonte Open</a></td>
        <td>Aug 27,28</td>
        <td>Almonte</td>
        <td><i class="material-icons green-text">done</i></td>
      </tr>
      <tr>
        <td><a href="resources/2016/2016-RA-Fall-Open.pdf" target="_blank">RA Fall Open</a></td>
        <td>Sep 23,24,25</td>
        <td>Ottawa</td>
        <td><i class="material-icons green-text">done</i></td>
      </tr>
      <tr>
        <td><a href="resources/2016/2016-National-Capital-Open.pdf" target="_blank">National Capital Open</a></td>
        <td>Oct 28,29,30</td>
        <td>Ottawa</td>
        <td><i class="material-icons">schedule</i></td>
      </tr>
      <tr>
        <td>RA November Open</td>
        <td>Nov 25,26,27</td>
        <td>Ottawa</td>
        <td><i class="material-icons">schedule</i></td>
      </tr>
      <tr>
        <td>RA Winter Open</td>
        <td>Jan 13,14,15</td>
        <td>Ottawa</td>
        <td><i class="material-icons">schedule</i></td>
      </tr>
      <tr>
        <td>Gatineau Open</td>
        <td>Mar 3,4,5</td>
        <td>Gatineau</td>
        <td><i class="material-icons">schedule</i></td>
      </tr>
      <tr>
        <td>Kingston Open</td>
        <td>Mar 31 - Apr 2</td>
        <td>Kingston</td>
        <td><i class="material-icons">schedule</i></td>
      </tr>
      <tr>
        <td>CYCC Qualifier</td>
        <td>Apr 17</td>
        <td>Nepean</td>
        <td><i class="material-icons">schedule</i></td>
      </tr>
      <tr>
        <td><a href="resources/2017/Arnprior-Open.pdf" target="_blank">Arnprior Open</a></td>
        <td>Apr 29,30</td>
        <td>Arnprior</td>
        <td><i class="material-icons">schedule</i></td>
      </tr>
      <tr>
        <td>Ontario Open</td>
        <td>May 20,21,22</td>
        <td>Ottawa</td>
        <td><i class="material-icons">schedule</i></td>
      </tr>
      <tr>
        <td>Eastern Ontario Open</td>
        <td>Jun 23,24,25</td>
        <td>Ottawa</td>
        <td><i class="material-icons">schedule</i></td>
      </tr>
    </tbody>
  </table>
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

