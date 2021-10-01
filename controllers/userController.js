const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const User = require('../models/user')

// function getUsers(){
// 	const usersFilePath = path.join(__dirname, '../data/users.json');
// 	const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
// 	return users;
// };

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
    profile: (req,res) => {
        return res.render('users/profile');
    },
    editarUsuarios: (req, res) => {
        return res.render('userEdit');
    },
    login: (req,res) => {
        return res.render('users/login')
    },
    processLogin: (req,res) => {
        let userToLogin = User.findByField('email', req.body.email)
        
        if(userToLogin) {
            let passwordHash = bcrypt.compareSync(req.body.password, userToLogin.password)
            if (passwordHash) {
                return res.send('Podes ingresar perrito')
            }
        }

        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'Las credenciales son inválidas'
                }
            }
        })
    }
}

