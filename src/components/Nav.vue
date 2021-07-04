<template>
    <div>
        <div class="nav-menu">
            <nav>
                <li><a href="#1">Top</a></li>
                <li><a href="#2">Introduction</a></li>
                <li><a href="#3">Works</a></li>
                <li><a href="#4">Skill</a></li>
                <li><a href="#5">Links</a></li>
            </nav>
        </div>

        <div class="space"></div>
    </div>
</template>

<script>
    $(function() {
        let target = $(".nav-menu").offset().top;
    
        $(window).on("scroll", function() {
            let currentPos = $(window).scrollTop();
            if (window.matchMedia('(min-width:600px)').matches) { //スマホではnavが画面上部に張り付く処理を発生させない。
                if(currentPos > target) {
                    $(".nav-menu").addClass('sticky');
                    $(".space").css("display", "block");
                } else{
                    $(".nav-menu").removeClass('sticky');
                    $(".space").css("display", "none");
                }
            }
        });
    });

    $(function(){
        $('a[href^="#"]').click(function(){
            var adjust = 0;
            var speed = 400;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top + adjust;
            $('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
        });
    });

</script>

<style>
.nav-menu {
    width: 100%;
    height: 70px;
    background: rgba(15, 15, 15, 0.7);
    position: relative;
}
.sticky{
    position: fixed;
    top: 0;
    left: 0;
}

.space {
    display: none;
    height: 70px;
}

nav {
    height: 25px;
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom :0;
    margin: auto;
    padding-left: 60px;
}

nav li {
    list-style: none;
}

nav li a {
    padding: 20px 30px;
    font-size: 18px;
}

@media screen and (max-width: 600px){ 
    .nav-menu {
        height: 60px;
    }
    nav {
        padding-left: 10px;
        display: inline;
        text-align: center;
    }
    nav li {
        width: 20px;
        display: inline;
    }
    nav li a {
        padding: 10px 12px;
        font-size: 15px;
    }
}

@media screen and (max-width: 350px){
    nav li a {
        padding: 10px 6px;
    }

}



</style>