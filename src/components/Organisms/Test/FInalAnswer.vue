<template>
    <div class="test__final">
        <p style="font-size: 20px;">Обработка резульататов</p>
        <MyLoader/>
        <p>Определение стиля мышления...........
            .......................................................</p>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import MyLoader from '../../Molecules/MyLoader.vue';
const percent = 100;
const router = useRouter()
const goToResult = () =>{ 
    setTimeout(() => {
        router.push({path:'/results'})
    },5000)
}
const emit = defineEmits(["setPercent"]);
onMounted(() => {
  emit("setPercent", percent);
  goToResult();
});

</script>

<style scoped>
.test__final {
    color: white;
    display: flex;
    align-items: center;
    gap: 40px;
    flex-direction: column;
}
</style>