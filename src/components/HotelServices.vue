<template>
  <p id="hotel-services-title">Servicios</p>
  <div id="hotel-services">
    <p id="services-include">Servicios Incluidos:</p>
    <div id="services-include-form">
        <p id="s-elevator">Ascensor</p>
        <p id="s-parking">Estacionamiento</p>
        <p id="s-gym">Gimnasio</p>
    </div>
    <p id="services-extra">Servicios con cargo extra:</p>
    <div id="services-extra-form">
        <p id="s-business">Centro de negocios</p>
        <p id="s-events">Salon de eventos</p>
        <p id="s-jacuzzi">Jacuzzi</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotelServices'
}
</script>

<style scoped>
#hotel-services-title {
    font-size: 30px;
    font-weight: bold;
    color: #2c3e50;
}

#services-include, #services-extra {
    font-size: 15px;
    font-weight: bold;
}

#services-include-form, #services-extra-form {
    text-align: initial;
}

#s-elevator, #s-parking, #s-gym, #s-business, #s-events, #s-jacuzzi {
    color: #000000;
}

</style>
