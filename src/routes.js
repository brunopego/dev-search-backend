 const { Router } = require('express'); 
 const axios = require('axios');
 const Dev = require('./models/Dev')

 const routes  = Router(); 

 // Tipos de Parametros:

// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (São dados para a criação ou alteração de um registro)
 
routes.get('/devs', async (req, res) => { 
    const { github_username, techs } = req.body;

    const gitApiRes = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio  } = gitApiRes.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev =  await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray
    });

    //console.log(name, avatar_url, bio, github_username);
    res.json(dev);
});

module.exports = routes;