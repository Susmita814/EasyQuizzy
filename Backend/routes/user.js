const Router = require("express");
const UserController = require("../controllers/UserController");

const router = Router();

router.get("/", UserController.get_users);
router.post("/add", UserController.create_user);
router.post("/login", UserController.login_user);

module.exports = router;
