<template>
  <p id="hotel-offerts-title">Ofertas</p>
  <div id="hotel-offerts">
    <p id="lowest-price">Nuestros precios más economicos:</p>
    <div id="lowest-price-form">
        <p id="normal-price">Precio de oferta:</p>
        <p id="normal-price-show">$111.959 / noche</p>

        <p id="free-charge-free-breakfast">Con cancelación gratuita y desayuno gratis: </p>
        <p id="free-charge-free-breakfast-show">$283.171 / noche</p>

        <p id="free-charge">Con cancelación gratuita</p>
        <p id="free-charge-show">$111.959 / noche</p>

        <p id="free-breakfast">Desayuno gratis</p>
        <p id="free-breakfast-show">$111.959 / noche</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotelOfferts'
}
</script>

<style scoped>
#hotel-offerts-title {
    font-size: 30px;
    font-weight: bold;
    color: #2c3e50;
}

#lowest-price {
    font-size: 20px;
    font-weight: bold;
}

#lowest-price-form {
    text-align: initial;
}

#normal-price, #free-charge-free-breakfast, #free-charge, #free-breakfast {
    color: #219ebc;
}

</style>
