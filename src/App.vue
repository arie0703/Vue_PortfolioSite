<template>
  <div id="app">
    <Header></Header>
    <Nav></Nav>
    <Introduction></Introduction>
    <Works></Works>
    <Skill></Skill>
    <Links></Links>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Introduction from '@/components/Introduction'
import Works from '@/components/Works'
import Skill from '@/components/Skill'
import Links from '@/components/Links'

export default {
  name: 'App',
  components: {
    Nav,
    Header,
    Introduction,
    Works,
    Skill,
    Links
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
  padding: 80px 0px;
}

body {
  background-color: #000000;
  margin: 0px;
  padding: 0px;
}

#app {
  margin: auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: orange;
  transition: 0.5s;
}

@media screen and (max-width: 600px){ 
  .component {
    padding: 30px 0px;
  }
  
  .title {
    font-size: 32px;
  }
}
</style>