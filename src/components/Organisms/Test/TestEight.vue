<template>
  <div class="test__one">
    <h2>Выберите правильную фигуру из четырёх пронумерованных.</h2>
    <img style="width: 185px;" src="../../../assets/test_7.svg"/>
    <div class="test__one__answer">
      <div style="display: flex; gap: 40px" class="form_radio1">
        <input
          class="form_radio1"
          id="radio-1"
          type="radio"
          name="radio"
          value="1"
          v-model="test8"
        />
        <label for="radio-1">1</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio1">
        <input
          class="form_radio1"
          id="radio-2"
          type="radio"
          name="radio"
          value="2"
          v-model="test8"
        />
        <label for="radio-2">2</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio1">
        <input
          class="form_radio1"
          id="radio-3"
          type="radio"
          name="radio"
          value="3"
          v-model="test8"
        />
        <label for="radio-3">3</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio1">
        <input
          class="form_radio1"
          id="radio-4"
          type="radio"
          name="radio"
          value="4"
          v-model="test8"
        />
        <label for="radio-4">4</label>
      </div>
    </div>
    <RouterLink to="/test/9">
      <MyButton :checked="test8">
        Далее
      </MyButton>
    </RouterLink>
  </div>
</template>

<script setup>
import {onMounted, ref,watch } from "vue";
import { RouterLink } from "vue-router";
import MyButton from '../../Molecules/MyButton.vue'

const test8 = ref(null);
const percent = 72.8;
const emit = defineEmits(["setPercent"]);
onMounted(() => {
  emit("setPercent", percent);
});
watch(test8,(newValTest8) => {
  localStorage.setItem('test8',newValTest8)
})
</script>

<style scoped>
.test__one {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.test__one__answer {
  display: grid;
  grid-template-columns: repeat(4, 90px);
  justify-items: center;
  justify-content: center;
  margin-top: 23px;
}
.form_radio1 {
  margin-bottom: 10px;
}
.form_radio1 input[type="radio"] {
  display: none;
}
.form_radio1 label {
  display: flex;
  text-align: center;
  cursor: pointer;
  position: relative;
  margin-right: 0;
  width: 45px;
  height: 45px;
  background-color: white;
  line-height: 18px;
  font-size: 20px;
  user-select: none;
  color: black;
  justify-content: center;
  align-items: center;
  margin: 40px;
}
.form_radio1 label:before {
  content: "";
  display: inline-block;
  background: none;
  width: 45px;
  height: 45px;
  position: absolute;
  color: black;
}
.form_radio1 input[type="radio"]:checked + label:before {
  border: 6px solid rgba(255, 199, 0, 1);
}
</style>
