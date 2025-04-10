import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@liyun/wj-ui/styles/index.less';

const app = createApp(App);
app.use(router);
app.mount('#app');