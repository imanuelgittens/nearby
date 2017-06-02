<template id="home">
  <v-ons-page>
    <custom-toolbar title="Home" :action="toggleMenu"></custom-toolbar>
    <p style="text-align: center">
      Welcome home.
    </p>
  </v-ons-page>
</template>

<style scoped>

</style>

<script>
  import Toolbar from './Toolbar.vue';
  export default {
    name: 'home',
    props: ['toggleMenu'],
    components: { Toolbar }
  }
</script>