<template>
    <div>
        <MyHeader @openMenu="openMenu" :class="{close:showMenu == true}" :test="'тест на определение iq'"/>
        <div class="test">
        <ProgressBar :percent="percent"/>
        <RouterView @setPercent="onSetPercent"/>
        </div>
        <BurgerMenu style="position: absolute;top:0;width:100%;height:100%;" :show="showMenu" @closeMenu="closeMenu"/>
    </div>
</template>

<script setup>
import MyHeader from '../Molecules/MyHeader.vue';
import { ref } from 'vue';
import BurgerMenu from '../Organisms/BurgerMenu.vue';
import { RouterView } from 'vue-router';
import ProgressBar from '../Molecules/ProgressBar.vue';


const showMenu = ref(false)

const openMenu = (open) =>{ 
    showMenu.value = open
}
const closeMenu = (close) =>{
    showMenu.value = close
}
const percent = ref(null)
const onSetPercent = (value) =>{
    percent.value = value
}
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