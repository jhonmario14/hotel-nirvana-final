<template>
  <p id="hotel-rooms-title">Habitaciones</p>
  <div id="hotel-rooms">
    <table class="default">
      <tr>
        <td>Tipo de Habitacion</td>
        <td>Capacidad</td>
        <td>Seleccionar Habitaciones</td>
        <td>Precio:</td>
      </tr>
      <tr>
        <td>
          <p id="hotel-type">Habitación Doble Superior - 1 o 2 camas</p>
          <p>Cama doble o individual</p>
          <p>Caja fuerte</p>
          <p>Suelo de madera</p>
          <p>Toallas</p>
          <p>Articulos de aseo gratis</p>
        </td>
        <td>Dos personas</td>
        <td>
          <select name="menu">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </td>
        <td>COP 111.959</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HotelRooms'
}
</script>

<style scoped>
#hotel-rooms-title {
    font-size: 30px;
    font-weight: bold;
    color: #2c3e50;
}
#hotel-type {
    font-size: 15px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: underline;
}
table {
   width: 100%;
   border: 1px solid #000;
}
th, td {
   width: 25%;
   text-align: left;
   vertical-align: top;
   border: 1px solid #000;
   border-collapse: collapse;
   padding: 0.3em;
}
p, td {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}

</style>
