<template>
  <div id="container">
    <p>¿A dónde vas?</p>
    <input type="text"  class="redondeadonorelieve" id="search" placeholder="Ej. Bogotá"/>
    <p id="checks">CHEKC-IN</p>
    <Datepicker v-model="date" id="check-in"></Datepicker>
    <p id="checks">CHEKC-OUT</p>
    <Datepicker v-model="date2" id="check-out"></Datepicker>
    <button type="submit" id="button">Buscar</button>
  </div>
</template>

<script>
import Datepicker from 'vue3-date-time-picker'
export default {
  name: 'WhereYouGo',
  components: {
    Datepicker
  },
  data () {
    return {
      date: null,
      date2: null
    }
  }
}
</script>

<style scoped>
#container {
  margin-top: 10px;
  border: 2px solid black;
  overflow: hidden;
  padding: 5px;
  border-radius: 12px;
}

#checks {
  display: inline-block;
  margin-left: 4px;
  margin-right: 4px;
}

#check-in {
  width: 15%;
  display: inline-block;
}

#check-out {
  width: 15%;
  display: inline-block;
}

#button {
  font-size: 20px;
  margin-left: 10px;
  background-color: #ffb703;
  border-radius: 5px;
}

p {
  font-size: 20px;
}
.redondeadonorelieve {
   font-size: 20px;
   border-radius: 4px;
   border: 1px solid rgb(78, 165, 209);
 }
</style>
