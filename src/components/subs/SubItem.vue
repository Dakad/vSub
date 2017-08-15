// Inpired from https://github.com/zhangxiang958/vue-tab
// Tabs Design from https://codepen.io/oknoblich/full/tfjFl

<template>
  <div class="sub">
    <label class="ago">{{sub.date | timeAgo}} ago </label>
    <label class="name">{{sub.name | truncate(50)}}</label>
    <label class="size">({{sub.name | sizeHuman}})</label>
    <span class="actions">
      <button class="download"><i class="fa fa-cloud-download"></i></button>
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
      isActive : false,
    }
  },
}

</script>
