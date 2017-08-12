<template>
  <transition>
    <svg v-if="spin"  :class="['spinner', 'spinner-colors',{'spin':spin}]" 
        width="65" height="25" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
       <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
  </transition>

</template>

<script>
  export default {
    name: 'spinner',
    props: ['spin'],
  }
</script>
