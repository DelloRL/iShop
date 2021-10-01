const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const User = require('../models/user')


module.exports = {
    register: (req,res) => {
        return res.render('users/login_register');
    },
    processRegister: (req,res) => {
        const resultValidation = validationResult(req)

        if(resultValidation.errors.length > 0){
            return res.render('users/login_register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        
        let userInDB = User.findByField('email', req.body.email)

        if(userInDB) {
            return res.render('users/login_register', {
                errors: {
                    email: {
                        msg: 'Este email ya esta registrado'
                    }
                },
                oldData: req.body
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }

        let userCreated = User.create(userToCreate)
        res.redirect("/login")
    },
    login: (req,res) => {
        return res.render('users/login')
    },
    processLogin: (req,res) => {
        let userToLogin = User.findByField('email', req.body.email)
        
        if(userToLogin) {
            let passwordHash = bcrypt.compareSync(req.body.password, userToLogin.password)
            if (passwordHash) {
                delete userToLogin.password
                req.session.userLogged = userToLogin
                return res.redirect('/profile')
            }
        }

        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'Las credenciales son inválidas'
                }
            }
        })
    },
    profile: (req,res) => {
        return res.render('users/profile', {
            user: req.session.userLogged
        });
    },
    logout: (req,res) => {
        req.session.destroy()
        return res.redirect("/home")
    },
    editarUsuarios: (req, res) => {
        return res.render('userEdit');
    },
}

