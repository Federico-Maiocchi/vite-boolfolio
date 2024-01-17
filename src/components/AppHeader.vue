<script>


</script>

<template>

    <header>
        
        <div class="container">
            <nav class="nav-bar">
                <ul class="row">
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
header {
    padding: 20px 0px;
    border: 2px solid black;
    background-color: white;
}

.row {
    gap: 30px;
}

</style>
