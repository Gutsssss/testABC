<template>
  <div class="test__one">
    <h2>Продолжите числовой ряд: 18 20 24 32</h2>
    <div class="test__one__answer">
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-1"
          type="radio"
          name="radio"
          value="62"
          v-model="test4"
        />
        <label for="radio-1">62</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-2"
          type="radio"
          name="radio"
          value="48"
          v-model="test4"
        />
        <label for="radio-2">48</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-3"
          type="radio"
          name="radio"
          value="74"
          v-model="test4"
        />
        <label for="radio-3">74</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-4"
          type="radio"
          name="radio"
          value="57"
          v-model="test4"
        />
        <label for="radio-4">57</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-5"
          type="radio"
          name="radio"
          value="60"
          v-model="test4"
        />
        <label for="radio-5">60</label>
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-6"
          type="radio"
          name="radio"
          value="77"
          v-model="test4"
        />
        <label for="radio-6">77</label>
      </div>
    </div>
    <RouterLink to="/test/5">
      <MyButton :checked="test4">
        Далее
      </MyButton>
    </RouterLink>
  </div>
</template>

<script setup>
import { onMounted, ref,watch } from "vue";
import { RouterLink } from "vue-router";
import MyButton from '../../Molecules/MyButton.vue'

const test4 = ref(null);
const percent = 36.4;
const emit = defineEmits(["setPercent"]);
onMounted(() => {
  emit("setPercent", percent);
});
watch(test4,(newValTest4) => {
  localStorage.setItem('test4',newValTest4)
})
</script>

<style scoped>
.test__one {
  color: white;
  display: flex;
  gap: 50px;
  flex-direction: column;
  gap: 50px;
}
.test__one__answer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
