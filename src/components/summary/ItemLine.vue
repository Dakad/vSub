<template>
  <li :class="['item', {checked:item.hasSub}]">
    <router-link class="vid"  :to="'/summary/'+item.hash" :title="'Details on '+item.name">
      {{item.name}}&nbsp;
      <span v-if="item.kind == 'movie'">({{item.year}})</span>
      <span v-else>S{{item.season}}E{{item.episode}}</span>
      </span>
    </router-link>
    <span class="actions">
      <span v-if="item.hasSub" class="btn cast fa fa-rss" @click="$emit('cast', item.hash)"></span>
      <span v-if="item.hasSub" class="btn play fa fa-play" @click="$emit('play', item.hash)"></span>
      <router-link class="btn info fa fa-info-circle" 
                   v-if="item.hasSub"
                   :to="'/summary/'+item.hash" :title="'Details on '+item.name">
      </router-link>
      <span :class="['btn sub fa fa-file-text']" @click="$emit('getSubtitle', item.hash)"></span>
    </span>
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
