<template>
  <div class="wrapper">
    <p>{{ msg }}</p>
    <p>Webエンジニア志望大学生のポートフォリオサイトです！</p>
    <p>当サイトはVue.jsで制作いたしました。</p>

    <div class="contents" v-for="(item, index) in items" :key=index>
        <div>
            <p class="item">{{item.title}}</p>
        </div>
        <div>
            <p>{{item.discription}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'ようこそ！',

      items: [
        {title: "Profile", discription: "私のプロフィールです。生い立ちから現在、将来の目標など"},
        {title: "Experience", discription: "プログラミングやインターン・その他の経験について書いています。"},
        {title: "Works", discription: "私の制作したポートフォリオ集です。"},
      ]
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

.contents{
    display: flex;
    justify-content: center;
    margin: auto;
    width: 70%;
}

.contents div{
    width: 50%;
    text-align: left;
}

h1, h2 {
  font-weight: normal;
}
</style>
