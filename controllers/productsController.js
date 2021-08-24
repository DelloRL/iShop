const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json')
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const controller = {
	// Show all products
	Iphones: (req, res) => {
		res.render("iphones",{products})
	},

    fundas:(req,res)=>{
        res.render("fundas", {products})
    },

    auriculares: (req,res)=> {
        res.render("auriculares", {products})
    },

	// Detail from one product
    detail: (req, res) => {
        let productId = req.params.id - 1;

        res.render('detail', { product: products[productId] })
    },

	// create
	create: (req, res) => {
	res.render("productAdd");
        let productosJSON = fs.readFileSync("src/data/products.json", {enconding:"utf-8"})

        let producto;

        if (productosJSON == ""){
            producto= [];
        } else {
            products =JSON.parse(productosJSON);
        };

        let product = {
            id:id,
            name:req.body.nombre,
            descripcion:req.body.price,
            categoria: req.body.category
        }

	},

	// store
	store: (req, res) => {
		let productsDataJSON = fs.readFileSync("src/data/productsDataBase.json",{encoding: "utf-8"})

		let products;

		if (productsDataJSON == ""){
			products = [];
		} else {
			products = JSON.parse(productsDataJSON);
		};

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

		fs.writeFileSync("src/data/productsDataBase.json",productsJSON)

		return res.redirect("/")
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
		res.send('updated');
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	},


};