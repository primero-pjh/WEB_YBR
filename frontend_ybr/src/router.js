import { createWebHistory, createRouter } from 'vue-router';


const routes = [
	{
    path: '/',
    name: 'Login',
    component: () => import('@/views/LoginView'), // 동적 import
	},
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});

