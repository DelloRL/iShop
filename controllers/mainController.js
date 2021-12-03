let db = require("../database/models");
const products = require("../database/models/products")

const mainController = {
    home: (req, res) => {
        return res.render('home');
    },
    carrito: (req, res) => {
        db.products.findAll({
            include: [
                {
                    model: Cart,
                    as: 'cart',
                    where: {
                        users_id: req.session.userLogged.id
                    },
                }]
        })
            .then((products) => {
                return res.render('./cart', { products });
            })
        return res.render('cart');
    },
}

module.exports = mainController;