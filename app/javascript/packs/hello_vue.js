/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

// import Vue from 'vue'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const el = document.body.appendChild(document.createElement('hello'))
//   const app = new Vue({
//     el,
//     render: h => h(App)
//   })
//
//   console.log(app)
// })


// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the project is using turbolinks, install 'vue-turbolinks':
//
// yarn add vue-turbolinks
//
// Then uncomment the code block below:
//
import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'
//
Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  })
})

// document.addEventListener('DOMContentLoaded', () => {
//     var app6 = new Vue({
//       el: '#app-6',
//       data: {
//         message: 'Hello Vue!'
//       }
//     })
// })

console.log('Hello World from Webpacker')

import * as searchView from './views/searchView'
var string = 'kevin'
console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(4, 9)}, and ${string}`);
