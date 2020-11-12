<template>
    <div class="wrapper">
        <div class="img-wrapper">
        <img src="../assets/profile.jpg">
        </div>
        
        <div class="profile">
          <p>NAME: {{name}}</p>
          <p>HOBBY: {{hobby}}</p>
          <p>FROM: {{from}}</p>
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
            from: "神奈川県"

        }
    }
}
</script>

<style scoped>

  .wrapper {
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
</style>>

