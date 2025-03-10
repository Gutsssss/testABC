<template>
  <div class="test__one">
    <h2>
      Какое определение, по-Вашему, больше подходит к этому геометрическому
      изображению:
    </h2>
    <img style="width: 173px;margin:15px" src="../../../assets/test_10.svg" />
    <div class="test__one__answer">
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-1"
          type="radio"
          name="radio"
          value="Оно остроконечное"
          v-model="test10"
        />
        <label style="text-align: left; height: 78px" for="radio-1"
          >Оно остроконечное</label
        >
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-2"
          type="radio"
          name="radio"
          value="Оно устойчиво"
          v-model="test10"
        />
        <label style="height: 78px" for="radio-2"
          >Оно устойчиво</label
        >
      </div>
      <div style="display: flex; gap: 40px" class="form_radio">
        <input
          class="form_radio"
          id="radio-3"
          type="radio"
          name="radio"
          value="Оно-находиться в состоянии равновесия"
          v-model="test10"
        />
        <label for="radio-3"
          >Оно-находиться в состоянии равновесия</label
        >
      </div>
    </div>
    <RouterLink to="/test/11">
      <MyButton :checked="test10">
        Далее
      </MyButton>
    </RouterLink>
  </div>
</template>

<script setup>
import { onMounted, ref,watch } from "vue";
import { RouterLink } from "vue-router";
import MyButton from '../../Molecules/MyButton.vue'

const test10 = ref(null);
const percent = 95
const emit = defineEmits(['setPercent'])
onMounted(() =>{ 
    emit('setPercent',percent)
})
watch(test10,(newValTest10) => {
  localStorage.setItem('test10',newValTest10)
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
.test__one label {
  font-size: 20px;
  text-align: center;
}
</style>
