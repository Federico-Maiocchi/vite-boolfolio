<script>
export default {
    data() {
        return {
            title: 'Federico',
            jobTitle: 'Developer'
        }
    },

    mounted() {
        console.log('home page montato')
    }


}

</script>

<template>
    <div class="container">
        <h1> {{ title }} </h1>
        <h2> {{ jobTitle }} </h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam fugit quis nemo distinctio amet.</p>
    </div>
</template>

<style lang="scss" scoped>

</style>