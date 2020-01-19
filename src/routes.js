 const { Router } = require('express'); 

 const routes  = Router(); 

 // Tipos de Parametros:

// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (São dados para a criação ou alteração de um registro)

routes.get('/',  (req, res) => {
    res.json({message: 'Init Project'});
});

module.exports = routes;