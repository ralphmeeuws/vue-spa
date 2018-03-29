<template>
  <div class="card">
    <div class="card-content">
      <h3>{{ innerPost.title }}</h3>
      {{ innerPost.content }}
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" :href="innerPost.link" target="_blank">Read More</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['innerPost']
}
</script>
