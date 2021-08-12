const controller = {
    home: (req, res) => {
        return res.render('home');
    },
    login: (req, res) => {
        return res.render('LoginYRegistro');
    },
    upload: (req, res) => {
        return res.render('productAdd');
    },
    detalle: (req, res) => {
        return res.render('detalle');
    },
    carrito: (req, res) => {
        return res.render('Carrito');
    },
    iphones: (req, res) => {
        return res.render('storeiPhone');
    },
    fundas: (req, res) => {
        return res.render('storeFundas');
    },
    auriculares: (req, res) => {
        return res.render('storeAuriculares');
    },
}

module.exports = controller;