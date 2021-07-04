<template>
<div id="1">
    <img src="../assets/light_hand.jpeg">
    <p>K.A. Portfolio</p>
</div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

    div {
        height: 560px;
        padding: 0;
        margin: 0;
    }
    img {
        width: 100%;
        height: 600px;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }

    p {
        font-size: 40px;
        z-index: 1;
        color: white;
        position: relative;
        top: 400px;
        left: -200px;
    }

    @media screen and (max-width: 600px){ 
        div {
            height: 270px;
        }
        img {
            height: 300px;
        }
        p {
            font-size: 30px;
            top: 180px;
            left: -20px;
        }
    }

    
</style>
