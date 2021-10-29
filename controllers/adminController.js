let db = require("../database/models");
const path = require('path');
const fs = require('fs');

adminController = {
    index: (req,res) =>{
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        res.render(path.resolve(__dirname, '../views/admin/admin'), {products});
    },
}

module.exports = adminController;