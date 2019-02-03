const db = require('../models'),
    express = require('express'),
    jwt = require('jsonwebtoken');

exports.signin = async function(user){
    db.User.findOne({username: user.username, email: user.email}, 'password', (err, foundUser) => {
        console.log(foundUser)
        foundUser.comparePassword(user.password, errorHandler)
        .then(data => {
            console.log(data)
        })
    })
}

exports.signup = async function(req, res, next){
    try {
        //create user
        console.log(req.body)
        let user = await db.User.create(req.body);
        let { id, username, profileImageUrl } = user;
        //create a token
        let token = jwt.sign({
            id,
            username,
            profileImageUrl
            }, 
            process.env.SECRET_KEY
        );
        return res.status(200).json({
            id,
            username,
            profileImageUrl,
            token
        });
    }catch(err){
        if(err.code === 11000){
            err.message = "Sorry, that username and/or email is take";
        }
        return next({
            status: 400,
            message: err.message
        })
    }
}