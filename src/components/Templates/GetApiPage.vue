<template>
    <div id="app">
    <div v-if="loading">Загрузка...</div>
    <div v-if="error">{{ error }}</div>

    <h2>Личная информация:</h2>
    <p>Имя: {{ character?.name }}</p>
    <p>Рост: {{ character?.height }} см</p>
    <p>Масса: {{ character?.mass }} кг</p>
    <p>Цвет волос: {{ character?.hair_color }}</p>
    <p>Цвет кожи: {{ character?.skin_color }}</p>
    <p>Цвет глаз: {{ character?.eye_color }}</p>
    <p>Год рождения: {{ character?.birth_year }}</p>
    <p>Пол: {{ character?.gender }}</p>

    <h2>Дом:</h2>
    <p v-if="homeworld">{{ homeworld?.name }}</p>

    <h2>Фильмы:</h2>
    <ul>
      <li v-for="film in films" :key="film.url">{{ film?.title }}</li>
    </ul>

    <h2>Транспортные средства:</h2>
    <ul>
      <li v-for="vehicle in vehicles" :key="vehicle.url">{{ vehicle?.name }}</li>
    </ul>

    <h2>Звездолеты:</h2>
    <ul>
      <li v-for="starship in starships" :key="starship.url">{{ starship?.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios';
const character = ref(null);
    const homeworld = ref(null);
    const films = ref([]);
    const vehicles = ref([]);
    const starships = ref([]);
    const loading = ref(true);
    const error = ref(null);
const fetchCharacterData = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/1/');
        character.value = response.data;
        
        const homeworldResponse = await axios.get(character.value.homeworld);
        homeworld.value = homeworldResponse.data;

        const filmRequests = character.value.films.map(film => axios.get(film));
        const vehicleRequests = character.value.vehicles.map(vehicle => axios.get(vehicle));
        const starshipRequests = character.value.starships.map(starship => axios.get(starship));

        const filmResponses = await Promise.all(filmRequests);
        films.value = filmResponses.map(filmResponse => filmResponse.data);

        const vehicleResponses = await Promise.all(vehicleRequests);
        vehicles.value = vehicleResponses.map(vehicleResponse => vehicleResponse.data);

        const starshipResponses = await Promise.all(starshipRequests);
        starships.value = starshipResponses.map(starshipResponse => starshipResponse.data);
      } catch (err) {
        error.value = 'Ошибка при загрузке данных: ' + err.message;
      } finally {
        loading.value = false;
      }
    };
onMounted(() => {
    fetchCharacterData()
})
</script>

<style scoped>

</style>