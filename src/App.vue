<template>
  <main id="app">
    <loader> </loader>
  
    <notifications></notifications>

    <navbar> </navbar>
    
    <!-- Component matched by route get rendered here -->
    <router-view id="content"></router-view>
  
  </main>
</template>

<script>
  import Loader from './components/Loader.vue'
  import Navbar from './components/Navbar.vue'
  import Notifications from './components/Notifications.vue'
  
  export default {
    name: 'app',
    components: { 
      Loader,
      Navbar,
      Notifications
    }
  }
</script>

