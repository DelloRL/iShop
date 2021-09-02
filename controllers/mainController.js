const controller = {
    home: (req, res) => {
        return res.render('home');
    },
    login: (req, res) => {
        return res.render('LoginYRegistro');
    },
    carrito: (req, res) => {
        return res.render('Carrito');
    },
    editarUsuarios: (req, res) => {
        return res.render('userEdit')
    }
}

module.exports = controller;