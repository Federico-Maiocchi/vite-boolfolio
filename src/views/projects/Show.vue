<script>
import axios from 'axios';

export default {
    props: {
        slug: String,
    },

    data() {
        return {
            BASE_URL: 'http://127.0.0.1:8000/api',
            post: null,
        }
    },

    methods: {

        fetchProject() {
                axios.get(`${this.BASE_URL}/projects/${this.slug}`)
                .then((res) => {
                    console.log(res)
                    this.project = res.data.project
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
        <!-- <p >{{ project.type?.name }}</p> -->
        <!-- <ul class="tags">
            <li v-for="tag in post.tags" :key="tag.id">
            {{ tag.name }}
            </li>
        </ul> -->
        </div>

        <div class="container" v-html="project.content">
        </div>
  </div>
</template>

<style lang="scss" scoped>

</style>