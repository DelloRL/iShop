let db = require("../database/models");
const fs = require('fs');
const products = require("../database/models/products")

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
				res.render('products/detail', { product: products });
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
			created_at: new Date().toISOString().substring(0, 10)
		})
			.then(() => {
				return res.redirect('/products')
			})
			.catch(error => res.send(error))
	},

	// Update - Form to edit
	edit: function (req, res) {
		db.products.findByPk(req.params.id)
			.then(function (products) {
				res.render('products/productEdit', { products: products });
			})
	},

	update: function (req, res) {
		if (req.file != undefined) {
			db.products.update({
				name: req.body.productName,
				price: req.body.productPrice,
				category: req.body.productCategory,
				description: req.body.productDescription,
				image: req.file.filename,
			}, { where: { id: req.params.id } })
				.then(() => {
					res.redirect("/products");
				})
				.catch(err =>
					console.log(err)
				)
		} else {
			db.products.update({
				name: req.body.productName,
				price: req.body.productPrice,
				category: req.body.productCategory,
				description: req.body.productDescription,
				image: products.image
			}, { where: { id: req.params.id } })
				.then(() => {
					res.redirect("/products");
				})
				.catch(err =>
					console.log(err)
				)
		}


	},

	// Delete - Delete one product from DB
	destroy: function (req, res) {
		const id = req.params.id
		db.products.findByPk(id)
			.then((product) => {
				fs.unlinkSync(`./public/images/products/${product.image}`);
				db.products.destroy({ where: { id: req.params.id } })
					.then(() => {
						res.redirect('/products')
					})
			})
	},

	//CART FUNCTIONALITY
	addToCart: (req, res) => {
		console.log(req.session.userLogged.id);
		db.cart.create({
			users_id: req.session.userLogged.id,
			product_id: req.params.id
		})
			.then(() => {
				console.log('producto agregado')
			})
			.catch(err => {
				res.send(err)
			})
	},

	deleteToCart: (req, res) => {
        db.cart.destroy({
            where: {
                users_id: req.session.userLogged.id,
                product_id: req.params.id
            }
        })
            .then(() => {
                return res.redirect('/cart')
            })
            .catch(err => {
                res.send(err)
            })
    },
};

module.exports = productsController;
