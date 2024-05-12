const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")

app.use(express.json())
app.use(cors({origin: "http://localhost:3000"}))

app.listen(port, () => {
    console.log("el servidor esta funcionando")
})

app.get("/", (req, res) => {
    res.send("pasarela de pagos ")
})