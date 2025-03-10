<template>
  <div class="test__one">
    <h2>Выберите цвет, который сейчас наиболее Вам приятен:</h2>
    <div class="test__one__answer">
      <div style="display: flex; gap: 40px" class="form_radio1">
        <input
          class="form_radio1"
          id="radio-1"
          type="radio"
          name="radio"
          value="62"
          v-model="test5"
        />
        <label for="radio-1"></label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio1 blue">
        <input
          class="form_radio1"
          id="radio-2"
          type="radio"
          name="radio"
          value="blue"
          v-model="test5"
        />
        <label for="radio-2"></label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio1 green">
        <input
          class="form_radio1"
          id="radio-3"
          type="radio"
          name="radio"
          value="green"
          v-model="test5"
        />
        <label for="radio-3"></label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio1 red">
        <input
          class="form_radio1"
          id="radio-4"
          type="radio"
          name="radio"
          value="red"
          v-model="test5"
        />
        <label for="radio-4"></label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio1 yellow">
        <input
          class="form_radio1"
          id="radio-5"
          type="radio"
          name="radio"
          value="yellow"
          v-model="test5"
        />
        <label for="radio-5"></label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio1 brown">
        <input
          class="form_radio1"
          id="radio-6"
          type="radio"
          name="radio"
          value="brown"
          v-model="test5"
        />
        <label for="radio-6"></label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio1 black">
        <input
          class="form_radio1"
          id="radio-7"
          type="radio"
          name="radio"
          value="black"
          v-model="test5"
        />
        <label for="radio-7"></label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio1 pink">
        <input
          class="form_radio1"
          id="radio-8"
          type="radio"
          name="radio"
          value="pink"
          v-model="test5"
        />
        <label for="radio-8"></label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio1 lightBlue">
        <input
          class="form_radio1"
          id="radio-9"
          type="radio"
          name="radio"
          value="lightBlue"
          v-model="test5"
          style="background: blue;"
        />
        <label for="radio-9"></label>
      </div>
    </div>
    <RouterLink to="/test/6">
      <MyButton :checked="test5">
        Далее
      </MyButton>
    </RouterLink>
  </div>
</template>

<script setup>
import {onMounted, ref,watch } from "vue";
import { RouterLink } from "vue-router";
import MyButton from '../../Molecules/MyButton.vue'

const test5 = ref(null);
const percent = 45.5;
const emit = defineEmits(["setPercent"]);
onMounted(() => {
  emit("setPercent", percent);
});
watch(test5,(newValTest5) => {
  localStorage.setItem('test5',newValTest5)
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
  display: grid;
  grid-template-columns: repeat(3, 100px);
  justify-items: center;
  justify-content: center;
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
  line-height: 18px;
  user-select: none;
  color: white;
  justify-content: center;
  align-items: center;
  margin: 40px;
}
.form_radio1 label:before {
  content: "";
  display: inline-block;
  background: gray;
  width: 75px;
  height: 75px;
  position: absolute;
}
.form_radio1 input[type=radio]:checked + label:before {
	border: 6px solid rgba(255, 199, 0, 1);
}
.form_radio1 label:hover {
    background: rgba(255, 199, 0, 1);
    color: black;
}
.blue label:before {
  background: rgba(0, 0, 169, 1);
}
.green label:before {
  background: rgba(0, 167, 1, 1);
}
.red label:before {
  background: rgba(246, 1, 0, 1);
}
.yellow label:before {
  background: rgba(253, 255, 25, 1);
}
.brown label:before {
  background: rgba(169, 84, 3, 1);
}
.black label:before {
  background: rgba(0, 0, 0, 1);
}
.pink label:before {
  background: rgba(133, 0, 104, 1);
}
.lightBlue label:before {
  background: rgba(70, 178, 172, 1);
}
</style>
