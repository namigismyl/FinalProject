
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const NewswireRouter = require("./Routes/Newswire.routes")
const ShopGamesRouter = require("./Routes/ShopGames.routes")
const ShopProductsRouter = require("./Routes/ShopProducts.routes")
const userRouter=require("./Routes/User.routes")
require("dotenv").config()
const app = express()
app.use(express.json())
app.use(cors())
// My Data
app.use("/newswire", NewswireRouter)
app.use("/games", ShopGamesRouter)
app.use("/products", ShopProductsRouter),
// Login Register
app.use(userRouter)
app.use("/uploads",express.static('uploads'))
mongoose.connect(process.env.CS).then((res) => {
    console.log("db connected");
}
)
app.listen(process.env.PORT, () => {
    console.log("server is working");
})



