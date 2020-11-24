import vue from 'vue';
import app from '@/app.vue';
import router from '@/router/routes';
import store from '@/store/store';
import * as VueGoogleMaps from 'vue2-google-maps';

import '@/assets/style/main.scss';

vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAb-nOgpqD_gjhW9jUy6raZW06HfTaFhPI',
        libraries: 'places',
        region: 'IL',
        language: 'en',
    }
});
vue.config.productionTip = false;

new vue({
    router,
    store,
    render: h => h(app)
}).$mount('#app');