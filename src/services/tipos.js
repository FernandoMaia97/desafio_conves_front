import {http} from './config';

export default {
  listar:() => {
    return http.get('tipos');
  },
  cadastrar: function (nome, descricao)  {
    var fdata = new FormData();
    fdata.set('nome', nome);
    fdata.set('descricao', descricao);
    return http.post('tipos', fdata);
  },
  pesquisar: function (id) {
    return http.get('tipos/'+id);
  }
}
