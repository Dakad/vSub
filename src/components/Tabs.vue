// Inpired from https://github.com/zhangxiang958/vue-tab
// Tabs Design from https://codepen.io/oknoblich/full/tfjFl

<template>
  <section class="tabs">
    <header class="links">
      <button v-for="(tab,i) in tabsList"
              :class="['tab-link', {active : tab.isActive}]"
              :ref="'link_tab_'+tab.hash"
              @click="changeTab(i)"
      >{{tab.name}}</button>
    </header>
      
    <slot></slot>
  </section>
</template> 


<script >

export default {
  name : 'tabs',
  data (){
    return {
      tabsList : [],
      activeLink : null,
    }
  },
  created() {
    this.tabsList = this.$children
  },
  mounted () {
    
  },
  computed : {
    
  },
  methods : {
    changeTab(index){
      if(this.activeLink) this.activeLink.isActive = false
      this.activeLink = this.tabsList[index]
      this.activeLink.isActive = true
    },
  }
}

</script>
