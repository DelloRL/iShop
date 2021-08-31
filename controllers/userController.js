{
    search: function(req, res){
        let loQueBuscaElUsuario = req.query.search;

        let users = [
            {id: 1, name: "Fran"},
            {id: 2, name: "Mauri"},
            {id: 3, name: "Lucas"},
            {id: 4, name: "Pane"},
            {id: 5, name: "Ro"},
        ];

        let usersResults = [];
        for (let i = 0; i < users.length; i++) {
            if (users[i].name.includes(loQueBuscaElUsuario)){
                usersResults.push(users[i]);
            }
        }
    },
    create: function(req, res) {
        let usuario = {
            nombre: req.body.txtNombre,
            usuario: req.body.txtUsuario,
            contrasena: req.body.txtContrasena,
        }

        //GUARDA
        res.redirect("/users/list")
    },


    edit: function(req, res) {
        let idUser = req.params.idUser;

        let users = [
            {id: 1, name: "Fran"},
            {id: 2, name: "Mauri"},
            {id: 3, name: "Lucas"},
            {id: 4, name: "Pane"},
            {id: 5, name: "Ro"},
        ];

        let userToEdit = users[idUser];

        res.render("userEdit", {userToEdit: userToEdit});
    }
};



module.exports = userController;