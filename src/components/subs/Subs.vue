// Inpired from https://github.com/zhangxiang958/vue-tab
// Tabs Design from https://codepen.io/oknoblich/full/tfjFl

<template>
  <tabs startupTab="spang">
    <tab-item name="Onglish" hash="pop">
      <p>Dorum ipsum dolor sit amet, consectetur adipiscing elit</p>
      <p>sed do eiusmod tempor incididunt</p>
    </tab-item>
    
    <tab-item name="Spanglish" hash="spang">
      <p>Orci eu lobortis elementum nibh tellus molestie nunc. Nunc aliquet bibendum enim facilisis.</p>
      <p>Leo a diam sollicitudin tempor id eu. Amet purus gravida quis blandit turpis cursus in hac.</p>
    </tab-item>
    
    <tab-item name="Tetsuo" hash="azerty">
      <h1>Yep, That works Beach !!! </h1>
    </tab-item>
        
  </tabs>
</template> 


<script>

  export default {
    name : 'tab',
    props : {
      vid: {
        required: true
      }
      
    },
    created () {
      
    },
    mounted () {
      console.log(this.props)
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
