<script>
import axios from 'axios';

    export default {
        props: {
            slug: String
        },

        data() {
            return {
                BASE_URL: 'http://127.0.0.1:8000/api',
                type:null,
                projects:[] 
            }
        },

        methods: {
            fetchTypeProjects() {
                axios.get(`${ this.BASE_URL}/types/${ this.slug}`)
                .then(res => {
                    // console.log(res.data)

                    this.type = res.data.type
                    this.projects = res.data.projects.data

                    // console.log(res.data.projects)
                })
                .catch(error => {
                console.error('Error fetching data:', error);
            });
            }
        },

        created() {
            this.fetchTypeProjects()
        }
    }
</script>

<template>
    <div v-if="type">
        <div class="container">
            <h1>{{ type.name }}</h1>
        </div>
        <div class="container" v-if="projects.length > 0">
            <div class="card-archive">
                <ul>
                    <li v-for="project in projects" :key="project.id" class="project-list-item"> 
                        {{ project.title }}
                    </li>
                </ul>
            </div>    
        </div>
        <div class="container" v-else>
            <p>Non ci sono progetti con questa TIPOLOGIA.</p>
        </div>
    </div>
    <div v-else>
        <p class="loading">Loading...</p>
    </div>
</template>

<style lang="scss" scoped>
.card-archive {
    background-color: white;
}
</style>