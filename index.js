const express = require('express');

const app = express();

app.use(express.json());

// Tipos de Parametros:

// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (São dados para a criação ou alteração de um registro)

app.get('/',  (req, res) => {
    res.json({message: 'Init Project'});
});

app.listen(3333);