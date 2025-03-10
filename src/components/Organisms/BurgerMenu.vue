<template>
    <div v-if="show" class="main__menu">
        <button class="main__menu_closeBtn" @click="closeMenu"><img src="../../assets/close_btn.svg"/></button>
        <ul>
            <RouterLink to="/" style="text-decoration: none;">
            <li>главная</li>
            </RouterLink>
            <li>Информация о тесте</li>
            <RouterLink to="/test/1" style="text-decoration: none;">
            <li>Пройти тест</li>
            </RouterLink>
        </ul>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    show:Boolean,
    default:false
})
const emit = defineEmits(['closeMenu'])
const closeMenu = () =>{
    emit('closeMenu',false)
}
</script>

<style scoped>
.main__menu {
    height: 375px;
    background: black;
    position: relative;
}
ul li {
    text-transform: uppercase;
    font-size: 20px;
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    list-style:none;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    cursor: pointer;
}
ul li:hover {
    color: rgba(255, 199, 0, 1);
}
.main__menu_closeBtn {
    background: none;
    border: none;
    margin: 10px;
}
.main__menu_closeBtn img {
    position: absolute;
    right: 20px;
}
</style>