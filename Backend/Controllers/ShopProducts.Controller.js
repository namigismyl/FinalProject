const {products} = require("../Models/ShopProducts.model")
const ProductsController = {
    getAll: async (req, res) => {
        try {
            const target = await products.find()
            res.send(target)
        } catch (err) {
            res.status(404).send(err)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await products.findById(id)
            res.send(target)
        } catch (err) {
            res.status(404).send(err)

        }
    },
    add: async (req, res) => {
        try {
            const newProducts = new products({ ...req.body,image: "http://localhost:3000/uploads/" + req.file.filename})
            await newProducts.save()
            const target = await products.find()
            res.send(target)
        } catch (err) {
            res.status(404).send(err)
        }
    },
    delete:async(req,res)=>{
        try{
            const {id}=req.params
            await products.findByIdAndDelete(id)
            const target = await products.find()
            res.send(target)

        } catch (err) {
            res.status(404).send(err)
        }
    }

}
module.exports={ProductsController}