const {Games} = require("../Models/ShopGames.model")
const GamesController = {
    getAll: async (req, res) => {
        try {
            const target = await Games.find()
            res.send(target)
        } catch (err) {
            res.status(404).send(err)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Games.findById(id)
            res.send(target)
        } catch (err) {
            res.status(404).send(err)

        }
    },
    add: async (req, res) => {
        try {
            const newProducts = new Games({ ...req.body,image: "http://localhost:3000/uploads/" + req.file.filename})
            await newProducts.save()
            const target = await Games.find()
            res.send(target)
        } catch (err) {
            res.status(404).send(err)
        }
    },
    delete:async(req,res)=>{
        try{
            const {id}=req.params
            await  Games.findByIdAndDelete(id)
            const target = await Games.find()
            res.send(target)

        } catch (err) {
            res.status(404).send(err)
        }
    }

}
module.exports={GamesController}