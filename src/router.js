import { createRouter, createWebHistory} from 'vue-router';

import Homepage from './views/Homepage.vue';
import ProjectIndex from './views/projects/index.vue';

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage
        },
        {
            path: '/blog',
            name: '/projects.index',
            component: ProjectIndex
        }

    ]
}) 

export { router }