<template>
  <div id="container-card">
    <div id="nav-image">
      <img alt="Hotel 1" src="../assets/hotel1.jpg">
    </div>
    <div id="information-card">
      <h3>Titulo hotel </h3>
      <h5>Ciudad hotel</h5>
      <h5>Dirección hotel</h5>
      <h5>Puntuación hotel</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotelCard'
}
</script>

<style scoped>
#container-card{
    height: 150px;
    border: 1px solid black;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 5px;
    display: flex;
    align-items: center;
}

#container-card p {
    display: inline-block;
}

#nav-image {
    margin-top: 20px;
    margin-right: 20px;
    margin-left: 20px;
}

#nav-image img {
    width: 120px;
    height: 120px;
}

#information-card {
    display: block;
}
</style>
