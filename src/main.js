import Vue from 'vue'
import App from './App.vue'
import LoadingComponent from "@/components/LoadingComponent";

Vue.component('Loading', LoadingComponent);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
