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
      
      <tabs>
        <tab name="Onglish" hash="pop">
          <p>
           Dorum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper morbi tincidunt ornare massa eget egestas purus. Nec ullamcorper sit amet risus nullam eget. Justo eget magna fermentum iaculis eu non diam phasellus. us.
          </p>
        </tab>
        
        <tab name="Spanglish" hash="spang">
          <p>
            Orci eu lobortis elementum nibh tellus molestie nunc. Nunc aliquet bibendum enim facilisis. Volutpat blandit aliquam etiam erat velit. Turpis tincidunt id aliquet risus feugiat in ante metus. Sagittis orci a scelerisque purus semper eget duis at. Nisl rhoncus mattis rhoncus urna neque viverra. Faucibus nisl tincidunt eget nullam non nisi est. 
          </p>
          <p>
            Leo a diam sollicitudin tempor id eu. Amet purus gravida quis blandit turpis cursus in hac. Neque viverra justo nec ultrices dui. Felis donec et odio pellentesque diam volutpat commodo sed. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Nunc sed id semper risus in. Vitae purus faucibus ornare suspendisse sed nisi lacus.
          </p>
        </tab>
        
        <tab name="Tetsuo" hash="azerty">
          <h1>Yep, That works Beach !!! </h1>
        </tab>
      
      </tabs>
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
