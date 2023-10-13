<template>
    <div>
      <img src="tu_imagen.jpg" alt="Imagen" @click="registrarClic" />
      <button @click="enviar">Enviar</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        areaCorrecta: { x: 100, y: 100, width: 50, height: 30 },
      };
    },
    methods: {
      registrarClic(event) {
        const x = event.clientX; 
        const y = event.clientY;
  
        if (this.esAreaIncorrecta(x, y)) {
          console.log('Clic Incorrecto');
        }
      },
  
      esAreaIncorrecta(x, y) {
        return (
          x < this.areaCorrecta.x ||
          x > this.areaCorrecta.x + this.areaCorrecta.width ||
          y < this.areaCorrecta.y ||
          y > this.areaCorrecta.y + this.areaCorrecta.height
        );
      },
  
      enviar() {
        console.log('Enviar');
      },
    },
  };
  </script>
  