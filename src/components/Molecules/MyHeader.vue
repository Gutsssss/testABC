<template>
    <div class="header">
        <button @click="openMenu" class="header__button">
        <img src="../../assets/burger.svg"/>
        </button>
        <div v-if="test" style="display: flex; flex-direction:row;align-items: center;gap:10px">
            <img style="width: 48px; height:48px" src="../../assets/rain_bk3.svg"/>
            <p style="color:rgba(255, 199, 0, 1);text-transform: uppercase;font-size:18px;margin:0">{{ test }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    test:{
        type:String,
        default:''
    }
})
const emit = defineEmits(['openMenu'])
const openMenu = () =>{
    emit('openMenu',true)
}
</script>

<style scoped>
.header {
    height: 46px;
    background:rgba(24, 24, 24, 1) ;
    display: flex;
    align-items: center;
    position: relative;
}
.header img {
    padding-left: 15px;
}
.header__button {
    background: none;
    border: none;
}
</style>