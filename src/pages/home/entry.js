import App from './views/List.vue';
import baseUtil from '../../utils/BaseUtil';

App.el = '#root';
baseUtil.initialize(weex.config.env.platform);

export default new Vue(App);
