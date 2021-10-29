let db = require("../database/models");
const fs = require('fs');
const path = require('path');

const mainController = {
    home: (req, res) => {
        return res.render('home');
    },
    carrito: (req, res) => {
        return res.render('cart');
    },
}

module.exports = mainController;