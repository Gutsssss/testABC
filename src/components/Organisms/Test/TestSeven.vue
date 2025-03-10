<template>
  <div class="test__one">
    <h2>Какой из городов лишний?</h2>
    <div class="test__one__answer">
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-1"
          type="radio"
          name="radio"
          value="Вашингтон"
          v-model="test7"
        />
        <label for="radio-1">Вашингтон</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-2"
          type="radio"
          name="radio"
          value="Лондон"
          v-model="test7"
        />
        <label for="radio-2">Лондон</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-3"
          type="radio"
          name="radio"
          value="Париж"
          v-model="test7"
        />
        <label for="radio-3">Париж</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-4"
          type="radio"
          name="radio"
          value="Нью-Йорк"
          v-model="test7"
        />
        <label for="radio-4">Нью-Йорк</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-5"
          type="radio"
          name="radio"
          value="Москва"
          v-model="test7"
        />
        <label for="radio-5">Москва</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-6"
          type="radio"
          name="radio"
          value="Оттава"
          v-model="test7"
        />
        <label for="radio-6">Оттава</label>
      </div>
    </div>
    <RouterLink to="/test/8">
      <MyButton :checked="test7">
        Далее
      </MyButton>
    </RouterLink>
  </div>
</template>

<script setup>
import { onMounted, ref,watch } from "vue";
import { RouterLink } from "vue-router";
import MyButton from '../../Molecules/MyButton.vue'

const test7 = ref(null);
const percent = 63.7;
const emit = defineEmits(["setPercent"]);
onMounted(() => {
  emit("setPercent", percent);
});
watch(test7,(newValTest7) => {
  localStorage.setItem('test7',newValTest7)
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
