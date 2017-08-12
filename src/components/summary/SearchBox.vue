<template>
  <div>
    <span class="input-wrapper">
      <label for="input_search" class="fa fa-film fa-lg input-icon"></label>
      <input id="input_search" type="text" name="search" placeholder="Name ..." title="Input the name of the file or vid"
            v-model.trim="term"
            @input="$emit('search',term)"
      >
    </span>
    <span class="btn_search" @click="$emit('search',term)"></span>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        term : ''
      }
    }
  }

</script>