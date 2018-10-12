<template>
  <div class="container">
    <FormPesquisa />
    <Cafes />
  </div>
</template>

<style>

</style>

<script>
  import FormPesquisa from '@/components/FormPesquisa';
  import Cafes from '@/components/Cafes';
  export default {
    name: 'Pesquisar',
    components: {
      FormPesquisa,
      Cafes
    }
  }
</script>
