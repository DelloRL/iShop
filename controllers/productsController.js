let db = require("../database/models");
const fs = require('fs');

const productsController = {
	// Show all products
	products: function (req, res) {
		db.products.findAll()
			.then(function (product) {
				return res.render('products/products', { product: product });
			})
	},

	// Detail from one product
	detail: (req, res) => {
		db.products.findByPk(req.params.id)
			.then(function (products) {
				res.render('products/detail', { products: products });
			})
	},

	// create + store
	create: (req, res) => {
		db.products.findAll()
			.then(function (products) {
				res.render("products/productAdd", { products: products });
			})
	},
	store: function (req, res) {
		db.products.create({
			name: req.body.productName,
			description: req.body.productDescription,
			image: req.file.filename,
			category: req.body.productCategory,
			price: req.body.productPrice,
		})
			.then(() => {
				return res.redirect('/products')
			})
			.catch(error => res.send(error))
	},

	// Update - Form to edit
	edit: function (req, res) {
		let pedidoProducto = db.products.findByPk(req.params.id);
		Promise.all([pedidoProducto])
			.then(function ([products]) {
				res.render('products/productEdit', { products: products });
			})
	},

	update: (req, res) => {
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

	// Delete - Delete one product from DB
	destroy : function(req, res){
		const id = req.params.id
		db.products.findByPk(id)
		.then((product) => {
			fs.unlinkSync(`./public/images/products/${product.image}`);
			db.products.destroy({ where: { id: req.params.id } })
				.then(() => {
					res.redirect('/products')
				})
		})
	}

};

module.exports = productsController;
