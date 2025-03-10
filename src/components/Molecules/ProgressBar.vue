<template>
    <div id="myProgress">
  <div id="myBar" :style="'width:' + percent + '%'"></div>
</div>
</template>

<script setup>
defineProps({
  percent:{
    type:Number,
    default:10
  }
})
</script>

<style scoped>
#myProgress {
  width: 100%;
  background-color: grey;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  margin-top: 10px;
}

#myBar {
  height: 15px;
  background-color: rgba(59, 222, 124, 1);
  border-radius: 10px;
}

</style>