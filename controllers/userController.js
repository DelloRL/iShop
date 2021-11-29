let db = require("../database/models");
const fs = require('fs');
const path = require('path');
const { validationResult, header } = require('express-validator');
const bcrypt = require('bcryptjs')
const cookie = require('cookie-parser');
const users = require("../database/models/users")


const userController = {
    // create + store
	create: (req, res) => {
		db.users.findAll()
			.then(function (users) {
				res.render('users/login_register', { users: users });
			})
	},
	store: function (req, res) {
		db.users.create({
			name: req.body.nameRegister,
			email: req.body.emailRegister,
			avatar: req.file.avatar,
			password: req.body.passwordRegister,
			//role: req.body.productPrice,
		})
			.then(() => {
                alert("Usuario creado exitosamente!")
				return res.redirect('users/login_register')
			})
			.catch(error => res.send(error))
	},


    login: (req, res) => {
        return res.render('users/login_register')
    },
    processLogin: (req, res) => {
        let userToLogin = db.users.findAll({
            where : { 'email': req.body.emailLogin }
        });

        if (userToLogin) {
            let passwordHash = bcrypt.compareSync(req.body.passwordLogin, userToLogin.password)
            if (passwordHash) {
                delete userToLogin.password
                req.session.userLogged = userToLogin
                return res.redirect('/profile')
            }

            if (req.body.rememberMe != undefined) {
                res.cookie('rememberMe', userLogged.emailLogin, { maxAge: 60000 })
            }
        }

        return res.render('users/login_register', {
            errors: {
                emailLogin: {
                    msg: 'Las credenciales son inválidas'
                }
            }
        })
    },
    profile: (req, res) => {
        return res.render('users/profile', {
            user: req.session.userLogged
        });
    },
    logout: (req, res) => {
        req.session.destroy();
        res.cookie('email', null, { maxAge: -1 });
        res.redirect('/home')
    },
    editarUsuarios: (req, res) => {
        return res.render('userEdit');
    }
}

module.exports = userController;