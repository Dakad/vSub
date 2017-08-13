<template>
  <span class="actions">
      <span v-if="hasSub" class="btn cast fa fa-rss" @click="$emit('cast', hash)"></span>
      <span v-if="hasSub" class="btn play fa fa-play" @click="$emit('play', hash)"></span>
      <router-link class="btn info fa fa-info-circle" 
                   v-if="$route.name !== 'details'"
                   :to="'/summary/'+hash" :title="'Details on '+name">
      </router-link>
      <span :class="['btn sub fa fa-file-text']" @click="$emit((hasSub ?'download' : 'fetch') +'Subtitle', hash)"></span>
    </span>
</template>

<script>
  import { mapGetters } from 'vuex'
  
  export default {
    props: {
      hash : {
        type : String,
        required : true
      },
      name : '',
      hasSub : false,
    },

  }

</script>
