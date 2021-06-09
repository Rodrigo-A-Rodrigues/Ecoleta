const express = require("express")
const server = express()
// utulizando template engine
const nunjacks = require("nunjucks")
nunjacks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar pasta public
server.use(express.static("public"))

//configurar caminhos
//página inicial
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})

//ligar o servidor
server.listen(7777)