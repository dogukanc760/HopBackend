const router = require("express").Router();

var NotificationController = require("../controller/notification.controller");


//http post
router.post("/", NotificationController.add);

//http delete
router.delete("/:id", NotificationController.delete);

//http put
router.put("/:id", NotificationController.delete);

//http get
router.get("/", NotificationController.get);
router.get("/:id", NotificationController.getById);
router.get("/:level", NotificationController.getByLevel);




module.exports = router;