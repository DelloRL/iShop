let db = require("../database/models");
const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const cookie = require('cookie-parser')


const userController = {
    
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
        
        let userInDB = User.findByField('email', req.body.emailLogin)

        if(userInDB) {
            return res.render('users/login_register', {
                errors: {
                    emailLogin: {
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
        return res.render('users/login_register')
    },
    processLogin: (req,res) => {
        let userToLogin = User.findByField('email', req.body.emailLogin)
        
        if(userToLogin) {
            let passwordHash = bcrypt.compareSync(req.body.password, userToLogin.password)
            if (passwordHash) {
                delete userToLogin.password
                req.session.userLogged = userToLogin
                return res.redirect('/profile')
            }

            if(req.body.rememberMe != undefined){
            res.cookie('rememberMe',userLogged.emailLogin,{maxAge: 60000})   
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
    profile: (req,res) => {
        return res.render('users/profile', {
            user: req.session.userLogged
        });
    },
    logout: (req,res) =>{
        req.session.destroy();
        res.cookie('email',null,{maxAge: -1});
        res.redirect('/home')
    },
    editarUsuarios: (req, res) => {
        return res.render('userEdit');
    }
}

module.exports = userController;