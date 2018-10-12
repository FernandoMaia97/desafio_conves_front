<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top menu-nav">
      <router-link to="/" class="navbar-brand nav-link">
        <img src="@/assets/coffee.png" width="30" height="30" alt="">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Início <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cadastrar" class="nav-link">Cadastrar</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/pesquisar" class="nav-link">Pesquisar</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tipos" class="nav-link">Tipos</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 85%;
  margin: 0 auto;
  box-shadow: 0px 2px 10px 2px black;
  border-radius: 2px;
  margin-bottom: 10px;
  padding-bottom: 20px;
}

h1 {
  text-align: center;
}

.btn-black {
    background: #343a40 !important;
    color: white;
}

.btn-black:hover {
    background: black !important;
    color: white;
}
</style>
