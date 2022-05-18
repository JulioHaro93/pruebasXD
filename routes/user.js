const { Router } = require('express');
const {usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch, actualizar, eliminarPorNombre, eliminarUltimo} = require('../controllers/user');

const router = Router();
// importamos todas las funciones de las CRUD desde otro archivo de otra carpeta llamada controladores
router.get('/obten' , usuariosGet);
router.put('/pon' , usuariosPut );
router.post('/postea' , usuariosPost);
router.delete('/borra' , usuariosDelete);
router.patch('/parcha' , usuariosPatch);
//router.update('/actualiza', actualizar),
//router.update('/eliminaUltimo', eliminarUltimo);

console.log("hola Luis, este es mi primer git")

module.exports = router;