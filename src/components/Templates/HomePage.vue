<template>
    <MyHeader @openMenu="openMenu" :class="{close:showMenu == true}"/>
    <div class="main">
    <MainOne/>
    <MainTwo/>
    <MainThree/>
    <MainFour/>
    <BurgerMenu style="position: absolute;top:0;width:100%;height:100%;" :show="showMenu" @closeMenu="closeMenu"/>
</div>
</template>

<script setup>
import { ref } from 'vue';
import MyHeader from '../Molecules/MyHeader.vue';
import BurgerMenu from '../Organisms/BurgerMenu.vue';
import MainFour from '../Organisms/MainFour.vue';
import MainOne from '../Organisms/MainOne.vue';
import MainThree from '../Organisms/MainThree.vue';
import MainTwo from '../Organisms/MainTwo.vue';

const showMenu = ref(false)

const openMenu = (open) =>{ 
    showMenu.value = open
}
const closeMenu = (close) =>{
    showMenu.value = close
}
</script>

<style scoped>
.main {
    height: 647px;
    position: relative;
}
.close{ 
    display: none;
}
</style>