import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import styles
import './styles/box-sizing.css'; // box-sizing best practices
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import './styles/main.scss';
// import 'animate.css/animate.min.css';

import './plugins/element.js';

// ECharts
import ECharts from 'vue-echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
Vue.component('v-chart', ECharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
