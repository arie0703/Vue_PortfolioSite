<template>
  <div id="app">
    <tab-menu></tab-menu>
    <router-view/>
  </div>
</template>

<script>

import TabMenu from '@/components/TabMenu'

export default {
  name: 'App',
  components: {
    TabMenu
  }
}
</script>

<style>

body {
  background-color: #efefef;
}
#app {
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>