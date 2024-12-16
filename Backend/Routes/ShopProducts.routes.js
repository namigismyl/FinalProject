const express = require("express")
const {ProductsController} =require("../Controllers/ShopProducts.Controller")
const router=express.Router()
const upload = require("../Middlewares/multer.middleware")
router.get("/",ProductsController.getAll)
router.get("/:id",ProductsController.getById)
router.post("/",upload.single("image"),ProductsController.add)
router.delete("/:id",ProductsController.delete)
module.exports = router
