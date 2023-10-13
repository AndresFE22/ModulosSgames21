<template>
<div>hola que tal</div>  </template>
  
  <script>
  export default {
    data() {
      return {
        tiempoInicio: null,
        temporizador: null
      };
    },
    mounted() {
        this.iniciarMedicion();
    },

    methods: {
      iniciarMedicion() {
        this.tiempoInicio = Date.now();
        this.temporizador = setInterval(this.enviarTiempoAlServidor, 60000);
      },
      detenerMedicion() {
        clearInterval(this.temporizador);
        this.temporizador = null;
      },
      enviarTiempoAlServidor() {
        if (this.tiempoInicio !== null) {
          const tiempoActual = Date.now();
          console.log(this.tiempoInicio)
          console.log(tiempoActual)
          const tiempoTranscurrido = tiempoActual - this.tiempoInicio;
          console.log(tiempoTranscurrido)
          //Aqui supongo que se manda al backend para usarse para el asesoramiento
        }
      }
    },
    detener() {
      this.detenerMedicion();
    }
  };
  </script>
  