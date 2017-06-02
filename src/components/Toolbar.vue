<template id="toolbar">
  <v-ons-toolbar>
    <div class="left">
      <v-ons-toolbar-button @click="action">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </div>
    <div class="center">{{ title }}</div>
  </v-ons-toolbar>
</template>

<style scoped>

</style>

<script>
  export default {
    name: 'custom-toolbar',
    props: ['title', 'action']
  }
</script>