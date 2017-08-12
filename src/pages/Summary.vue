<template>
  <transition>
    <section>
      <header>
        <h1>Summary of dropped files</h1>
        <summary-search @search="searchMe"> </summary-search>
      </header>
      <ul class="summary">
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
        console.log(`Search for : '${vid}'`);
      },
    },
    
  }
</script>
