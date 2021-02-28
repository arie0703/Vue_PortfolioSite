<template>
    <div class="component">
        <p class=title>Introduction</p>

        <div class="profile-wrapper">
            <div class="img-wrapper">
            <img src="../assets/profile.jpg">
            </div>
            
            <div class="profile">
            <p>K. A.</p>
                <div class="intro">
                    <p>上智大学外国語学部出身。2022年に大学を卒業後、</p>
                    <p>アプリケーションエンジニアとして働く予定。</p>
                    <p>サーバーサイドの言語を中心に学習中。</p>
                </div>
            
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style  scoped>

.profile-wrapper {
    display: flex;
    width: 70%;
    margin: 0 auto;
}

.img-wrapper {
    width: 50%;
}

.profile {
    text-align: left;
    width: 50%;

}
img {
    object-fit: cover;
    height: 150px;
    width: 150px;
    border-radius: 50%;
}

.intro p {
    margin: 0;
}
</style>