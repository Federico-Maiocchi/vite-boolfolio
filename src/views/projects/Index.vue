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
            BASE_URL: 'http://127.0.0.1:8000/api'     
        };
    },

    methods: {
        fetchProjects() {
                axios.get(`${this.BASE_URL}/projects`)
                .then((res) => {
                    // console.log(res)
                    this.projects = res.data.results.data
                })
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

    <div class="container">
        <div class="row">
            <ProjectCard 
            v-for="project in projects" 
            :key="project.id" 
            :itemProject="project" />         
        </div>
    </div>

</template>

<style lang="scss" scoped>

.row {
    height: 100%;
}


</style>