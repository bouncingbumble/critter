const db = require('../models'),
    jwt = require('jsonwebtoken');

exports.createMessage = async function(req, res, next){
    try {
        console.log(req)

        //save message to db
        let message = await db.Message.create({
            message: req.body.message,
            user: req.params.id
        });

        //get full user doc and save with new message id added to array
        let foundUser = await db.User.findById(req.params.id);
        foundUser.messages.push(message.id);
        await foundUser.save();

        //get the message with the specified user fields populated instead of just an id
        let foundMessage = await db.Message.
            findById(message.id).
            populate("user", {
                username: true,
                profileImageUrl: true
            });

        res.status(201).json(foundMessage);

    }catch(err){
        return next({
            status: 400,
            message: err.message
        })
    }

}

exports.getMessage = async function(req, res, next){
    try {
        let user = await db.User.findById(req.params.id);
        let messages = await db.Message.find({user: user});

        res.status(200).json({messages: messages});
    }catch(err){
        return next({
            status: 400,
            message: err.message
        })
    }
}

exports.deleteMessage = async function(req, res, next) {

}