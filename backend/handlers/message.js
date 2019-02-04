const db = require('../models'),
    jwt = require('jsonwebtoken');

exports.createMessage = async function(req, res, next){
    try {
        //save message to db
        let message = await db.Message.create({
            message: req.body.message,
            user: req.params.id
        });

        console.log(req.params.id)
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

// api/user/:id/message/:message_id
exports.getMessage = async function(req, res, next){
    try {
        let messages = req.params.message_id != null ? 
            await db.Message.find({id: req.params.message_id}) : 
            await db.Message.find({user: req.params.id});

        res.status(200).json({messages: messages});
        
    }catch(err){
        return next({
            status: 400,
            message: err.message
        })
    }
}

exports.deleteMessage = async function(req, res, next) {
    try {
        let foundMessage = await db.Message.findById(req.params.message_id)
        console.log(foundMessage);
        if(foundMessage == null){
            return next({status: 400, message: 'Did not find message to delete'})
        }else {
            await db.Message.deleteOne(foundMessage);
            res.status(200).json(foundMessage);
        }
    }catch(err){
        return next({
            status: 400,
            message: err.message
        })
    }
}
