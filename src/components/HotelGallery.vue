<template>
  <p id="hotel-gallery-title">Galeria</p>
<div id="hotel-gallery">
  <img alt="Hotel gallery 1" src="../assets/hotel-gallery1.jpg">
  <img alt="Hotel gallery 2" src="../assets/hotel-gallery2.jpg">
  <img alt="Hotel gallery 3" src="../assets/hotel-gallery3.jpg">
  <img alt="Hotel gallery 1" src="../assets/hotel-gallery1.jpg">
  <img alt="Hotel gallery 2" src="../assets/hotel-gallery2.jpg">
  <img alt="Hotel gallery 3" src="../assets/hotel-gallery3.jpg">
  <img alt="Hotel gallery 1" src="../assets/hotel-gallery1.jpg">
  <img alt="Hotel gallery 2" src="../assets/hotel-gallery2.jpg">
  <img alt="Hotel gallery 3" src="../assets/hotel-gallery3.jpg">
  <img alt="Hotel gallery 1" src="../assets/hotel-gallery1.jpg">
  <img alt="Hotel gallery 2" src="../assets/hotel-gallery2.jpg">
  <img alt="Hotel gallery 3" src="../assets/hotel-gallery3.jpg">
  <img alt="Hotel gallery 1" src="../assets/hotel-gallery1.jpg">
  <img alt="Hotel gallery 2" src="../assets/hotel-gallery2.jpg">
  <img alt="Hotel gallery 3" src="../assets/hotel-gallery3.jpg">
</div>
</template>

<script>
export default {
  name: 'HotelGallery'
}
</script>

<style scoped>
#hotel-gallery-title {
    font-size: 30px;
    font-weight: bold;
    color: #2c3e50;
}

#hotel-gallery img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 5px;
    margin-left: 5px;
}
</style>
