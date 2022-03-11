<template>
  <nav>
    <router-link to="/">
      <div id="nav-image">
        <img alt="Logo hotel" src="./assets/logo-hotel.png">
      </div>
    </router-link>
    <div id="nav-links">
      <router-link to="/login">Iniciar Sesión</router-link>
      <router-link to="/signup">Registrarme</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav-links {
  float: right;
  margin-top: 20px;
}

#nav-image {
  float: left;
}

#nav-image img {
  width: 100px;
  height: 100px;
  margin-top: -20px;
}

nav {
  padding: 30px;
  background-color: #023047;
  overflow: hidden;
  height: 50px;
}

nav a {
  font-weight: bold;
  padding: 5px;
  color: #219ebc;
}

nav a.router-link-exact-active {
  color: #8ecae6;
}
</style>
