<template>
  <div id="app">
    <div class="view">
      <dropzone></dropzone>
    </div>
  </div>
</template>

<script>
  import Dropzone from './pages/Dropzone.vue'
  
  export default {
    name: 'app',
    components: {
      Dropzone
    }
  }
</script>

