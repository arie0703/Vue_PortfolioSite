<template>
    <div class="wrapper">
    
        <div class="topic">
            <p class="topic-title">言語/フレームワーク</p>
            <p>Ruby/Ruby on Rails</p>
            <p>JavaScript/Vue.js</p>
            <p>Dart/Flutter</p>
        </div>

        <div class="topic">
            <p class="topic-title">留学経験</p>
            <p>期間: 　2020年2月~8月</p>
            <p>滞在先: ブラジル</p>
            <p>ポルトガル語運用能力向上のため、現地の大学に留学。新型コロナウイルスの流行により、予定よりも早く帰国することとなったが、留学を通じて語学力を向上させる事ができた。</p>
        </div>


    </div>
</template>

<script>
export default {
    name: 'Profile',
    data() {
        return {
            name: "K. Arimura",
            hobby: "旅行、ギター、ネットサーフィン",
            from: "神奈川県",
            age: "22"
        }
    }
}
</script>

<style scoped>

  .profile-wrapper {
      display: flex;
  }

  .img-wrapper {
      width: 50%;
  }

  .profile {
      width: 50%;
      text-align: left;
  }
  img {
      object-fit: cover;
      height: 150px;
      width: 150px;

  }

  .topic{
      text-align: left;
      width: 60%;
      margin: 20px auto;
  }



  .topic-title{
      font-size: 20px;
      border-bottom: 1px solid #2c3e50;
      width: 300px;
  }
</style>>

