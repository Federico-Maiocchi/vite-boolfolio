<script>
import axios from 'axios';

    export default {
        props: {
            slug: String
        },

        data() {
            return {
                BASE_URL: 'http://127.0.0.1:8000/api',
                category:null,
                projects:[] 
            }
        },

        methods: {
            fetchTypeProjects() {
                axios.get(`${ this.BASE_URL}/`)
            }
        }
    }
</script>

<template>
    <div>
        {{ $route.params.slug }}
    </div>
</template>

<style lang="scss" scoped>

</style>