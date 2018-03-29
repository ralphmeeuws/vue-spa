<template>
  <div class="content">
    <div v-if="blnIsAuthenticated">
      Hello authenticated user!
      <p>Name: {{objProfile.firstName}}</p>
      <p>Favorite sandwich: {{objProfile.favoriteSandwich}}</p>
      <button v-on:click="logout()" class="button is-primary">Logout</button>
    </div>
    <div v-else>
      <h2>Login</h2>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Username</label>
        </div>
        <div class="field-body">
          <div class="field">
          <div class="control">
            <input v-model="strUsername" class="input" type="text"
            placeholder="Your username">
          </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Password</label>
        </div>
        <div class="field-body">
          <div class="field">
          <div class="control">
            <input v-model="strPassword" class="input" type="password"
            placeholder="Your password">
          </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
          <div class="control">
            <button v-on:click="login()" class="button is-primary">
            Login
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import appService from '../appScript.service.js'
  import eventBus from '../event-bus.js'
  export default {
    data () {
      return {
        strUsername: '',
        strPassword: '',
        blnIsAuthenticated: false,
        objProfile: {}
      }
    },
    watch: {
      blnIsAuthenticated: function (blnValue) {
        if (blnValue) {
          appService.getProfile()
            .then(profile => {
              this.objProfile = profile
            })
        } else {
          this.objProfile = {}
        }
        eventBus.$emit('authStatusUpdate', blnValue)
      }
    },
    methods: {
      login () {
        appService.login({username: this.strUsername, password: this.strPassword})
          .then((data) => {
            window.localStorage.setItem('token', data.token)
            window.localStorage.setItem('tokenExpiration', data.expiration)
            this.blnIsAuthenticated = true
            this.strUsername = ''
            this.strPassword = ''
          })
          .catch(() => window.alert('Could not login!'))
      },
      logout () {
        window.localStorage.setItem('token', null)
        window.localStorage.setItem('tokenExpiration', null)
        this.blnIsAuthenticated = false
      }
    },
    created () {
      // Check whether the expiration data is in the future compared to now.
      let numExpiration = window.localStorage.getItem('tokenExpiration')
      let numUnixTimestamp = new Date().getTime() / 1000
      if (numExpiration !== null && parseInt(numExpiration) - numUnixTimestamp > 0) {
        this.blnIsAuthenticated = true
      }
    }
  }
</script>
