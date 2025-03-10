<template>
  <div>
    <MyHeader
      @openMenu="openMenu"
      :class="{ close: showMenu == true }"
      :test="'готово!'"
    />
    <div class="test">
      <h3 style="color: white; text-transform: uppercase">
        Ваш результат рассчитан:
      </h3>
      <p style="color: white">
        <span style="text-decoration: underline">Вы относитесь к 3%</span>
        респондентов, чей уровень интеллекта более чем на 15 пунктов отличается
        от среднего в большую или меньшую сторону!
      </p>
      <h3 style="color: rgba(59, 222, 124, 1); text-transform: uppercase">
        Скорее получите свой результат!
      </h3>
      <div
        style="
          background: rgba(28, 39, 65, 1);
          width: 300px;
          border-radius: 6px;
          padding: 12px;
          text-align: center;
        "
      >
        <p
          style="
            color: white;
            font-family: system-ui, -apple-system, BlinkMacSystemFont,
              'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
              'Helvetica Neue', sans-serif;
          "
        >
          В целях защиты персональных данных результат теста, их подробная
          интерпретация и рекомендации доступны в виде голосового сообщения по
          звонку с вашего мобильного телефона
        </p>
      </div>
      <div>
        <h3 style="color: rgba(59, 222, 124, 1)">
          Звоните скорее, запись доступна всего <time datetime="min">{{ minutes }} : {{ seconds }}</time> минут
        </h3>
      </div>
      <div
        style="
          background: rgba(235, 27, 0, 1);
          display: flex;
          height: 92px;
          padding: 15px;
          border-radius: 6px;
          margin-left: 10px;
          margin-right: 10px;
        "
      >
        <img style="width: 30px" src="../../assets/call_btn.svg" />
        <button
          style="
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            text-align: left;
            margin-left: 20px;
          "
        >
          Позвонить и прослушать результат
        </button>
      </div>
    </div>
    <BurgerMenu
      style="position: absolute; top: 0; width: 100%; height: 100%"
      :show="showMenu"
      @closeMenu="closeMenu"
    />
  </div>
</template>

<script setup>
import MyHeader from "../Molecules/MyHeader.vue";
import { ref,computed, onMounted } from "vue";
import BurgerMenu from "../Organisms/BurgerMenu.vue";
import { useRouter } from "vue-router";

let interval = ref(null)
let timeLeft = ref(600)
const router = useRouter()

let minutes = ref(computed(() => Math.floor(timeLeft.value / 60)))
let seconds = ref(computed(() => timeLeft.value % 60))

const startTimer = () =>{
      if (interval.value) return;
      interval.value = setInterval(() => {
        if (timeLeft.value > 0) {
          timeLeft.value--;
        } else {
          stopTimer();
          router.push({path:'/'})
        }
      }, 1000);
    }

const stopTimer = () => {
  clearInterval(interval.value)
  interval.value = null
}

const showMenu = ref(false);

const openMenu = (open) => {
  showMenu.value = open;
};
const closeMenu = (close) => {
  showMenu.value = close;
};
onMounted(() => {
  startTimer()
})

</script>

<style scoped>
.test {
  background: url(../../assets/test_bg.svg);
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>
