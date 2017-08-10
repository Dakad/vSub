<template>
    <nav class="bar actions" id="navBar">
      <a v-if="false" href="javascript:void(0)" id='closeNav' class="btn_close" onclick="closeNav()">&times;</a>
      {{width}}
      <router-link class="item" v-for="[path, icon, label, isActive=false] in links" :to="path" 
                    active-class="active" :style="itemStyle" :show="isActive"
      >
        <i :class="['fa', 'fa-2x', icon]"></i>
      </router-link>
    </nav>
</template>

<script>
  import {mapGetters} from 'vuex'
  
  export default {
    name: 'navbar',
    data : _ => ({
    
    }),
    computed : {
      ... mapGetters(['hasSummary']),
      
      links (){
        return [
          ['/settings', 'fa-cog ', 'Settings'],
          ['/casted', 'fa-rss ', 'Cast'],
          ['/summary', 'fa-list-ul ', 'Summary', this.hasSummary],
          ['/drop', 'fa-download ', 'Drop'],
        ]
      },
    
      itemStyle (){
        return {
          width : `${(100 / this.links.length)}%`
        }
      }
    }

  }
</script>
