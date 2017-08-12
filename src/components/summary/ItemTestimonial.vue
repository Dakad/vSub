<template>
  <article class="summary list-item" >
    <img src="http://lorempicsum.com/rio/350/200/1" alt="Avatar">
    
    <h2>{{item.name}} <sub>{{item.year}}</sub></h2>
    <p v-if="item.season|| item.episode">
      <span v-if="item.season">S{{item.season}}</span>E{{item.episode}}
    </p>
    <div class="actions">
      <button><i class="fa fa-file-text"></i></button>
      <button><i class="fa fa-rss"></i></button>
      <button><i class="fa fa-play"></i></button>
      <button><i class="fa fa-info"></i></button>
    </div>
  </article>

</template>

<script>
  
  export default {
    name: 'summary-item-testimonial',
    props: ['item'],
    
    computed : {
      summmaryList : () =>  mocks,

    }
  }
</script>
