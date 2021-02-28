<template>
<div>
    <img src="../assets/light_hand.jpeg">
    <p>AK's Portfollio</p>
</div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

    div {
        height: 600px;
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
</style>