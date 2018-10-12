<template>
  <div class="tipos">
    <h1>Cadastro de tipos de Café</h1>
    <div v-if="erro != ''" class="alert alert-danger fade show" role="alert">
      {{erro}}
    </div>
    <div v-if="sucesso != ''" class="alert alert-success alert-dismissible fade show" role="alert">
      Café Cadastrado com sucesso | id =  {{sucesso}}
    </div>
    <form @submit.prevent="cadastro" class="forms">
      <div class="form-group">
        <label for="nome">Digite o Nome do Tipo do Café</label>
        <input type="text" v-model='nome' placeholder="Nome do café" name="nome" value="" id='nome' class="form-control">
      </div>
      <div class="form-group">
        <label for="descricao">Digite a Descrição do Tipo do Café</label>
        <textarea  v-model='descricao' placeholder="Descricao do café" name="descricao" value="" id="descricao" class="form-control"></textarea>
      </div>
      <div class="form-group">
        <button type='submit' class="btn btn-black form-control">Cadastrar</button>
      </div>
    </form>
  </div>
</template>

<script>
  import Tipo from '../services/tipos';
  export default {
    name: 'FormCadastro',
    data(){
      return {
        nome: '',
        descricao: '',
        erro: '',
        sucesso: ''
      }
    },
    methods: {
        cadastro: function () {
            Tipo.cadastrar(this.nome, this.descricao).then((response) => {
                this.nome = '';
                this.descricao = '';
                this.sucesso = response.data.id,
                this.erro = '';
            }).catch((error) => {
                this.erro = error.response.data.message;
                this.sucesso = '';
            });
        }
    }
  }
</script>
