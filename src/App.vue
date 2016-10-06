<template>
  <div id="app">
    <!-- Always shows a header, even in smaller screens. -->
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">Eastern Ontario Chess Association</span>
          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>
          <!-- Navigation. We hide it in small screens. -->
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <a class="mdl-navigation__link" href="">FRANÇAIS</a>
          </nav>
        </div>
      </header>
      <main class="mdl-layout__content">
        
        <div class="page-content">
          <welcome></welcome>
          <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--8-col"><schedule></schedule></div>
            <div class="mdl-cell mdl-cell--4-col">
              <standings></standings>
              <div class="space-large-screen mdl-layout--large-screen-only"></div>
              <div class="space-small-screen mdl-layout--small-screen-only"></div>
              <winners></winners>
            </div>
          </div>
        </div>
        
        <footer class="mdl-mega-footer">
          <div class="mdl-mega-footer__middle-section">

            <div class="mdl-mega-footer__drop-down-section">
              <input class="mdl-mega-footer__heading-checkbox" type="checkbox" checked>
              <h1 class="mdl-mega-footer__heading">About</h1>
              <ul class="mdl-mega-footer__link-list">
                <li><a href="#">Constitution</a></li>
                <li><a href="#">Board Members</a></li>
                <li><a href="#">EOCA Grand Prix Regulations</a></li>
              </ul>
            </div>

            <div class="mdl-mega-footer__drop-down-section">
              <input class="mdl-mega-footer__heading-checkbox" type="checkbox" checked>
              <h1 class="mdl-mega-footer__heading">History</h1>
              <ul class="mdl-mega-footer__link-list">
                <li><a href="#">EOCA Grand Prix Champions</a></li>
                <li><a href="#">Past Tournaments</a></li>
                <li><a href="#">Past Standings</a></li>
              </ul>
            </div>

            <div class="mdl-mega-footer__drop-down-section">
              <input class="mdl-mega-footer__heading-checkbox" type="checkbox" checked>
              <h1 class="mdl-mega-footer__heading">Links</h1>
              <ul class="mdl-mega-footer__link-list">
                <li><a href="#">Chess Federations, Associations and Leagues</a></li>
                <li><a href="#">Chess Clubs</a></li>
                <li><a href="#">Other Links</a></li>
              </ul>
            </div>

          </div>

          <div class="mdl-mega-footer__bottom-section">
            <div class="mdl-logo">Title</div>
            <ul class="mdl-mega-footer__link-list">
              <li><a href="#">Help</a></li>
              <li><a href="#">Privacy & Terms</a></li>
            </ul>
          </div>

        </footer>
      </main>
    </div>
  </div>
</template>

<script>
import Welcome from './components/Welcome'
import Schedule from './components/Schedule'
import Standings from './components/Standings'
import Winners from './components/Winners'

export default {
  components: {
    Welcome,
    Schedule,
    Standings,
    Winners
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-content {
  width: 70%;
  margin: 0 auto
}
.space-large-screen {
  margin: 180px 0 180px 0
}
.space-small-screen {
  margin: 25px 0 25px 0
}
</style>