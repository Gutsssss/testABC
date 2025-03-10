<template>
  <div class="main__four">
    <p style="color: white;font-size: 22px;padding-top:56px;padding-left: 14px;">
      Прохождение теста займет у вас не более
      <span style="color: rgba(255, 199, 0, 1)">12 минут</span>, а его
      результаты вы сможете
      <span style="color: rgba(255, 199, 0, 1)">использовать всю жизнь.</span>
    </p>
    <div class="main__four_second">
      <p>
        Профессиональная интерпретация и детально <span style="font-weight: 800;">проработанные рекомендации</span>
        позволят вам качественно <span style="font-weight: 800;">изменить все аспекты своей жизни:</span> от
        финансового до любовного.
      </p>
    </div>
    <RouterLink to="/test/1">
    <button class="main__four_button">Пройти тест</button>
  </RouterLink>
    <p style="color: rgba(255, 255, 255, 0.5);margin:20px"><img src="../../assets/last_2019.svg"/>2019</p>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped>
.main__four {
  background: url(../../assets/four_bg.svg);
  display: flex;
  flex-direction: column;
  align-items: center
}
.main__four_second {
    background-color: rgba(243, 243, 242, 0.8);
    padding: 15px;
    margin: 12px;
    border-radius: 20px;

}
.main__four_second p{
    font-size: 24px;
}
.main__four_button {
    background: none;
    border: 1px solid rgba(255, 255, 255, 1);
    height: 44px;
    width: 200px;
    margin-top:33px;
    border-radius: 50px;
    color: white;
    text-transform: uppercase;
    font-family: Merriwear;
}
@media screen and (min-width:600px){
    .main__four {
        text-align: center;
    }
}
</style>
