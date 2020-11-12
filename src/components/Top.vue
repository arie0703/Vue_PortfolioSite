<template>
  <div class="wrapper">
    <p>{{ msg }}</p>
    <p>{{name}}</p>
    <p>Webエンジニア志望大学生のポートフォリオサイトです！</p>
    <p>当サイトはVue.jsで制作いたしました。</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'ようこそ！',
      name: 'Bem Vindo!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.wrapper {
    background-color: #fff;
    width: 70%;
    margin: 10px auto;
    padding: 20px;
}
</style>

<style scoped>


h1, h2 {
  font-weight: normal;
}
</style>
