<template>
    <button :disabled="checked===null" :class="{main__one_buttonActive:checked !== null,main__one_buttonUnactive:checked === null}">
        <slot/>
    </button>
</template>

<script setup>
defineProps({
   checked:{
    type: [null,String]
   } 
})

</script>

<style scoped>
.main__one_buttonActive {
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
.main__one_buttonUnactive {
    background:rgba(218, 218, 218, 1);
    color:rgba(142, 142, 142, 1);
    font-size: 20px;
    text-transform: uppercase;
    font-family: Merriwear;
    width: 189px;
    height: 41px;
    border-radius: 20px;
    border:0px;
}
</style>