<template>
  <div id="signup">
    <p id="signup-title">Registro</p>
    <input type="text" id="name" placeholder="* Nombres">
    <input type="text" id="last-name" placeholder="* Apellidos">
    <input type="email" id="email" placeholder="* Correo electrónico">
    <input type="password" id="password" placeholder="* Contraseña">
    <button type="submit" id="signup-button">Registrarse</button>
    <p>Todos los campos con * son obligatorios.</p>
  </div>
</template>

<script>
export default {
  name: 'SignUpView'
}
</script>

<style scoped>
#signup {
    margin-top: 10px;
    border: 1px solid black;
    margin-left: 280px;
    margin-right: 280px;
    display: grid;
}

#signup-title {
    font-size: 30px;
    font-weight: bold;
    color: #2c3e50;
}

#signup-button {
    font-size: 20px;
    margin-top: 10px;
    margin-right: 10px;
    background-color: #ffb703;
    border-radius: 5px;
}
</style>
