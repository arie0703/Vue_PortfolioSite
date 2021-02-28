<template>
  <div id="app">
    <Header></Header>
    <Introduction></Introduction>
    <Works></Works>
    <Skill></Skill>
  </div>
</template>

<script>

import TabMenu from '@/components/TabMenu'
import Header from '@/components/Header'
import Introduction from '@/components/Introduction'
import Works from '@/components/Works'
import Skill from '@/components/Skill'

export default {
  name: 'App',
  components: {
    TabMenu,
    Header,
    Introduction,
    Works,
    Skill
  }
}
</script>

<style>
.title{
  text-align: center;
  font-size: 40px;
  margin-top: 0;
}

.component {
    padding: 30px 0px;
}

body {
  background-color: #000000;
  margin: 0;
  top: 0;
}
#app {
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: orange;
  transition: 0.5s;
}
</style>