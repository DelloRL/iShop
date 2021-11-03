let db = require("../database/models");
const fs = require('fs');
const path = require('path');
const { promiseImpl } = require("ejs");

// function getProduts(){
// // 	const productsFilePath = path.join(__dirname, '../data/products.json');
// // 	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
// // 	return products;
// // };


const productsController = {
	// Show all products
	products:function (req, res) {
		db.products.findAll()
			.then(function(product){
				return res.render('products/products',{product:product});
			})
    },

	// Detail from one product
    detail: (req, res) => {
		db.products.findByPk(req.params.id)
		.then(function(products){
			res.render('products/detail',{products:products});
		})
    },

	// create + store
	create: (req, res) => {
		db.products.findAll()
			.then(function(products){
				res.render("products/productAdd", {products:products});
			})
	},
	store: function(req, res) {
		db.products.create({
			name: req.body.name,
			description: req.body.description,
			image: req.body.img,
			category: req.body.category,
			price: req.body.price, 
		});
		res.redirect("/products")
	},

	// Update - Form to edit
	edit: function (req, res) {
		let pedidoProducto = db.products.findByPk(req.params.id);
		Promise.all([pedidoProducto])
			.then(function([products]){
				res.render('products/productEdit', {products:products});
			})
	},

	update:(req,res) => {
		db.products.update({
			name: req.body.name,
			description: req.body.description,
			image: req.body.img,
			category: req.body.category,
			price: req.body.price, 
			}, {
				where: {
					id: req.params.id
				}
			});
		res.redirect("/products/" + req.params.id)
	},





	/* 			const products = getProduts()
		products.forEach(product =>{	
		})
		req.body.id = req.params.id;
		const producstUpdate = products.map(product=>{
			if(product.id == req.body.id){
				return product = req.body;
			}
			return product;
		})
		let updatedProductsJSON = JSON.stringify(producstUpdate);
		fs.writeFileSync('data/products.json', updatedProductsJSON);
		return res.redirect("../products/" + req.params.id);	 */

	// Delete - Delete one product from DB
	destroy : function(req, res){
		db.products.destroy({
			where: {
				id: req.params.id
			}
		})
		res.redirect("/products");
	}


};

module.exports = productsController;
