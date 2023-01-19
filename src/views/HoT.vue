<template>
  <div class="hot">
    <button class="styled-button" @click="flipCoin">Flip Coin</button>
    <h3>{{ result }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: ''
    }
  },
  methods: {
    flipCoin() {
      let coin = Math.random() < 0.5 ? 'Heads' : 'Tails';
      this.result = coin;
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .hot {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<style scoped>
.styled-button {
  background-color: #4CAF50; /* Green */
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.styled-button:hover {
  background-color: #3e8e41;
}

.hot h3 {
  text-align: left;
  padding: 50px;
}
</style>



