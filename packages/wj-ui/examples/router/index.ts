import { createMemoryHistory, createWebHashHistory, createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('../page/home.vue')
    },
    {
        path: '/make',
        component: () => import('../page/make.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
