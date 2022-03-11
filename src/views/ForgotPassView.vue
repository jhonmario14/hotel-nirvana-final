<template>
<div id="forgot-pass-form">
  <p id="forgot-pass-title">Recuperar Contraseña</p>
  <p>Reestablece tu contraseña mediante el correo electronico:</p>
  <p id="forgot-pass-email">Correo electronico:</p>
  <input type="text" id="email">
</div>
  <button type="submit" id="forgot-pass-button">Enviar</button>
</template>

<script>
export default {
  name: 'ForgotPassView'
}
</script>

<style scoped>
#forgot-pass-form {
    margin-top: 20px;
    border: 1px solid black;
}
#forgot-pass-title {
    font-size: 30px;
    font-weight: bold;
    color: #2c3e50;
}

#forgot-pass-email {
    display: inline-block;
    margin-right: 5px;
}

#forgot-pass-button {
    margin-top: 10px;
    font-size: 20px;
    margin-right: 10px;
    background-color: #ffb703;
    border-radius: 5px;
}
</style>
