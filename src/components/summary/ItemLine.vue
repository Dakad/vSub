<template>
  <li :class="['item', {checked:item.hasSub}]">
    <router-link class="vid"  :to="'/summary/'+item.hash" :title="'Details on '+item.name">
      {{item.name}}&nbsp;
      <span v-if="item.kind == 'movie'">({{item.year}})</span>
      <span v-else>S{{item.season}}E{{item.episode}}</span>
      </span>
    </router-link>
    <actions-buttons :hash="item.hash" :hasSub="item.hasSub"
        @cast="$emit('cast', item.hash)" 
        @play="$emit('play', item.hash)" 
        @fetchSubtitle="$emit('getSubtitle', item.hash)"
        @downloadSubtitle="$emit('downloadSubtitle', item.hash)"
    >
    </actions-buttons>
  </li>
</template>

<script>
  import { mapGetters } from 'vuex'
  
  export default {
    name: 'item-line',
    props: ['item'],
    
    computed : {
      // ... mapGetters(['hasSub'])
    }
  }
</script>
