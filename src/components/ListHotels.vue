<template>
  <div id="container">
    <p id="hotels-title">Hoteles</p>
    <router-link to="/hotel">
      <HotelCard />
    </router-link>
    <HotelCard />
    <HotelCard />
  </div>
</template>

<script>
import HotelCard from './HotelCard.vue'

export default {
  name: 'ListHotels',
  components: {
    HotelCard
  }
}
</script>

<style scoped>
#container {
  border: 2px solid black;
  border-radius: 12px;
  margin-top: 10px;
}

#hotels-title {
  font-size: 30px;
  font-weight: bold;
  color: #219ebc;
}

a {
  text-decoration: none;
}
</style>
