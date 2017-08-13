<template>
  <transition>
    <section class="summary">
      <header class="summary_header">
        <h1>Summary of dropped files</h1>
        <div class="search_box" >
          <hr>
          <summary-search @search="searchMe" placeholder="Filter on name" > </summary-search>
        </div>
      </header>
      <ul class="summary_list">
        <template v-for="(dropped,index) in filterSummaryList">
          <item-line :item="dropped" :key="index"
            @cast="castVid" @play="playVid" @getSubtitle="fetchSubtitles"
          ></item-line>
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
        searchTerm : ''
        
      }
    },
    computed : {
      filterSummaryList(){
        return this.$store.getters.getSummaryList(this.searchTerm)
      },
      
    },
    
    methods : {
      ...mapActions(['fetchSubtitles']),

      searchMe (vid){
        this.searchTerm = vid
        console.log('/*v-if="filterList.length > 7"*/');
        console.log(`Search for : '${vid}'`);
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
