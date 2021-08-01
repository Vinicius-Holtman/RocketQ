const express = require('express')

const routes = express.Router()

routes.get("/", (req, res) => res.render("index"))
routes.get("/room", (req, res) => res.render("room"))
routes.get("/create-pass", (req, res) => res.render("create-pass"))

// formato que o formulario de dentro da modal tem que passar a informacao
//(req, res) => res.render("exemplo", {req})
routes.get('/room/:room/:question/:action')

module.exports = routes