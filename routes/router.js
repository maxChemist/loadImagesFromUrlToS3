const Router = require("express");
const router = new Router();
const controller = require("../controller/controller");
// const accessMiddleware = require("../middleware/accessMiddleware");

router.get("/",  controller.get);
router.post("/load-image",  controller.loadImageReq);
router.get("/get-from-url",  controller.getUrl);

module.exports = router;
