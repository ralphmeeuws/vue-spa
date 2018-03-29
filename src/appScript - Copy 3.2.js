import Vue from 'vue'

console.log('myApp loaded!')

Vue.component('myAppElement', {
  template: `
    <div id="app-hook">
      <nav class="nav has-shadow">
        <div class="container">
          <a href="/">
            <img src="http://bit.ly/vue-img"
              alt="Vue SPA" />
          </a>
        </div>
      </nav>
      <section class="main-section section"></section>
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            Follow us on
            <a href="https://twitter.com/"
            target="_blank">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  `
})

// Note: "render: h => h('myAppElement')" is the same as "template: '<myAppElement></myAppElement>'".
const myApp = new Vue({
  render: h => h('myAppElement')
})

export { myApp }
