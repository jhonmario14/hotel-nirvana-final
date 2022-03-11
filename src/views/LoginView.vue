<template>
  <div id="login">
    <p id="login-title">Login</p>
    <div id="login-form">
      <p id="login-user">Usuario</p>
      <input type="text" id="username" />
      <p id="login-pass">Contraseña</p>
      <input type="password" id="username" />
      <p>Cuanto es 2 + 2</p>
      <input type="text" id="captcha-answer" />
    </div>
    <button type="submit" id="login-button">Iniciar Sesión</button>
    <router-link to="/forgot-password">Recuperar Contraseña</router-link>
  </div>
</template>

<script>
export default {
  name: 'LoginView'
}
</script>

<style scoped>
#login {
  border: 1px solid black;
  margin-top: 40px;
  margin-left: 80px;
  margin-right: 80px;
}

#login-title {
  font-size: 30px;
  font-weight: bold;
  color: #2c3e50;
}

#login-form {
  /* border: 1px solid black; */
  display: block;
}

#login-button {
  font-size: 20px;
  margin-top: 10px;
  margin-right: 10px;
  background-color: #ffb703;
  border-radius: 5px;
}

#login-user, #login-pass {
    font-weight: bold;
}
</style>
