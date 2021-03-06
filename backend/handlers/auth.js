const db = require('../models'),
    jwt = require('jsonwebtoken'),
    errorHandler = require('./error')

exports.signin = async function(req, res, next){
    console.log(req.body)
    try {
        let foundUser = await db.User.findOne({email: req.body.email});
            console.log(foundUser)
        let found = await foundUser.comparePassword(req.body.password, errorHandler);
   
        if(found){
            let { username, messages, profileImageUrl } = foundUser;
            let token = jwt.sign({
                    id: foundUser._id,
                    username,
                    messages,
                    profileImageUrl
                }, 
                process.env.SECRET_KEY
            );

            return res.status(200).json({
                username,
                messages,
                profileImageUrl,
                token
            });
        }else {
            console.log('error')
            let err = new Error("Wrong password");
            err.status = 400;
            next(err)
        }
    }catch(err){
        return next({
            status: 400,
            message: err.message
        })
    }

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
            username
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
            err.message = "Sorry, that username and/or email is taken";
        }
        return next({
            status: 400,
            message: err.message
        })
    }
}