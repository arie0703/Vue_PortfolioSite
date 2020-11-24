<template>
  <div class="output">
    <div class="content"  v-for="(work, index) in works" :key=index>
     <h3>{{work.title}}</h3>
     <p class="language">使用技術: {{work.language}}</p>
     <p>{{work.text}}</p>
     <a v-bind:href=work.url></a>
  </div>
  </div>
</template>{{

<script>
export default {
  name: 'Output',
  data () {
    return {
      works:[
        {
          title: 'gokugoku', 
          text: 'コンビニやスーパーなどで買えるお酒の口コミ投稿サイト。コロナ下の生活をちょっと充実させるサービスとして制作しました。 タグ機能で飲みやすいお酒など、好きなジャンルのお酒を探す事ができます。',
          url: 'https://gokugoku.herokuapp.com/', 
          language: 'Ruby/Ruby on Rails'
        },

        {
          title: 'Langage Diary', 
          text: '外国語で日記をつけるアプリ。日本語を勉強中の海外の友人に、勉強する習慣をつけるためのプレゼントとして制作。', 
          url: 'https://gokugoku.herokuapp.com/', 
          language: 'PHP/Laravel'
        }
      ]

      
    }
  }
}
</script>

<style scoped>

div.output {
  text-align: center;
  display: flex;
  justify-content: center;
}

div.content {
  background-color: #fff;
  margin: 10px;
  width: 30%;
  position: relative;
}

div.content a {
  position: absolute;
  top: 0;
  left: 0;
  height:100%;
  width: 100%;
}


h3 {
  color: #535353;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

</style>