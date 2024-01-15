<script>


export default {
   props: {
        itemProject: {
            type:Object,

            required:true,
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
      
    <div class="card-project">
        <h3 > {{ itemProject.title }}</h3>
        <p>{{ itemProject.type.name }}</p>
        <div class="row">
            <p v-for="technology in itemProject.technologies">{{ technology.name }}</p>
        </div>
        
    </div>

</template>

<style lang="scss" scoped>

.card-project {
    padding: 10px;
    
}

    

</style>