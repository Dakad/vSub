// Inpired from https://github.com/zhangxiang958/vue-tab
// Tabs Design from https://codepen.io/oknoblich/full/tfjFl

<template>
  <div>
  <tabs>
    <tab-item  v-for=" lang in fetchLangSubtitlesList" :name="langs[lang]" :hash="lang">
      <sub-item v-for=" sub in getFetchedSubList(lang)" :sub="sub"> </sub-item>
    </tab-item>
  </tabs>
  </div>
</template> 


<script>
  import { mapGetters } from 'vuex'
  
  export default {
    name : 'tab',
    props : {
      vid: {
        required: true
      }
      
    },
    data (){
      return {
        isActive : false,
      }
    },
    created () {
      
    },
    mounted () {

    },
    computed : {
      ... mapGetters(['langs']),
      
      fetchLangSubtitlesList (){
        return this.$store.getters.getFetchedSubLangs(this.vid)
      },
    },
    
    methods : {
      getFetchedSubList (lang) {
      const {getFetchedSubs} = this.$store.getters
        return getFetchedSubs(this.vid, lang)
      }
    }
  }

</script>
