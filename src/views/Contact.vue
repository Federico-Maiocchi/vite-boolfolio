<script>
export default {
    
}
</script>

<template>
    <h1>Pagina contatti</h1>
    <div class="container">
        <form action="" method="POST">
            <div class="mb-2">
                <div class="label-cust">
                    <label for="name">Inserisci il tuo nome</label>
                </div>
                <input class="input-cust " type="text" placeholder="Name" name="name">
            </div>
            <div class="mb-2">
                <div class="label-cust" >
                    <label for="name">Inserisci la tua mail</label>
                </div >
                <input class="input-cust " type="email" name="Inserisci la tua mail" id="email" placeholder="es@gmail.com">
            </div>
            <div class="mb-2">
                <div class="label-cust">
                    <label for="name">Inserisci un messaggio</label>
                </div>
                <textarea class="input-cust" name="message" id="" cols="100" rows="10" placeholder="messaggio"></textarea>
            </div>
            <input class="btn" type="submit" value="Invia">
        </form>
    </div>
</template>

<style lang="scss" scoped>
.label-cust {
    font-weight: bold;
    font-size: 30px;
    color: white;
}

.input-cust {
    text-align: 30px;
    font-size: 20px;
    width: 80%;
}

.btn {
    font-size: 25px;
    text-align: 40px;
    padding: 0px 15px;
    font-weight: bold;
}
</style>