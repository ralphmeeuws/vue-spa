<template>
  <div class="columns">
    <div class="column is-one-third" v-for="post in posts" v-bind:key="post.id">
      <post-component :postLink="post.rest_api_enabler.Link">
        <h3 slot="title" v-html="post.title.rendered"></h3>
        <span slot="content" v-html="post.excerpt.rendered"></span>
      </post-component>
    </div>
  </div>
</template>

<script>
import PostComponent from './Post.vue'
import { mapGetters } from 'vuex'

const fetchInitalData = (store, route) => {
  let numCategoryId = 2

  if (route.params.id === 'mobile') {
    numCategoryId = 11
  }
  return store.dispatch('postsModule/updateCategoryAction', numCategoryId)
}

export default {
  asyncData (store, route) {
    return fetchInitalData(store, route)
  },
  components: {
    'post-component': PostComponent
  },
  computed: {
    ...mapGetters('postsModule', ['posts'])
  },
  methods: {
    loadPosts () {
      fetchInitalData(this.$store, this.$route)
    }
  },
  watch: {
    '$route' (to, from) {
      this.loadPosts()
    }
  },
  created () {
    this.loadPosts()
  }
}
</script>
