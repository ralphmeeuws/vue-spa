<template>
  <div id="app-hook">
    <app-header-component></app-header-component>
    <section class="main-section section">
      <div class="container content">
        <router-view></router-view>
      </div>
    </section>
    <app-footer-component></app-footer-component>
  </div>
</template>

<script>
/* Template binding with child components: */
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'

export default {
  components: {
    'app-header-component': AppHeader,
    'app-footer-component': AppFooter
  }
}
</script>

<style lang="scss">
$primary: #287ab1;
@import '~bulma';

.columns {
  flex-wrap: wrap;
}
</style>
