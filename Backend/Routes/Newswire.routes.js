
const express = require("express")
const {NewswireController} =require("../Controllers/Newswire.controller")
const router=express.Router()
const uploads = require("../Middlewares/multer.middleware")
router.get("/",NewswireController.getAll)
router.get("/:id",NewswireController.getById)
router.post("/",uploads.array("images",10),NewswireController.add)
router.delete("/:id",NewswireController.delete)
router.put("/:id",uploads.array("images",10),NewswireController.edit)
module.exports = router
