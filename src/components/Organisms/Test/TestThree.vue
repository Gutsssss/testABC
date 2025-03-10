<template>
  <div class="test__one">
    <h2>Выберете лишнее:</h2>
    <div class="test__one__answer">
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-1"
          type="radio"
          name="radio"
          value="Дом"
          v-model="test3"
        />
        <label for="radio-1">Дом</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-2"
          type="radio"
          name="radio"
          value="Шалаш"
          v-model="test3"
        />
        <label for="radio-2">Шалаш</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-3"
          type="radio"
          name="radio"
          value="Бунгало"
          v-model="test3"
        />
        <label for="radio-3">Бунгало</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-4"
          type="radio"
          name="radio"
          value="Скамейка"
          v-model="test3"
        />
        <label for="radio-4">Скамейка</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-5"
          type="radio"
          name="radio"
          value="Хижина"
          v-model="test3"
        />
        <label for="radio-5">Хижина</label>
      </div>
    </div>
    <RouterLink to="/test/4">
      <MyButton :checked="test3">
        Далее
      </MyButton>
    </RouterLink>
  </div>
</template>

<script setup>
import {onMounted, ref,watch } from "vue";
import { RouterLink } from "vue-router";
import MyButton from '../../Molecules/MyButton.vue'

const test3 = ref(null);
const percent = 27.3;
const emit = defineEmits(["setPercent"]);
onMounted(() => {
  emit("setPercent", percent);
});
watch(test3,(newValTest3) => {
  localStorage.setItem('test3',newValTest3)
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
</style>
