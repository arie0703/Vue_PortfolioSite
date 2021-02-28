<template>
    <div class="component">
        <p class="title">Skill</p>

        <div class="skill-wrapper">
            <div class="language">
                <img src="../assets/js.png">
                <img src="../assets/php.png">
                <img src="../assets/ruby.png">
                <img src="../assets/swift.png">
            </div>
            <div class="framework">
                <img src="../assets/vue.png">
                <img src="../assets/laravel.png">
                <img src="../assets/rails.png">
            </div>
        </div>
    </div>
</template>

<style scoped>
.skill-wrapper {
    width: 100%;
}

.language, .framework{
    display: flex;
    max-width: 70%;
    margin: 10px auto;
    justify-content: center;
}
img {
    margin: auto 20px;
    max-width: 120px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>