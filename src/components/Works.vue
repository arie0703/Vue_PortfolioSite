<template>
    <div class="component" id="3">
        <p class="title">Works</p>

        <div class="works-wrapper">
            <div class="work" id="work1">
                <img src="../assets/works/gokugoku.jpg">
                <p class="w-title">gokugoku</p>
            </div>
            <div class="work" id="work2">
                <img src="../assets/works/app1.png">
                <p class="w-title">私のえらい日記</p>
            </div>
            <div class="work" id="work3">
                <img src="../assets/works/codestore.jpeg">
                <p class="w-title">Code Store</p>
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
                        <a href="https://gokugoku.herokuapp.com/"><i class="fas fa-external-link-alt"></i> gokugoku</a>
                    </p>

                    <p>お酒の口コミ投稿アプリです。</p>
                    <p>使用技術: Ruby, Ruby on Rails, PostgreSQL, Heroku</p>
                    <a class ="repo-link" href="https://github.com/arie0703/rails_gokugoku"><i class="fab fa-github"> Repository</i></a>
                `
                $("#description").append(html).hide().fadeIn(600);
                
            }, false);
        } else if (i == 2) {
            target.addEventListener('click', function( event ) {
                let description = document.getElementById("description");
                description.innerHTML = ("");

                var html =`
                    <p class="p-title">
                        <a href="https://apps.apple.com/app/id1574659017"><i class="fas fa-external-link-alt"></i> 私のえらい日記</a>
                    </p>

                    <p>毎日のちょっとした「えらい」を記録するアプリです。</p>
                    <p>使用技術: Swift, Xcode</p>
                    <a class="repo-link" href="https://github.com/arie0703/erai-diary-app"><i class="fab fa-github"> Repository</i></a>
                `
                $("#description").append(html).hide().fadeIn(600);
            }, false);
        } else if (i == 3) {
            target.addEventListener('click', function( event ) {
                let description = document.getElementById("description");
                description.innerHTML = ("");

                var html =`
                    <p class="p-title">
                        <a href="https://ari-code.web.app/"><i class="fas fa-external-link-alt"></i> Code Store</a>
                    </p>

                    <p>自身のよく使うプログラミングコードを保存できる開発者向けのサービスです。</p>
                    <p>使用技術: Vue.js, Firebase</p>
                    <a class="repo-link" href="https://github.com/arie0703/codestore"><i class="fab fa-github"> Repository</i></a>
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
    
    img:hover {
        transform:scale(1.08,1.08);
        transition: 0.3s;
    }

    .d-wrapper {
        width: 50%;
        margin: 20px auto;
        text-align: left;
        color: white;
    }

    @media screen and (max-width: 600px){ 
        .work {
            width: 100%;
            margin: 8px;
        }
        .works-wrapper {
            width: 80%;
        }
        img {
            width: 80px;
            height: 80px;
        }
        .w-title {
            display: none;
        }
        .d-wrapper {
            width: 70%;
        }
    }

    
</style>

<style>
    .p-title {
        font-size: 25px;
    }
    .repo-link {
        color: #00acee;
    }
    .repo-link:hover {
        color: #80dafd;
    }
    @media screen and (max-width: 600px){ 
        .p-title {
            font-size: 22px;
        }
    }
</style>