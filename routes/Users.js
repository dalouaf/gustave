const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const User = require("../models/User")
users.use(cors())
process.env.SECRET_KEY = 'secret'
users.post('/register', (req, res) => {
    const today = new Date()
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        adresse: req.body.adresse,
        tel: req.body.tel,
        date: req.body.date,
        horaire_livraison: req.body.horaire_livraison,
        email: req.body.email,
        password: req.body.password,
        created: today
    }


User.findOne({
where:{
    email: req.body.email
}

})
.then(user => {
    if(!user){
        bcrypt.hash(req.body.password, 10, (err,hash) => {
            userData.password = hash
            User.create(userData)
            .then(user => {
                res.json({status: user.email + 'registred'})
            })
            .catch(err => {
                res.send('error:' + err)
            })

        })


    }else{
        res.json({error: "Utilisateur existant"})
    }
})
.catch(err => {
    res.send('error:' + err)
})
})

users.post('/login',(req, res) => {
    console.log("1111111111111111111111111111111111111111111111111111111111111111111");
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        console.log(user.dataValues);
        if(user){
            console.log(req.body.password);
            if(bcrypt.compareSync(req.body.password, user.dataValues.password)){
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{
                    expiresIn: 1440
                })
               res.send(token)
            
            }
        }else{
            res.status(400).json({user: "L'utilisateur n'existe pas"})

        }
    })
    .catch(err => {
        res.status(400).json({error: err})
    })
})

module.exports = users
 