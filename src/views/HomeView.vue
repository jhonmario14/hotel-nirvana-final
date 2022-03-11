<template>
  <div class="home">
    <WhereYouGo/>
    <ListHotels/>
  </div>
</template>

<script>
// @ is an alias to /src
import WhereYouGo from '@/components/WhereYouGo.vue'
import ListHotels from '@/components/ListHotels.vue'

export default {
  name: 'HomeView',
  components: {
    WhereYouGo,
    ListHotels
  }
}
</script>
