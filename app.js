// Webpack CSS import
/*import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';*/

// JS import
import Vue from 'vue';
import 'onsenui';
import VueOnsen from 'vue-onsenui';

Vue.use(VueOnsen);

import app from './src/App.vue';
app.el = '#root';
export default new Vue(app);
