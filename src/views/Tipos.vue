<template>
  <div class="container">
    <h1 class="titulo">Tipos de Café</h1>
    <img class="exemploCafe" src="@/assets/coffee.jpg">
    <Cafes :cafes='tiposCafe'/>
  </div>
</template>

<script>
  import Tipo from '../services/tipos';
  import Cafes from '@/components/Cafes';
  export default {
    name: 'tipos',
    components: {
      Cafes
    },
    data() {
      return {
        tiposCafe: []
      }
    },
    mounted() {
      Tipo.listar().then((resposta) => {
          this.tiposCafe = resposta.data;
      });
    }
  }
</script>

<style>
  .exemploCafe {
    width: 50%;
    margin-left: 25%;
    border-radius: 5px;
  }

  .titulo {
    margin-top: 20px;
  }
</style>
