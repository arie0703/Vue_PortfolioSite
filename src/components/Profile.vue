<template>
    <div class="wrapper">

        <div class="profile-wrapper">

            <div class="img-wrapper">
            <img src="../assets/profile.jpg">
            </div>
            
            <div class="profile">
            <p>NAME: {{name}}</p>
            <p>HOBBY: {{hobby}}</p>
            <p>FROM: {{from}}</p>
            <p>AGE: {{age}}</p>
            </div>
        </div>
        

        <div class="topic">
            <p class="topic-title">小学校〜大学時代</p>
            <p>小学校時代は趣味でWebサイトを作ったり、ゲームを制作するなど、パソコンを使って物づくりをすることに熱中していた。</p>
            <p>中学校に入ると英語の授業が始まり、そこで海外や留学などに興味を持つ。勉強は得意ではなかったが、留学や大学進学など将来を意識して高校受験に臨む。</p>
            <p>県内の高校に入学後、軽音楽部に入部。音楽活動に熱中した高校生活を送る。</p>
            <p>高校卒業後は上智大学外国語学部ポルトガル語学科に入学し、ポルトガル語漬けの日々を過ごす。新興国に渡航することに関心があり、東ティモールでのボランティアやブラジルでの語学留学などを経験する。</p>
        </div>

        <div class="topic">
            <p class="topic-title">プログラミングとの出会い</p>
            <p>ブラジル留学中にクリエイターの友人が作ったゲームで遊び、自分も何か作ってみようと思い、プログラミングを始める。</p>
            <p>実際にWebサービスを制作することを通じて、パソコン一つで何か課題を解決する・日常をちょっと便利にするところにプログラミングの面白さを見出し、エンジニアとして働くことに興味を持つ。</p>
        </div>

        <div class="topic">
            <p class="topic-title">将来のビジョン</p>
            <p>エンジニアとして技術を磨くだけではなく、ユーザーのニーズを汲み取ってプロダクトの改善・新規事業の創出など、企画に携われるエンジニアになりたいと考えています。</p>
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

