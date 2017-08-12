<template>
  <li :class="['item', {checked:item.hasSub}]">
    <router-link class="vid"  :to="'/summary/'+item.hash" :title="'Details on '+item.name">
      {{item.name}}&nbsp;
      <span v-if="item.season || item.episode">
        <span v-if="item.season">S{{item.season}}E{{item.episode}}</span>
      </span>
      <span v-else>({{item.year}})</span>
    </router-link>
    <span class="actions">
      <span v-if="item.hasSub" class="btn cast fa fa-rss"></span>
      <span v-if="item.hasSub" class="btn play fa fa-play"></span>
      <router-link class="btn info fa fa-info-circle" 
                   v-if="item.hasSub"
                   :to="'/summary/'+item.hash" :title="'Details on '+item.name">
      </router-link>
      <span v-if="!item.hasSub" class="btn sub fa fa-file-text"></span>
    </span>
  </li>
</template>

<script>
  
  export default {
    name: 'item-line',
    props: ['item'],
    
    computed : {
      
    }
  }
</script>
