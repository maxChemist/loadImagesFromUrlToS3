const Router = require("express");
const router = new Router();
const controller = require("../controller/controller");
// const accessMiddleware = require("../middleware/accessMiddleware");

router.get("/",  controller.get);


module.exports = router;
