<script>


export default {
    props: {
        itemProject: {
            type: Object,

            required: true,
        }
    },

    data() {
        return {



        };
    },

    methods: {

    },

    created() {

    },

    mounted() {

    }
}

</script>

<template>

    <div class="col-4">
        <div class="card-project">
            <div class="card-head">
                <h3 class="mb-2"><span class="text-bold">Titolo:</span> {{ itemProject.title }}</h3>
                <p class="mb-2"><span class="text-bold">Slug:</span> {{ itemProject.slug }} </p>
                <p class="mb-2"><span class="text-bold">Tipo:</span> {{ itemProject.type.name }}</p>
            </div>
            <div class="card-body ">
                <p class="text-bold">Tecnologia: </p>
                <div class="row mb-2">
                    <p  class="col-3" v-for="technology in itemProject.technologies">{{ technology.name }}</p> 
                </div>
                <p class="mb-2"><span class="text-bold">Img:</span> {{ itemProject.img }}</p>
                <p><span class="text-bold">Descrizione:</span> {{ itemProject.description }}</p>
            </div>      
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
.text-bold {
    font-weight: bold;
}
.col-4 {
    padding: 10px;
    
    display: flex;
} 
.card-project {
    padding: 20px;
    border: 1px solid black;
    flex:1;

}

.card-head {
    margin-bottom: 5px;
}

.card-body {
    margin-bottom: 5px;
}

</style>