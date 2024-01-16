import { createRouter, createWebHistory} from 'vue-router';

import Homepage from './views/Homepage.vue';
import ProjectIndex from './views/projects/Index.vue';
import Contact from './views/Contact.vue'
import ProjectShow from './views/projects/Show.vue'

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
            path: '/portfolio/:slug',
            name: 'projects.show',
            component: ProjectShow

        },
        {
            path:'/contatti',
            name: 'contacts',
            component: Contact
        },
        

    ]
}) 

export { router }


