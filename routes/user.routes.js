const router = require("express").Router();

var UserController = require('../controller/user.controller');

//http post
router.post('/', UserController.register);
router.post('/register-busines', UserController.registerBusiness);
router.post('/login', UserController.login);

//http get
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getById);
router.get('/get-provider', UserController.getBusiness);
router.get('/get-by-port/:id', UserController.getByPort);
router.get('/get-ports', UserController.getPorts);

//http put
router.put('/:id', UserController.update);


//http delete
router.delete('/:id', UserController.delete);

module.exports = router;