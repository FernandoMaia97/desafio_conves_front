# Front VueJS Desafio Conves
Front-end para consumir a API de tipos de café do Desafio Conves

## Configuração
Para resolver as dependências. Necessário NodeJs e NPM.
```shell
npm install
```
Altere a URL da API de tipos de café, para isso, altere a variável baseURL conforme o endereço da API.

Arquivo onde se localiza a variável baseURL
```javascript
/src/services/config.js
```
A baseURL deverá conter a URL base + o controller cafe da API, como no exemplo abaixo.
```javascript
baseURL : 'http://localhost:8081/desafio_conves/public/cafe/'
```

### Compilar e Executar
Rode o comando abaixo e abra o browser no endereço indicado. Padrão: http://localhost:8080/
```shell
npm run serve
```
