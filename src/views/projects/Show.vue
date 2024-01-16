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
            <div class="card-show">
                <h1 class="mb-2">Titolo: {{  project.title }}</h1>
                <p class="mb-2">Slug: {{ project.slug }}</p>
                <p class="mb-2">Type: {{ project.type?.name }}</p>
                <div class="row tech mb-2">
                    <p class="col-3 " v-for="technology in project.technologies" :key="technology.id">
                        {{ technology.name }}
                    </p>  
                </div>
                <div class="mb-2">Immagine: {{ project.img }} </div>
                <div class="container mb-2" v-html="project.description">
                    
                </div>
            </div>
           
        </div>
    </div>   
</template>

<style lang="scss" scoped>

.card-show {
    border: 2px solid black;
    padding: 10px

}

.tech {
    border: 1px solid black;
    padding: 4px;
    
}


</style>