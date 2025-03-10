<template>
  <div class="test__one">
    <h2>Ваш пол:</h2>
    <div class="test__one__answer">
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-1"
          type="radio"
          name="radio"
          value="Наслаждаться
каждой минутой 
проведенного времени"
          v-model="test9"
        />
        <label style="text-align: left; height: 78px" for="radio-1"
          >Наслаждаться<br />
          каждой минутой<br />
          проведенного времени</label
        >
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-2"
          type="radio"
          name="radio"
          value="Быть устремленными 
мыслями в будущее"
          v-model="test9"
        />
        <label style="height: 78px" for="radio-2"
          >Быть устремленным<br />
          мыслями в будущее</label
        >
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-3"
          type="radio"
          name="radio"
          value="Учитывать в ежедневной 
практике прошлый опыт"
          v-model="test9"
        />
        <label for="radio-3"
          >Учитывать в ежедневной<br />
          практике прошлый опыт</label
        >
      </div>
    </div>
    <RouterLink to="/test/10">
      <MyButton :checked="test9">
        Далее
      </MyButton>
    </RouterLink>
  </div>
</template>

<script setup>
import {onMounted, ref,watch } from "vue";
import { RouterLink } from "vue-router";
import MyButton from '../../Molecules/MyButton.vue'

const test9 = ref(null);
const percent = 81.9
const emit = defineEmits(['setPercent'])
onMounted(() =>{ 
    emit('setPercent', percent)
})
watch(test9,(newValTest9) => {
  localStorage.setItem('test9',newValTest9)
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
  align-items: center;
}
.test__one label {
  font-size: 20px;
  text-align: left;
}
</style>
