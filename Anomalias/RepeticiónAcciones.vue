<template>
<div></div>  </template>
  
  <script>
  export default {
    data() {
      return {
        acciones: [], 
        maxRepeticiones: 3, 
      };
    },
    methods: {
      registrarAccion(accion) {
        this.acciones.push(accion);
  
        if (this.repetirExcesivamente(accion)) {
          console.log('Repetición Excesiva de Acciones');
        }
      },
  
      repetirExcesivamente(accion) {
        const ultimasAcciones = this.acciones.slice(-this.maxRepeticiones);
  
        return (
          ultimasAcciones.length === this.maxRepeticiones &&
          ultimasAcciones.every(a => a === accion)
        );
      },
  
    },
  };
  </script>
  