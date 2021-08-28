const fs = require('fs');
const path = require('path');
const uuid = require("uuid");
const productsFilePath = path.join(__dirname, '../data/products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const controller = {
	// Show all products
	products: (req, res) => {
        res.render('products', {products})
    },
	// Detail from one product
    detail: (req, res) => {
        let productId = req.params.id - 1;

        res.render('detail', { product: products[productId] })
    },

	// create
	create: (req, res) => {
		res.render("productAdd");
	},

	// store
	store: (req, res) => {
		let productsDataJSON = fs.readFileSync("data/products.json",{encoding: "utf-8"})

		let products;

		if (productsDataJSON == ""){
			products = [];
		} else {
			products = JSON.parse(productsDataJSON);
		};

		let id = uuid.v4()
	
		
		
		let product = {
			id: id,
			name: req.body.name,
			description:req.body.description,
			price:req.body.price,
			discount:req.body.discount,
			category: req.body.category,
			image:req.file.filename
		};
		products.push(product);

		let productsJSON = JSON.stringify(products);

	fs.appendFileSync("data/products.json",productsJSON)

	//	return res.redirect("/")
		res.send(productsJSON)
	},

	// Update - Form to edit
    edit: (req, res) => {
        products.forEach(product => {
            if (product.id == req.params.id) {
                res.render('product-edit-form', { product: product });
            }
        });
	},
	// Update - Method to update
	update: (req, res) => {
		res.render('products', {product});
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	},


};

module.exports = controller