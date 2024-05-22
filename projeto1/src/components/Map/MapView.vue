<template>
  <div class="map-wrap">
    <div class="map" ref="mapContainer"></div>
  </div>
  <button class="return-button" @click="$router.push('/')">Retornar</button>
</template>

<script setup>
import { Map, MapStyle, Marker, config } from '@maptiler/sdk';
import { ref, shallowRef, onMounted, onUnmounted, markRaw } from 'vue';
import { useRoute } from 'vue-router';
import '@maptiler/sdk/dist/maptiler-sdk.css';

const mapContainer = shallowRef(null);
const map = shallowRef(null);

const route = useRoute();

onMounted(() => {
  config.apiKey = '9FBkxdhAHfvtjOyUiDuk';

  // Ler as coordenadas dos parâmetros de consulta
  const lng = parseFloat(route.query.lng);
  const lat = parseFloat(route.query.lat);

  // Verificar se as coordenadas são válidas
  if (isNaN(lng) || isNaN(lat)) {
    console.error('Coordenadas inválidas.');
    return;
  }

  // Usar as coordenadas para o mapa
  const initialState = { lng, lat, zoom: 9 };
  map.value = markRaw(new Map({
    container: mapContainer.value,
    style: MapStyle.STREETS,
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom
  }));

  new Marker({color: "#FF0000"})
  .setLngLat([initialState.lng, initialState.lat])
  .addTo(map.value);
}),
onUnmounted(() => {
  map.value?.remove();
})
</script>

<style scoped>
.map-wrap {
  position: relative;
  width: 100%;
  height: calc(100vh - 77px); /* calculate height of the screen minus the heading */
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
}
.return-button {
  background-color: #0f4711; 
  border: none; 
  border-radius: 12px;
  color: white; 
  padding: 15px 32px; 
  text-align: center; 
  text-decoration: none; 
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer; 
  transition-duration: 0.4s;
}

.return-button:hover {
  background-color: rgba(81, 165, 55, 0.822);
  color: black;
}

</style>