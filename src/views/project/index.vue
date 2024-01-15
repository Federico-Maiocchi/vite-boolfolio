<script>
import axios from 'axios';

export default {
    components: {
    
    
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
                    console.log(res)
                    this.projects = res.data.results
                })
            }
    },

    created() {
            this.fetchProjects()
    },
    

    mounted() {
        
    }
}

</script>

<template>
    <h2>Index.vue prova</h2>

    <div class="container">
        <div class="row">
            <div class="col-3">
                <div class="card-project"></div>
                <div v-for="project in projects" :key="project.id">
                    <h3 > {{ project.title }}</h3>
                    <p>{{ project.type.name }}</p>
                    <p class="row" v-for="technology in project.technologies">{{ technology.name }}</p>
                </div>
            </div>    
        </div>
    </div>

    

    
    
</template>

<style lang="scss" scoped>

.container {
    margin: 0 auto;
    width: 900px;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.col-3 {
    flex-basis: calc((100 / 12) * 3);
}

    

</style>