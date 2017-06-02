<template id="main">
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Form</div>
    </v-ons-toolbar>
    <div style="text-align: center; margin-top: 30px;">
      <p><v-ons-input type="text" placeholder="Username" float></v-ons-input></p>
      <p><v-ons-input type="password" placeholder="Password" float></v-ons-input></p>
      <p><v-ons-button>Sign in</v-ons-button></p>
    </div>
  </v-ons-page>
</template>

<style scoped>
  .wrapper {
    flex-direction: column;
    justify-content: center;
  }
  .weex {
    font-size: 60px;
    text-align: center;
    color: #1B90F7;
  }
  .vue {
    font-size: 60px;
    text-align: center;
    margin-top: 30px;
    color: #41B883;
  }
</style>

<script>
  import Home from './Home.vue';
  import ATM from './ATM.vue';
  import Toolbar from './Toolbar.vue';
  export default {
    name: 'app-nav',
    data() {
      return {
        currentPage: 'home',
        pages: ['home', 'atm'],
        openSide: false
      };
    },
    components: {
      home: Home,
      atm: ATM
    }

  }
</script>