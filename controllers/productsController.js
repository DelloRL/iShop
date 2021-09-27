const fs = require('fs');
const path = require('path');

function getProduts(){
	const productsFilePath = path.join(__dirname, '../data/products.json');
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products;
};


const controller = {
	// Show all products
	products: (req, res) => {
		const products = getProduts();
        res.render('products/products', { products })
    },
	// Detail from one product
    detail: (req, res) => {
        let productId = req.params.id - 1;
		const products = getProduts();
        res.render('products/detail', { product: products[productId] })
    },

	// create
	create: (req, res) => {
		res.render("products/productAdd");
	},

	// store
	store: (req, res) => {
		const products = getProduts();

		let id = products.length + 1;
	
		let product = {
			id: id,
			name: req.body.name,
			description:req.body.description,
			price:req.body.price,
			category: req.body.category,
			image:req.file.filename
		};
		products.push(product);

		let productsJSON = JSON.stringify(products);

		fs.writeFileSync('data/products.json', productsJSON);
		return res.redirect("/")
	},

	// Update - Form to edit
	edit: (req, res) => {
			const products = getProduts();
			products.forEach(product => {
				if (product.id == req.params.id) {
					res.render('products/productEdit', { product: product });
				}
			});
	},

	update:(req,res)=>{
		const products = getProduts()

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

        return res.redirect("../products/" + req.params.id);
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const products = getProduts();

		let idProducto = products.findIndex(product => {
			return product.id == req.params.id;
		});

		products.splice(idProducto, 1);

		let updatedProductsJSON = JSON.stringify(products);
        fs.writeFileSync('data/products.json', updatedProductsJSON);
		
		return res.redirect("/products");
	},


};

module.exports = controller
