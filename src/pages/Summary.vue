<template>
  <transition>
    <section>
      <h2>Summary of dropped files </h2>
      <ul class="summary">
        <template v-for="dropped in summmaryList">
          <item-line :item="dropped" > </item-line>
        </template>
      </ul>
    </section>
    
    
  </transition>

</template>

<script>
  import mocks from './mock-summary-list'
  import ItemLine from './summary/ItemLine.vue'

  export default {
    name: 'summary',
    components : {
      ItemLine,
    },
    props: [],
    
    computed : {
      summmaryList : () =>  mocks,

    }
  }
</script>
