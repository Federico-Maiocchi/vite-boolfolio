import { createRouter, createWebHistory} from 'vue-router';

import Homepage from './views/Homepage.vue';
import ProjectIndex from './views/projects/index.vue';
import Contact from './views/Contact.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage
        },
        {
            path: '/portfolio',
            name: 'projects.index',
            component: ProjectIndex
        },
        {
            path:'/contatti',
            name: 'contacts',
            component: Contact
        }

    ]
}) 

export { router }


