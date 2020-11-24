import vue from 'vue';
import vuex from 'vuex';

import { userStore } from '@/store/modules/user.store';
import { templateStore } from '@/store/modules/template.store';
import { editorStore } from '@/store/modules/editor.store';

vue.use(vuex);

export default new vuex.Store({
    strict: true,
    state: {},
    mutations: {},
    actions: {},
    modules: {
        userStore,
        templateStore,
        editorStore
    }
});