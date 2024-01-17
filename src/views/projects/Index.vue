<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue'

export default {
    
    components: {
        ProjectCard,
    },

    data() {
        return {
            projects:[],
            BASE_URL: 'http://127.0.0.1:8000/api',
            currentPage: 1,
            lastPage: 0,
            page: 1,     
        };
    },

    methods: {
        fetchProjects() {
                axios.get(`${this.BASE_URL}/projects`, {
                    params: {
                        page: this.page
                    }
                })
                .then((res) => {
                    // console.log(res, res.data.results.current_page, res.data.results.last_page)
                    this.projects = res.data.results.data
                    this.currentPage = res.data.results.current_page
                    this.lastPage = res.data.results.last_page
                })
        },

        setPage(n) {

        this.page = n
    
        this.fetchProjects()
        }
    },

    created() {
            this.fetchProjects()
    },
    
    mounted() {
        // console.log('projects.index montato')
    }
}

</script>

<template>
    <h1>Portfolio</h1>
    <div v-if="projects.length > 0">
        <div class="container">
            <div class="row mb-2">
                <ProjectCard 
                v-for="project in projects" 
                :key="project.id" 
                :itemProject="project" />     
            </div>
        </div>
        <div class="container">
            <ul class="row-pages">
                <li v-for="item in lastPage" 
                :class="{'active': item === page}" 
                :key="item" @click="setPage(item)"
                >
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
    <div v-else>
        <p class="loading">Loading...</p>
    </div> 

</template>

<style lang="scss" scoped>

.row-pages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px
}


</style>