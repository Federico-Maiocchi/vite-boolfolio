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
                axios.get(`${this.BASE_URL}/posts/${this.slug}`)
                .then((res) => {
                    console.log(res)
                    this.projects = res.data.results.data
                })
        }
       
    },

    created() {
    // const slug = this.$route.params.slug
    // console.log('rotta:',this.$route)
    // console.log(slug)
    this.fetchPost()
    }


}
    
</script>

<template>
    <h1>Sezione SHOW - Projects/Show.vue</h1>
    <div>

    </div>
</template>

<style lang="scss" scoped>

</style>