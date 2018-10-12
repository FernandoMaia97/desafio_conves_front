<template>
  <div class="tipos">
    <h1>Pesquisa de tipo de café por ID</h1>
    <div v-if="erro != ''" class="alert alert-danger fade show" role="alert">
      {{erro}}
    </div>
    <form @submit.prevent="pesquisa" class="forms">
      <div class="form-group">
        <label for="idCafe">Digite o Id do Café</label>
        <input type="text" v-model='id' placeholder="Id do café" name="nome" value="" id='idCafe' class="form-control">
      </div>
      <div class="form-group">
        <button type='submit' class="btn btn-black form-control">Pesquisar</button>
      </div>
    </form>
    <Cafes :cafes="tipoCafe" />
  </div>
</template>

<script>
  import Tipo from '@/services/tipos';
  import Cafes from '@/components/Cafes';
  export default {
    name: 'FormPesquisa',
    components: {
      Cafes
    },
    data() {
      return {
        id: '',
        tipoCafe: [],
        erro: ''
      }
    },
    methods: {
        pesquisa: function () {
            Tipo.pesquisar(this.id).then((response) => {
                this.limpaCampos();
                this.tipoCafe = response.data;
                this.erro = '';
            }).catch((error) => {
                this.erro = error.response.data.message;
                this.tipoCafe = {};
            });
        },
        limpaCampos: function () {
          this.id = '';
        }

    }
  }
</script>

<style>
  .forms {
    padding: 25px;
  }

  .form-control:focus {
    border-color: #343a40;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(52, 58, 64, 0.6);
  }

  .tipos {
    margin: 20px !important;
  }
</style>
