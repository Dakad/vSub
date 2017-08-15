// Inpired from https://github.com/zhangxiang958/vue-tab
// Tabs Design from https://codepen.io/oknoblich/full/tfjFl

<template>
  <div class="sub">
    <label class="name">{{sub.filename | truncate(60)}}</label>
    <label class="size">({{sub.date | timeAgo}})</label>
    <span class="actions">
      <span class="btn fa fa-cloud-download"></span>
    </span>
    
  </div>
</template> 


<script >

export default {
  name : 'sub-item',
  props : ['sub'],
  computed : {
    
  },
  data (){
    return {
      isDownloaded : false,
    }
  },
  created () {
      
  },
  mounted () {
    console.log(this.sub);
  },
}

</script>
