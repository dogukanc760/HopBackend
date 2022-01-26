const router = require("express").Router();

var LoggerController = require("../controller/logger.controller");

//http post
router.post("/", LoggerController.add);

//http put
router.put("/", LoggerController.update);

//http delete
router.delete("/", LoggerController.delete);

//http get
router.get("/", LoggerController.get);
router.get("/:id", LoggerController.getById);
router.get("/get-by-level/:level", LoggerController.getByLevel);


module.exports = router;