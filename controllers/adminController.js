let db = require("../database/models");
const path = require('path');
const fs = require('fs');

adminController = {
    index: (req,res) =>{
        let products = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/products.json')));
        res.render(path.resolve(__dirname, '../views/admin/admin'), {products});
    },    
    index: function (req, res) {
		db.products.findAll()
			.then(function(product){
				return res.render('../views/admin/admin',{product:product});
			})
    }
}

module.exports = adminController;