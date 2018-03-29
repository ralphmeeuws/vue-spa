webpackJsonp([0],[,function(t,e){t.exports=function(t,e,n,o,s){var a,r=t=t||{},i=typeof t.default;"object"!==i&&"function"!==i||(a=t,r=t.default);var c="function"==typeof r?r.options:r;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),o&&(c._scopeId=o);var u;if(s?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):n&&(u=n),u){var l=c.functional,d=l?c.render:c.beforeCreate;l?c.render=function(t,e){return u.call(e),d(t,e)}:c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:a,exports:r,options:c}}},,,,,function(t,e,n){"use strict";var o=n(7),s=n.n(o);s.a.defaults.baseURL="https://api.fullstackweekly.com",s.a.interceptors.request.use(function(t){if("undefined"==typeof window)return t;var e=window.localStorage.getItem("token");return e&&(t.headers.Authorization="Bearer "+e),t});var a={getPosts:function(t){return new Promise(function(e){s.a.get("/wp-json/wp/v2/posts?categories="+t+"&per_page=6").then(function(t){e(t.data)})})},getProfile:function(){return new Promise(function(t){s.a.get("/services/profile.php").then(function(e){t(e.data)})})},login:function(t){return new Promise(function(e,n){s.a.post("/services/auth.php",t).then(function(t){e(t.data)}).catch(function(t){n(t.status)})})}};e.a=a},,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(15);o.b.onReady(function(){o.a.$mount("#app-hook")})},function(t,e,n){"use strict";n.d(e,"a",function(){return c});var o=n(4),s=n(17),a=n(37),r=n(46);n.d(e,"b",function(){return r.a});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};o.default.config.devtools=!0;var c=new o.default(i({router:r.a},a.a,{store:s.a}))},,function(t,e,n){"use strict";var o=n(4),s=n(3),a=n(6),r=n(36);o.default.use(s.default);var i={blnIsAuthenticated:!1},c=new s.default.Store({modules:{postsModule:r.a},state:i,getters:{blnIsAuthenticated:function(t){return t.blnIsAuthenticated}},actions:{logoutAction:function(t){t.commit("logoutMutation")},loginAction:function(t,e){return new Promise(function(n){a.a.login(e).then(function(e){t.commit("loginMutation",e),n()}).catch(function(){return window.alert("Could not login!")})})}},mutations:{logoutMutation:function(t){"undefined"!=typeof window&&(window.localStorage.setItem("token",null),window.localStorage.setItem("tokenExpiration",null)),t.blnIsAuthenticated=!1},loginMutation:function(t,e){"undefined"!=typeof window&&(window.localStorage.setItem("token",e.token),window.localStorage.setItem("tokenExpiration",e.expiration)),t.blnIsAuthenticated=!0}}});"undefined"!=typeof window&&document.addEventListener("DOMContentLoaded",function(t){var e=window.localStorage.getItem("tokenExpiration"),n=(new Date).getTime()/1e3;null!==e&&parseInt(e)-n>0&&(c.state.blnIsAuthenticated=!0)}),e.a=c},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var o=n(6),s={posts:[],categroyId:0},a="undefined"!=typeof window,r=a&&window.__INITIAL_STATE__?window.__INITIAL_STATE__.postsmodule:s,i={posts:function(t){return t.posts}},c={updateCategoryAction:function(t,e){return o.a.getPosts(e).then(function(n){t.commit("updateCategoryMutation",{numCategoryId:e,posts:n})})}},u={updateCategoryMutation:function(t,e){t.numCategoryId=e.numCategoryId,t.posts=e.posts}};e.a={namespaced:!0,state:r,getters:i,actions:c,mutations:u}},function(t,e,n){"use strict";function o(t){n(38)}var s=n(39),a=n(45),r=n(1),i=o,c=r(s.a,a.a,i,null,null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";var o=n(40),s=n(43);e.a={components:{"app-header-component":o.a,"app-footer-component":s.a}}},function(t,e,n){"use strict";var o=n(41),s=n(42),a=n(1),r=a(o.a,s.a,null,null,null);e.a=r.exports},function(t,e,n){"use strict";var o=n(3),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={computed:s({},Object(o.mapGetters)(["blnIsAuthenticated"]))}},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"nav has-shadow"},[n("div",{staticClass:"container"},[n("router-link",{attrs:{to:"/category/front-end",exact:""}},[n("img",{attrs:{src:"http://bit.ly/vue-img",alt:"Vue SPA"}})]),t._v(" "),n("router-link",{staticClass:"nav-item is-tab",attrs:{to:"/category/front-end"}},[t._v("Front-end")]),t._v(" "),n("router-link",{staticClass:"nav-item is-tab",attrs:{to:{name:"category",params:{id:"mobile"}}}},[t._v("Mobile")]),t._v(" "),n("router-link",{staticClass:"nav-item is-tab",attrs:{to:"/login"}},[t.blnIsAuthenticated?n("span",[t._v("Logout")]):n("span",[t._v("Login")])])],1)])},s=[],a={render:o,staticRenderFns:s};e.a=a},function(t,e,n){"use strict";var o=n(44),s=n(1),a=s(null,o.a,null,null,null);e.a=a.exports},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content has-text-centered"},[t._v("\n      Follow us on\n      "),n("a",{attrs:{href:"https://twitter.com/",target:"_blank"}},[t._v("Twitter")])])])])}],a={render:o,staticRenderFns:s};e.a=a},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-hook"}},[n("app-header-component"),t._v(" "),n("section",{staticClass:"main-section section"},[n("div",{staticClass:"container content"},[n("router-view")],1)]),t._v(" "),n("app-footer-component")],1)},s=[],a={render:o,staticRenderFns:s};e.a=a},function(t,e,n){"use strict";var o=n(4),s=n(13),a=n(47),r=n(54),i=n(57);o.default.use(s.default);var c=new s.default({mode:"history",linkActiveClass:"is-active",scrollBehavior:function(t,e,n){return{y:0}},routes:[{path:"/login",component:r.a},{path:"/category/:id",name:"category",component:a.a},{path:"/",redirect:"/category/front-end"},{path:"*",component:i.a}]});e.a=c},function(t,e,n){"use strict";var o=n(48),s=n(53),a=n(1),r=a(o.a,s.a,null,null,null);e.a=r.exports},function(t,e,n){"use strict";var o=n(49),s=n(3),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(t,e){var n=2;return"mobile"===e.params.id&&(n=11),t.dispatch("postsModule/updateCategoryAction",n)};e.a={asyncData:function(t,e){return r(t,e)},components:{"post-component":o.a},computed:a({},Object(s.mapGetters)("postsModule",["posts"])),methods:{loadPosts:function(){r(this.$store,this.$route)}},watch:{$route:function(t,e){this.loadPosts()}},created:function(){this.loadPosts()}}},function(t,e,n){"use strict";function o(t){n(50)}var s=n(51),a=n(52),r=n(1),i=o,c=r(s.a,a.a,i,"data-v-e458c95e",null);e.a=c.exports},function(t,e){},function(t,e,n){"use strict";e.a={props:["postLink"]}},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[t._t("title"),t._v(" "),t._t("content")],2),t._v(" "),n("footer",{staticClass:"card-footer"},[n("a",{staticClass:"card-footer-item",attrs:{href:t.postLink,target:"_blank"}},[t._v("Read More")])])])},s=[],a={render:o,staticRenderFns:s};e.a=a},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"columns"},t._l(t.posts,function(e){return n("div",{key:e.id,staticClass:"column is-one-third"},[n("post-component",{attrs:{postLink:e.rest_api_enabler.Link}},[n("h3",{domProps:{innerHTML:t._s(e.title.rendered)},slot:"title"}),t._v(" "),n("span",{domProps:{innerHTML:t._s(e.excerpt.rendered)},slot:"content"})])],1)}))},s=[],a={render:o,staticRenderFns:s};e.a=a},function(t,e,n){"use strict";var o=n(55),s=n(56),a=n(1),r=a(o.a,s.a,null,null,null);e.a=r.exports},function(t,e,n){"use strict";var o=n(3),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.a={data:function(){return{strUsername:"",strPassword:""}},computed:s({},Object(o.mapGetters)(["blnIsAuthenticated"])),methods:s({},Object(o.mapActions)({logoutMethod:"logoutAction"}),{loginMethod:function(){var t=this;this.$store.dispatch("loginAction",{username:this.strUsername,password:this.strPassword}).then(function(){t.strUsername="",t.strPassword=""})}})}},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t.blnIsAuthenticated?n("div",[t._v("\n    Hello authenticated user!\n    "),n("button",{staticClass:"button is-primary",on:{click:function(e){t.logoutMethod()}}},[t._v("Logout")])]):n("div",[n("h2",[t._v("Login")]),t._v(" "),n("div",{staticClass:"field is-horizontal"},[t._m(0),t._v(" "),n("div",{staticClass:"field-body"},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.strUsername,expression:"strUsername"}],staticClass:"input",attrs:{type:"text",placeholder:"Your username"},domProps:{value:t.strUsername},on:{input:function(e){e.target.composing||(t.strUsername=e.target.value)}}})])])])]),t._v(" "),n("div",{staticClass:"field is-horizontal"},[t._m(1),t._v(" "),n("div",{staticClass:"field-body"},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.strPassword,expression:"strPassword"}],staticClass:"input",attrs:{type:"password",placeholder:"Your password"},domProps:{value:t.strPassword},on:{input:function(e){e.target.composing||(t.strPassword=e.target.value)}}})])])])]),t._v(" "),n("div",{staticClass:"field is-horizontal"},[n("div",{staticClass:"field-label"}),t._v(" "),n("div",{staticClass:"field-body"},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("button",{staticClass:"button is-primary",on:{click:function(e){t.loginMethod()}}},[t._v("\n          Login\n          ")])])])])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field-label is-normal"},[n("label",{staticClass:"label"},[t._v("Username")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field-label is-normal"},[n("label",{staticClass:"label"},[t._v("Password")])])}],a={render:o,staticRenderFns:s};e.a=a},function(t,e,n){"use strict";var o=n(58),s=n(1),a=s(null,o.a,null,null,null);e.a=a.exports},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("Oops, 404 page not found!")])},s=[],a={render:o,staticRenderFns:s};e.a=a}],[14]);