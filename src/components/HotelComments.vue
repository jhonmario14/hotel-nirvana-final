<template>
  <p id="hotel-comments-title">Comentarios</p>
  <div id="hotel-comments">
        <textarea cols="30" rows="5">"Excelente experiencia,volveremos"</textarea>
        <textarea cols="30" rows="5">"Buen servicio, sector seguro y cerca de centros comerciales, la piscina no es tan grande."</textarea>
        <textarea cols="30" rows="5">"La habitación muy cómoda y el desayuno super rico"</textarea>
        <textarea cols="30" rows="5">¡Dejanos un comentario!</textarea><br>
        <button type="submit" id="b-comment">Publicar!</button>
  </div>
</template>

<script>
export default {
  name: 'HotelComments'
}
</script>

<style scoped>
#hotel-comments-title {
    font-size: 30px;
    font-weight: bold;
    color: #2c3e50;
}
textarea {
    font-size: 1em;
    width: 30%;
    height: 8em;
}

</style>
