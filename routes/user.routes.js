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

//http put
router.put('/:id', UserController.update);


//http delete

module.exports = router;