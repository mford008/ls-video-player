import Vue from 'vue'
import VuePlyr from 'vue-plyr'
import App from './App.vue'

Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: false }
  },
  emit: ['ended']
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
