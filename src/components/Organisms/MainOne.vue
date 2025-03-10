<template>
    <div class="main__one">
    <div class="main__one__first">
        <p style="color:white; font-size: 18px;">Пройдите точный и быстрый</p>
        <p style="color:rgba(255, 199, 0, 1);font-size: 36px;text-transform: uppercase;font-weight: 600;margin:0 30px">тест на определение iq</p>
    </div>
    <div class="main__one__second">
    <RouterLink to="/test/1">
        <MyButton>Пройти тест</MyButton>
    </RouterLink>
        <div style="margin: 0px 15px;">
        <p style="color: rgba(255, 199, 0, 1);font-size: 20px;margin-bottom: 0;">И получите рекомендации по развитию своего интеллекта</p>
        <p style="color: white;font-size: 20px;margin-top: 0;">и улучшению финансового благосостояния и личной жизни </p>
        </div>
        <div>
            <button style="border-radius: 50px;border:0px"><img src="../../assets/arrow_up.svg"/></button>
            <p style="color: white;font-size: 8px;margin:3px 0">Подробонее</p>
        </div>
    </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import MyButton from '../Molecules/MyButton.vue';


</script>

<style scoped>
.main__one {
    background: url(../../assets/rain_bk.svg);
    background-position: 50% 10%;
    background-size: 450px;
    background-repeat: no-repeat;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 647px;
}
.main__one_button {
    background:rgba(255, 199, 0, 1);
    color:rgba(13, 12, 17, 1);
    font-size: 20px;
    text-transform: uppercase;
    font-family: Merriwear;
    width: 189px;
    height: 41px;
    border-radius: 20px;
    border:0px
}
.main__one__second {
    position:absolute;
    bottom:20px;
}

@media screen and (min-width:900px){
    .main__one__second {
        margin-top: 350px;
        position:initial;
    }
    .main__one {
        background-repeat:repeat
    }
}
</style>