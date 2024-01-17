import { createRouter, createWebHistory} from 'vue-router';

import Homepage from './views/Homepage.vue';
import ProjectIndex from './views/projects/Index.vue';
import Contact from './views/Contact.vue';
import ProjectShow from './views/projects/Show.vue';
import NotFound from './views/404.vue';
import TypeArchive from './views/types/Archive.vue';

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
            props:true,
            component: ProjectShow
        },
        {
            path:'/type/:slug',
            name:'types.archive',
            props: true,
            component: TypeArchive   
        },
        {
            path:'/contatti',
            name: 'contacts',
            component: Contact
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
}) 

export { router }


