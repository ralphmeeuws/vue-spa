<template>
  <div class="card">
    <div class="card-content">
      <slot name="title"></slot>
      <slot name="content"></slot>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item" :href="postLink" target="_blank">Read More</a>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['postLink']
}
</script>

<style scoped>
  .card {
    padding-bottom: 2rem;
    height: 100%;
  }

  footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>
