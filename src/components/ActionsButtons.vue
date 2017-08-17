<template>
  <span class="actions">
      <span v-if="hasSub" class="btn cast fa fa-rss" 
                          @click="$emit('cast', hash)"></span>
                          
      <span v-if="hasSub" class="btn play fa fa-play" 
                          @click="$emit('play', hash)"></span>
                          
      <router-link class="btn info fa fa-info-circle" 
                   v-if="$route.name !== 'details'"
                   :to="'/summary/'+hash" :title="'Details on '+ name">
      </router-link>
      <span :class="['btn sub fa', isFetching ? 'fa-spinner fa-spin' :'fa-file-text']" 
            @click="clickOnFetchSubs"></span>
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
    
    data () {
      return {
        isFetching : false
      }
    },
    created () {
    },
    mounted () {
      this.$bus.$on('FINISH_FETCHING', (hash) => {
        console.log(hash, this.hash);
        if(hash == this.hash)
          this.isFetching = false
      })
    },
    computed : {
      
    },
    methods : {
      clickOnFetchSubs (){
        if(!this.hasSub)
          this.isFetching = true
        this.$emit('fetchSubtitle', this.hash)
      }
    },
    
    beforeDestroy(){
      this.$off('FINISH_FETCHING')
    },

  }

</script>
