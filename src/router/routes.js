import vue from 'vue';
import vueRouter from 'vue-router';

import homePage from '@/views/home.cmp.vue';
import editor from '@/views/editor.cmp.vue';
import templateGallery from '@/views/template-gallery.cmp.vue';
import userProfile from '@/views/user-profile.cmp.vue';
import wap from '@/views/wap.cmp.vue';

vue.use(vueRouter);

const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/editor',
        component: editor
    },
    {
        path: '/template',
        component: templateGallery
    },
    {
        path: '/user/:id',
        component: userProfile
    },
    {
        path: '/:id',
        component: wap
    },
];

const router = new vueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
});

export default router;