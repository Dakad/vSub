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
        <template v-for="dropped in filterList">
          <item-line :item="dropped" > </item-line>
        </template>
      </ul>
    </section>
    
    
  </transition>

</template>

<script>
  import mocks from './mock-summary-list'
  import {Search, ItemLine} from '../components/summary/'

  export default {
    name: 'summary',
    components : {
      ItemLine,
      'SummarySearch' : Search
    },
    props: [],
    
    computed : {
      filterList : () =>  mocks,
      
    },
    
    methods : {
      searchMe (vid){
        console.log('/*v-if="filterList.length > 7"*/');
        console.log(`Search for : '${vid}'`);
      },
    },
    
  }
</script>
