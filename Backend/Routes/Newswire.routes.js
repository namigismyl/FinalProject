
const express = require("express")
const {NewswireController} =require("../Controllers/Newswire.controller")
const router=express.Router()
const upload = require("../Middlewares/multer.middleware")
router.get("/",NewswireController.getAll)
router.get("/:id",NewswireController.getById)
router.post("/",upload.single("image"),NewswireController.add)
router.delete("/:id",NewswireController.delete)
router.put("/:id",NewswireController.edit)
module.exports = router
