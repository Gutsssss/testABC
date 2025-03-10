<template>
  <div class="test__one">
    <h2>Выберите правильную фигуру из четырёх пронумерованных.</h2>
    <img style="width: 228px" src="../../../assets/test_11.svg" />
    <div class="test__one__answer">
      <div style="display: flex; gap: 40px" class="form_radio1">
        <input
          class="form_radio1"
          id="radio-1"
          type="radio"
          name="radio"
          value="34"
          v-model="test11"
        />
        <label for="radio-1">34</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio1">
        <input
          class="form_radio1"
          id="radio-2"
          type="radio"
          name="radio"
          value="36"
          v-model="test11"
        />
        <label for="radio-2">36</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio1">
        <input
          class="form_radio1"
          id="radio-3"
          type="radio"
          name="radio"
          value="53"
          v-model="test11"
        />
        <label for="radio-3">53</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio1">
        <input
          class="form_radio1"
          id="radio-4"
          type="radio"
          name="radio"
          value="44"
          v-model="test11"
        />
        <label for="radio-4">44</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio1">
        <input
          class="form_radio1"
          id="radio-5"
          type="radio"
          name="radio"
          value="66"
          v-model="test11"
        />
        <label for="radio-5">66</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio1">
        <input
          class="form_radio1"
          id="radio-6"
          type="radio"
          name="radio"
          value="42"
          v-model="test11"
        />
        <label for="radio-6">42</label>
      </div>
    </div>
    <RouterLink to="/test/final">
      <MyButton :checked="test11">
        Далее
      </MyButton>
    </RouterLink>
  </div>
</template>

<script setup>
import {onMounted, ref,watch } from "vue";
import { RouterLink } from "vue-router";
import MyButton from '../../Molecules/MyButton.vue'

const test11 = ref(null);
const percent = 100;
const emit = defineEmits(["setPercent"]);
onMounted(() => {
  emit("setPercent", percent);
});
watch(test11,(newValTest11) => {
  localStorage.setItem('test11',newValTest11)
})
</script>

<style scoped>
.test__one {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.test__one__answer {
  display: grid;
  grid-template-columns: repeat(6, 60px);
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
