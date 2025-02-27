import { Vue2 } from 'vue-demi';
import VueCompositionAPI from '@vue/composition-api'
if (Vue2) {
    Vue2.use(VueCompositionAPI);
}
export * from './components/index';