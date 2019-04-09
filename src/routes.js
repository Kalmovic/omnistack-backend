const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer')

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

// Criando uma rota. Ex.: 'www.site.com/rota'
// req => representa a requisição feita pelo nosso server
// res => resposta para o cliente
routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);
routes.post('/boxes/:id/files', multer(multerConfig).single('file'), FileController.store);

// module.exports => Exporta alguma info do arquivo
module.exports = routes;    // Exporta a var routes
