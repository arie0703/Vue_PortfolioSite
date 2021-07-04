<template>
    <div class="component" id="5">
        <p class="title">Links</p>

        <div class="links">
            <div v-on:click="mailer" class="link mail">
                <i class="far fa-envelope"></i>
            </div>
            <div class="link github">
                 <a href="https://github.com/arie0703"><i class="fab fa-github"></i></a>
            </div>
            <div class="link twitter">
                <a href="https://twitter.com/tech_arie"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: "Link",
    data() {
        return{
            username: "ari0703sophia",
            mailservice: "@gmail.com",
            address: null
        }
    },
    mounted() {
        this.address = this.username + this.mailservice;
    },
    methods: {
        mailer: function() {
            location.href = 'mailto:' + this.address + '?subject=&body=';
        }
    }
}
</script>

<style scoped>

a:hover {
    color: white;
}

.links {
    width: 60%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.link {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: relative; 
    cursor: pointer;
    margin: 15px;
    color: #fff;
}

.link i {
    font-size: 40px;
    height: 120px;
    line-height: 120px;
}


.mail {
    background: #4db56a;
}

.mail:hover {
    background: #60bd7a;
    transition: 0.5s;
}

.twitter {
    background: #00acee;
}

.twitter:hover {
    background: #38b6e7;
    transition: 0.5s;
}

.github {
    background: #4183c4;
}
.github:hover {
    background: #5797d6;
    transition: 0.5s;
}

@media screen and (max-width: 600px){ 
    .links {
        width: 100%;
    }
    .link {
        height: 60px;
        width: 60px;
    }
    .link i {
        font-size: 30px;
        height: 60px;
        line-height: 60px;
    }
}
</style>