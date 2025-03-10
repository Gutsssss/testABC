<template>
  <div class="test__one">
    <h2>Ваш пол:</h2>
    <div class="test__one__answer">
      <div style="display: flex;gap:40px" class="form_radio">
        <input  class="form_radio" id="radio-1" type="radio" name="radio" value="Мужчина" v-model="test1" />
        <label for="radio-1">Мужчина</label>
      </div>
      <div style="display: flex;gap:40px" class="form_radio">
        <input class="form_radio" id="radio-2" type="radio" name="radio" value="Женщина" v-model="test1" />
        <label for="radio-2">Женщина</label>
      </div>
    </div>
    <RouterLink to="/test/2">
      <MyButton :checked = test1>
        Далее
      </MyButton>
    </RouterLink>
  </div>
</template>

<script setup>
import {onMounted, ref, watch } from "vue";
import { RouterLink } from "vue-router";
import MyButton from '../../Molecules/MyButton.vue'

const test1 = ref(null);  
const percent = 9.1
const emit = defineEmits(['setPercent'])
onMounted(() =>{ 
    emit('setPercent', percent)
})
watch(test1,(newValTest1) => {
  localStorage.setItem('test1',newValTest1)
})
</script>

<style scoped>
.test__one {
  color: white;
  display: flex;
  flex-direction: column;
  gap: 50px;
}
.test__one__answer {
  display: flex;
  flex-direction: column;
  align-items: center
}
</style>
