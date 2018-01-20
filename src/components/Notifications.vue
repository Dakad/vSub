<template>
  <div class="notifications" v-if="isLoading()">
    <div :class="['flash-msg', notif.type, isLoading]">
      <span class="btn close">&times;</span>
      <span v-if="!notif.title"  class="icon fa fa-info-circle fa-lg"></span>
      <h2 v-if="notif.title" class="title">{{notif.title}}</h2>
      <span class="msg">{{notif.msg}}</span>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  
  export default {
    data (){
      return {
        notif : {
            type : 'alert',
            title : 'Test',
            msg : 'lorem'
        } 
      }
    },
    beforeMount() {
      this.$bus.$on('FLASH_MSG',this.getNotif)
    },
    computed : {
      
    },
    methods : {
      ... mapGetters(['isLoading','getNotif']),
      
    },
    
    beforeDestroy() {
      this.notif = null;
      
    }
  }

</script>
