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
    editarUsuarios: (req, res) => {
        return res.render('userEdit')
    }
}

module.exports = controller;