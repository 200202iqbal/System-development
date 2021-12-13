const express = require("express")
const routes = require("./routes")
const layouts = require("express-ejs-layouts")

require("dotenv").config();

const host = process.env.HOST;
const port = process.env.PORT;

const app = express()

app.set("view engine","ejs")
app.use(routes)

app.set("layout","layouts/default")
app.use(layouts)


app.listen(port,host,()=>{
    console.log(`Server listen: http://${host}:${port}`)
});