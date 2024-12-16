const express = require("express");
const { usersController } = require("../Controllers/User.controller");
const upload = require("../Middlewares/multer.middleware");
const authenticateToken = require("../Middlewares/authenticate_token.middleware");
const router = express.Router();

router.get("/users",usersController.getAll);
router.get("/users/:id",authenticateToken, usersController.getOne);
router.patch("/users/:id",authenticateToken, usersController.update);
router.delete("/users/:id", usersController.delete);
router.post("/users",upload.single("src"), usersController.post);
router.post("/login", usersController.user_login);
router.get("/verify/:token", usersController.verify);


module.exports = router;
