<template>
  <transition>
    <section>
      <h2>Summary of dropped fils </h2>
      <summary-item-testimonial> </summary-item-testimonial>
    </section>
    
    
  </transition>

</template>

<script>
  import SummaryItemTestimonial from './SummaryItemTestimonial.vue'
  // import SummaryItemCard from './SummaryItemCard.vue'

  export default {
    name: 'summary',
    components : {
      SummaryItemTestimonial,
      // SummaryItemCard
    },
    props: [],
  }
</script>
