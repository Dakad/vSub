// Inpired from https://github.com/zhangxiang958/vue-tab
// Tabs Design from https://codepen.io/oknoblich/full/tfjFl

<template>
  <article :ref="'tab_'+id" :class="['content',{ active: isActive }]">
    <div class="btn close" @click="isActive = false">
      <i class="fa fa-times"></i>
    </div> 
    <slot></slot>
  </article>
</template> 


<script >

export default {
  name : 'tab',
  props : {
    name: {
      required: true
    },
    hash: {
      required: true
    },
    
  },
  computed : {
    
  },
  data (){
    return {
      isActive : false,
    }
  },
}

</script>
