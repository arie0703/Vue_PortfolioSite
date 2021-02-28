<template>
    <div class="component">
        <p class="title">Works</p>

        <div class="works-wrapper">
            <div class="work" id="work1">
                <img src="../assets/works/gokugoku.jpg">
                <p class="w-title">gokugoku</p>
            </div>
            <div class="work" id="work2">
                <img src="../assets/works/langrow.jpg">
                <p class="w-title">Langrow!</p>
            </div>
            <div class="work" id="work3">
                <img src="../assets/works/app1.png">
                <p class="w-title">私のえらい日記</p>
            </div>
            
            
        </div>
        <div class="d-wrapper">
            <div id="description"></div>
        </div>
    </div>
</template>

<script>
window.onload = function() {
    for (i = 1; i <= 3; i++) {
        let target = document.getElementById("work" + i);

        if (i == 1) {
            target.addEventListener('click', function( event ) {
                let description = document.getElementById("description");
                description.innerHTML = ("");

                var html =`
                    <p class="p-title">
                        <a href="https://gokugoku.herokuapp.com/">gokugoku</a>
                    </p>

                    <p>お酒の口コミ投稿アプリです。</p>
                    <p>使用技術: Ruby, Ruby on Rails, PostgreSQL, Heroku</p>
                `
                $("#description").append(html).hide().fadeIn(600);
                
            }, false);
        } else if (i == 2) {
            target.addEventListener('click', function( event ) {
                let description = document.getElementById("description");
                description.innerHTML = ("");

                var html =`
                    <p class="p-title">
                        <a href="https://langrow.herokuapp.com/">Langrow!</a>
                    </p>

                    <p>言語学習プラットフォームです。</p>
                    <p>使用技術: PHP, Laravel 8.0, Axios, MySQL, Heroku</p>
                `
                $("#description").append(html).hide().fadeIn(600);
            }, false);
        } else if (i == 3) {
            target.addEventListener('click', function( event ) {
                let description = document.getElementById("description");
                description.innerHTML = ("");

                var html =`
                    <p class="p-title">私のえらい日記</p>

                    <p>日常の「えらい」を記録するアプリです。（現在審査中）</p>
                    <p>使用技術: Swift, Xcode</p>
                `
                $("#description").append(html).hide().fadeIn(600);
            }, false);
        }
        

        // target.addEventListener('mouseleave', function( event ) {
        //     let description = document.getElementById("description");

        //     description.innerHTML = ("");
            
        
        // }, false);
    }
}
</script>

<style scoped>

    .works-wrapper {
        display: flex;
        width: 70%;
        margin: 0 auto;
        justify-content: center;
    }

    .work {
        width: 250px;
        /* background-color: rgba(255,255,255,0.1); */
        margin: 20px;
    }

    img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        cursor : pointer;
    }

    .d-wrapper {
        width: 50%;
        margin: 20px auto;
        text-align: left;
        color: white;
    }

    
</style>

<style>
    .p-title {
        font-size: 25px;
    }
</style>