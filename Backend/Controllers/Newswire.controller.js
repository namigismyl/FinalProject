const { News } = require("../Models/Newswire.model")
const NewswireController = {
    getAll: async (req, res) => {
        try {
            const target = await News.find()
            res.send(target)
        } catch (err) {
            res.status(404).send(err)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await News.findById(id)
            res.send(target)
        } catch (err) {
            res.status(404).send(err)

        }
    },
    add: async (req, res) => {
        try {
            const newNews = new News({ ...req.body,image: "http://localhost:3000/uploads/" + req.file.filename})
            await newNews.save()
            const target = await News.find()
            res.send(target)
            // res.send(req.file)
        } catch (err) {
            res.status(404).send(err)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await News.findByIdAndDelete(id)
            const target = await News.find()
            res.send(target)

        } catch (err) {
            res.status(404).send(err)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await News.findByIdAndUpdate(id, { ...req.body })
            const target = await News.find()
            res.send(target)
        }
        catch (err) {
            res.status(404).send(err)

        }
    }

}
module.exports = { NewswireController }

