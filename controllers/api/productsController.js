
const db = require('../../database/models/index.js');
const Product = db.products;

const controller = {
    list: function(req, res)  {
        Product.findAll()
            .then(products => {

                let productsWithUrl = [];
                        products.forEach(product => {
                            let newProduct = {
                                ...product.dataValues,
                                detail: `/api/products/${product.id}` 
                            }
                            productsWithUrl.push(newProduct);            
                        });

                let response = {
                    count: products.length,
                    products: productsWithUrl
                }
                res.json(response)
            });
    },
    detail: (req, res) => {
        Product.findByPk(req.params.id,)
        .then(product => {
            res.json(product)
        })
    }
}


module.exports = controller