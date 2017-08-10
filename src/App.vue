<template>
  <main id="app">
    <loader> </loader>
  
    <navbar> </navbar>
    
    <!-- Component matched by route get rendered here -->
    <router-view id="content"></router-view>
  
  </main>
</template>

<script>
  import Loader from './components/Loader.vue'
  import Navbar from './components/Navbar.vue'
  
  export default {
    name: 'app',
    components: { 
      Loader,
      Navbar
    }
  }
</script>

