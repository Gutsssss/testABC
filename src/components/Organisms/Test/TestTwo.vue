<template>
  <div class="test__one">
    <h2>Укажите ваш возраст:</h2>
    <div class="test__one__answer">
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-1"
          type="radio"
          name="radio"
          value="До 18"
          v-model="test2"
        />
        <label for="radio-1">До 18</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-2"
          type="radio"
          name="radio"
          value="От 18 до 28"
          v-model="test2"
        />
        <label for="radio-2">От 18 до 28</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-3"
          type="radio"
          name="radio"
          value="От 29 до 35"
          v-model="test2"
        />
        <label for="radio-3">От 29 до 35</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-4"
          type="radio"
          name="radio"
          value="От 36"
          v-model="test2"
        />
        <label for="radio-4">От 36</label>
      </div>
    </div>
    <RouterLink to="/test/3">
      <MyButton :checked="test2">
        Далее
      </MyButton>
    </RouterLink>
  </div>
</template>

<script setup>
import {onMounted, ref,watch } from "vue";
import { RouterLink } from "vue-router";
import MyButton from '../../Molecules/MyButton.vue'

const test2 = ref(null);
const percent = 18.2;
const emit = defineEmits(["setPercent"]);
onMounted(() => {
  emit("setPercent", percent);
});
watch(test2,(newValTest2) => {
  localStorage.setItem('test2',newValTest2)
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
