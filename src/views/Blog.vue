<template>
  <div>
    <div v-if="loading" class="loading-spinner"></div>
    <div v-else v-for="post in posts" :key="post.id">
      <h2 class="post-title">{{ post.title }}</h2>
      <p class="post-date">{{ post.date }}</p>
      <p class="post-content">{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      loading: true
    }
  },
  created() {
    this.fetchPosts()
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        this.posts = data
        this.loading = false
      } catch (error) {
        // handle error
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}
.blog-post {
  width: 80%;
  margin: 50px auto;
  box-shadow: 0px 0px 10px #ccc;
  padding: 20px;
}

.post-title {
  font-size: 32px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
}

.post-date {
  font-size: 14px;
  color: #000;
  margin-bottom: 20px;
}

.post-content {
  font-size: 18px;
  color: #555;
  line-height: 1.5;
}
</style>
