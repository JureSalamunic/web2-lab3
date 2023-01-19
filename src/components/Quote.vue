<script>
  export default {
    data() {
      return {
        quote: 'Festina lente!'
      }
    }
  }
</script>

<template>
<div class="a">
<h1>Quote of the day is: "{{ quote }}"</h1>
<h3><input v-model="quote" placeholder="Type new quote..." /></h3>
</div>
</template>

<style scoped>
.a h1,
.a h3 {
  text-align: left;
}
</style>