<template>
  <v-ons-splitter>
    <v-ons-splitter-side swipeable width="150px" collapse="" side="left">
      <v-ons-page>
        <v-ons-list>
          <v-ons-list-header>Search Categories</v-ons-list-header>
          <v-ons-list-item>ATMs</v-ons-list-item>
          <v-ons-list-item>Item B</v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>
    <v-ons-splitter-content>
      <v-ons-page>
        <v-ons-toolbar>
          <div class="left">
            <v-ons-toolbar-button>
              <v-ons-icon icon="ion-navicon, material: md-menu"></v-ons-icon>
            </v-ons-toolbar-button>
          </div>
          <div class="center">Findrr</div>
          <div class="right">
            
          </div>
        </v-ons-toolbar>
        <!-- Main content -->
        <findrr-map></findrr-map>
        <!-- End Main content -->
      </v-ons-page>
    </v-ons-splitter-content>
  </v-ons-splitter>
  
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
  import Home from './pages/HomeContent.vue';
  import FindrrMap from './Map.vue';
  export default {
    name: 'app-nav',
    components: { Home, FindrrMap}
  }
</script>