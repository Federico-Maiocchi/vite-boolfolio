<script>
import axios from 'axios';

export default {
    props: {
        slug: String,
    },

    data() {
        return {
            BASE_URL: 'http://127.0.0.1:8000/api',
            project: null,
        }
    },

    methods: {

        fetchProject() {
            axios.get(`${this.BASE_URL}/projects/${this.slug}`)
            .then((res) => {
                console.log(res)
                this.project = res.data.project
                
            }).catch((error) => {
                console.log('project not found',error.response)

                if(error.response.status === 404) {
                    this.$router.push({ name: 'not-found' })
                }
            })  
        }
    },

    created() {
    // const slug = this.$route.params.slug
    // console.log('rotta:',this.$route)
    // console.log(slug)
    this.fetchProject()
    }


}
    
</script>

<template>
    <h1>Sezione SHOW - Projects/Show.vue</h1>
    <div v-if="project">

        <div class="container">
            <h1>{{  project.title }}</h1>
            <p>{{ project.slug }}</p>
            <p >{{ project.type?.name }}</p>
            <ul class="tags">
                <li v-for="technology in project.technologies" :key="technology.id">
                {{ technology.name }}
                </li>
            </ul>
        
        </div>
    </div>

    

    
</template>

<style lang="scss" scoped>

</style>