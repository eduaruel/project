const Express = require('express');
const router = Express.Router();
const homeCrontoller = require('../controllers/homeController.js');
const vacanteCrontoller = require('../controllers/vacanteCrontoller.js');

module.exports = () => {
	router.get('/', homeCrontoller.mostrarTrabajos);

	//vacantes
	router.get('/views/nueva-vacante.handlebars', vacanteCrontoller.formularioNuevaVacante);

	return router;
};
