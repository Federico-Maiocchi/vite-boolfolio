<script>


</script>

<template>

    <header>
        
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <router-link :to="{ name: 'home' }">Home</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'projects.index' }">Portfolio</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'contacts' }">Contatti</router-link>
                    </li>
                </ul>
            </nav>
        </div>
        
    </header>
    
</template>

<style lang="scss" scoped>

</style>
