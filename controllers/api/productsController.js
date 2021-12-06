
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

                const lastProduct = products.sort(function(a,b){

                    return new Date(b.created_at) - new Date(a.created_at);
                }) [0];

                let iphoneCategory =  products.filter(product => product.category === "IPhones").length
                let auricularesCategory = products.filter(product => product.category === "Auriculares").length
                let fundasCategory = products.filter(product => product.category === "Fundas y protección").length

                let response = {
                    count: products.length,
                    products: productsWithUrl,
                    lastProduct,
                    categorys: {
                        iphoneCategory,
                        auricularesCategory,
                        fundasCategory
                    }
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