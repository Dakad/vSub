<template>
  <div class="loader" v-if="isLoading">
    <div class="loader_bar"></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  
  export default {
    computed: mapGetters(['isLoading'])
  }

</script>
