<template>
  <div class="tipos">
    <div v-for='cafe in cafes' :key='cafe.id' class="tp">
      <h5>{{cafe.nome}}</h5>
      <p>{{cafe.descricao}}</p>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cafes',
  props: {
    cafes: Array
  }
}
</script>

<style>
  .tp {
    margin: 20px;
  }
</style>
