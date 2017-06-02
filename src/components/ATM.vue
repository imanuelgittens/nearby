<template id="atms">
  <v-ons-page>
    <custom-toolbar title="ATMs" :action="toggleMenu"></custom-toolbar>
    <p style="text-align: center">
      Some atms here.
    </p>
  </v-ons-page>
</template>

<style scoped>

</style>

<script>
  import Toolbar from './Toolbar.vue';
  export default {
    name: 'atm',
    props: ['toggleMenu'],
    components: { Toolbar }
  }
</script>