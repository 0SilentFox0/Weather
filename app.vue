<template>
  <div class="container m-auto p-4">
    <h1 class="text-4xl font-bold text-blue mb-4">Weather app</h1>
    <div class="flex flex-col">
      <div class="flex gap-4">
        <div
          class="tab border-1 p-2"
          v-for="city in cities"
          :key="city"
          :class="{ 'bg-slate-400': currentCity === city }"
          @click="currentCity = city"
        >
          {{ city }}
        </div>
      </div>
      <div class="flex justify-between items-start bg-slate-400 p-6">
        <div class="flex flex-col" v-if="weather">
          <div class="flex items-center">
            {{ currentWeather.condition.text }}
            <img
              :src="currentWeather.condition.icon"
              alt=""
              width="40"
              height="44"
            />
          </div>
          <span>Average humidity {{ currentWeather.avghumidity }}%</span>
          <span>Max temprature {{ currentWeather.maxtemp_c }}°</span>
          <span>Min temprature {{ currentWeather.mintemp_c }}°</span>
        </div>
        <div class="calendar">
          <ClientOnly>
            <DatePicker
              mode="date"
              v-model="date"
              :available-dates="{
                start: new Date(),
                end: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000),
              }"
            />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { API_KEY } from "~~/constants";
import { DatePicker } from "v-calendar";
import { onUpdated } from "vue";
import { formatDate } from "@/helpers/dateFormat";
import "v-calendar/dist/style.css";

const cities = ["Tokio", "Kiev", "New York"];
const currentCity = ref(cities[0]);

const date = ref(new Date());
const weather = ref(null);

const getWeather = async () => {
  const { data } = await useLazyFetch(
    () => `forecast.json?key=${API_KEY}&q=${currentCity.value}&days=10&aqi=no&alerts=no
`,
    {
      baseURL: "http://api.weatherapi.com/v1/",
      pick: ["forecast"],
    }
  );
  weather.value = data.value.forecast.forecastday;
};

await getWeather();

const currentWeather = computed(() => {
  if (weather.value)
    return weather.value.find((day) => day.date === formatDate(date.value)).day;
});

onUpdated(async () => {
  await getWeather();
});
</script>

<style></style>
