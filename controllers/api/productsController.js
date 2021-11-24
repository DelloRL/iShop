
const db = require('../../database/models/index.js');
const Product = db.products;

const controller = {
    list: function(req, res)  {
        Product.findAll()
            .then(products => {
                let response = {
                    count: products.length,
                    products: products
                }
                res.json(response)
            });
    }
}


module.exports = controller