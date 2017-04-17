<template>
  <footer class="page-footer orange">
    <div class="container">
      <div class="row">
        <div class="col s4">
          <h5 class="white-text">About</h5>
          <ul>
            <li><router-link to="/constitution" class="grey-text text-lighten-3">Constitution</router-link></li>
            <li><router-link to="/board" class="grey-text text-lighten-3">Board Members</router-link></li>
            <li><router-link to="/regulations" class="grey-text text-lighten-3">EOCA Grand Prix Regulations</router-link></li>
          </ul>
        </div>
        <div class="col s4">
          <h5 class="white-text">History</h5>
          <ul>
            <li><router-link to="/champions" class="grey-text text-lighten-3">EOCA Grand Prix Champions</router-link></li>
            <li><router-link to="/seasons" class="grey-text text-lighten-3">Past Tournaments</router-link></li>
            <li><a class="grey-text text-lighten-3" href="#!">Past Standings</a></li>
          </ul>
        </div>
        <div class="col s4">
          <h5 class="white-text">Links</h5>
          <ul>
            <li><router-link to="/federations" class="grey-text text-lighten-3">Chess Organizations</router-link></li>
            <li><router-link to="/clubs" class="grey-text text-lighten-3">Chess Clubs</router-link></li>
            <li><router-link to="/links" class="grey-text text-lighten-3">Other Links</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">Made by VELASKEC TECHNOLOGIES, Inc.</div>    
    </div>
  </footer>
</template>