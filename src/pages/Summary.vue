<template>
  <transition>
    <section class="summary">
      <header class="summary_header" v-if="filterSummaryList.length > 7">
        <h1>Summary of dropped files</h1>
        <div class="search_box" >
          <hr>
          <summary-search v-if="filterSummaryList.length > 7" 
                          @search="searchMe" 
                          placeholder="Filter on name" 
          > </summary-search>
        </div>
      </header>
      
      <ul class="summary_list">
        <template v-for="(summary,index) in filterSummaryList">
          <item-line :item="summary" :key="index"
            @cast="castVid" @play="playVid" @getSubtitle="fetchSubs(summary.hash,summary.hasSub)"
          >
            <subs v-if="displaySubTabs" slot="subs" :vid="summary.hash"> </subs>
          </item-line>
        </template>
      </ul>
    </section>
    
    
  </transition>

</template>

<script>
  import mocks from './mock-summary-list'
  import { mapActions, mapGetters } from 'vuex'

  import {Search, ItemLine} from '../components/summary/'
  import { 
    FETCH_SUB,
  } from '../store/types'

  export default {
    name: 'summary',
    components : {
      ItemLine,
      'SummarySearch' : Search
    },
    props: [],
    data (){
      return {
        searchTerm : '',
        displaySubTabs : false
        
      }
    },
    computed : {
      filterSummaryList(){
        return this.$store.getters.getSummaryList(this.searchTerm)
      },
      
    },
    
    methods : {
      // ...mapActions(['fetchSubtitles']),
      searchMe (vid){
        this.searchTerm = vid
        console.log(`Search for : '${vid}'`);
      },
      fetchSubs(vidHash, hasSub){
        // console.log(`Fetch subs for : '${vidHash}'`)
        if(!hasSub)
          this.$store.dispatch('fetchSubtitles',vidHash)
                    .then(_ => this.$bus.$emit('FINISH_FETCHING', vidHash))
                    .then(_ => this.displaySubTabs = true)
        else
          this.displaySubTabs = !this.displaySubTabs
      },
      castVid(vidHash){
        console.log(`Cast vid hash : '${vidHash}'`);
      },
      playVid(vidHash){
        console.log(`Play vid hash : '${vidHash}'`);
      },
    },
    
  }
</script>
