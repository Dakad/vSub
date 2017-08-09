<template>
  <div id="app">
    <div class="view">
      <loader> </loader>
        <!-- route outlet : component matched by the route will render here -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Loader from './components/Loader.vue'
  
  export default {
    name: 'app',
    components: { 
      Loader
    }
  }
</script>

