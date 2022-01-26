const router = require("express").Router();

var TravelController = require("../controller/travel.controller");


//http post
router.post("/", TravelController.add);


//http get
router.get("/", TravelController.get);
router.get('/:id', TravelController.getById);
router.get("/get-by-user/:id", TravelController.getByUser);
router.get("/get-by-provider/:id", TravelController.getByProvider);

//http post
router.post("/", TravelController.add);

//http delete
router.delete("/", TravelController.delete);

//http update
router.put("/", TravelController.update);

module.exports = router;