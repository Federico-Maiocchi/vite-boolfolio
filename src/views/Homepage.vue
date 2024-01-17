<script>
export default {
    data() {
        return {
            title: 'Federico',
            jobTitle: 'Developer'
        }
    },

    mounted() {
        // console.log('home page montato')
    }


}

</script>

<template>
    <h1>HomePage</h1>
    <div class="container">
        <section class="home">
            <h1> {{ title }} </h1>
            <h2> {{ jobTitle }} </h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam fugit quis nemo distinctio amet.</p>
        </section>     
    </div>
</template>

<style lang="scss" scoped>
.home {
    background-color: white;
}
</style>