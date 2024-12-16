const express = require("express")
const {GamesController} =require("../Controllers/ShopGames.controller")
const router=express.Router()
const upload = require("../Middlewares/multer.middleware")
router.get("/",GamesController.getAll)
router.get("/:id",GamesController.getById)
router.post("/",upload.single("image"),GamesController.add)
router.delete("/:id",GamesController.delete)
module.exports = router
