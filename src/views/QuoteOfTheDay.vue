
<script setup>
import Quote from '../components/Quote.vue'

</script>
<template>
  <div class="qotd">
    <Quote />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .qotd {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}


</style>
