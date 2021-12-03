
const db = require('../../database/models/index.js');
const User = db.users;


const controller = {
    list: (req, res) => {
        User.findAll()
            .then(users => {
                let usersWithUrl = [];
                        users.forEach(user => {
                            let newUser = {
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                detail: `/api/users/${user.id}`
                            }
                            usersWithUrl.push(newUser);            
                        });

                let response = {
                    count: users.length,
                    users: usersWithUrl
                }
                res.json(response)
            })
    },
    detail: (req, res) => {
        User.findByPk(req.params.id)
            .then(user => {
                let response = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    avatar: `/images/users${user.image}`
                }
                res.json(response)
            })
    }
};
module.exports = controller;