<template>
    <div>
        <button @click="registrarAccion">Realizar Acción</button>
        <button @click="verificarFaltaInteraccion">Verificar Falta de Interacción</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            accionesRegistradas: []
        };
    },
    methods: {
        registrarAccion() {
            this.accionesRegistradas.push(Date.now());
            console.log(this.accionesRegistradas)
        },
        verificarFaltaInteraccion() {
            const umbralInteraccion = 10; 

            if (this.accionesRegistradas.length < umbralInteraccion) {
                console.log("Falta de Interacción detectada");
            }
        }
    }
};
</script>
