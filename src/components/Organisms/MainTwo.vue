<template>
    <div class="main__two bg">
        <p class="main__two__text">Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, 
            но и выработать список рекомендаций для повышения этого показателя. </p>
    </div>
</template>

<script setup>

</script>

<style  scoped>
.main__two {
    background: url(../../assets/two_bg.svg);
    background-position: 50% 20%;
    background-size: 450px;
    background-repeat: no-repeat;
    text-align: center;
    display: flex;
    padding-top: 83px;
    flex-direction: column;
    align-items:center;
    padding-left: 36px;
    height: 339px;
    padding-right: 36px;
}
.main__two__text {
    font-size: 28px;
    color:white;
    font-family:yesaeva one;
    margin-top:0;
}
@media screen and (min-width:900px){
    .main__two__text{
        margin-top: 83px;
        padding-left: 83px;
        padding-right: 83px;
    }
    .main__two {
        background-repeat:repeat;
        background-size: 600px;
    }
}
</style>
