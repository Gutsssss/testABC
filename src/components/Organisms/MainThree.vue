<template>
  <div class="main__three">
    <p>
      Также по результатам теста <span class="spanP">вы получите</span> подробные <span class="spanP">советы</span> по определению
      наиболее перспективной <span class="spanP">для вашего типа</span> <span style="font-weight: 800;">интеллекта</span> <span class="spanP">сферы деятельности,</span>
      которая принесет вам скорейший финансовый результат.
    </p>
    <img style="width: 232px;" src="../../assets/main3.svg"/>
    <RouterLink to="/test/1">
      <MyButton>Пройти тест</MyButton>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import MyButton from '../Molecules/MyButton.vue';

</script>

<style scoped>
.main__three {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
    padding-top:38px ;
}
p {
    font-size: 24px;
    font-family: PT serif;
    padding-left:11px;
    padding-right: 11px;
}
.spanP {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 5%;
}
@media screen and (min-width:600px){
    .main__three {
        text-align: center;
    }
}
</style>
