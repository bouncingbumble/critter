const mongoose = require('mongoose');
const User = require('./user');

const messageSchema = new mongoose.Schema({
    
    message: {
        type: String,
        required: true,
        maxlength: 40
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

messageSchema.pre('remove', async function(next){
    var message = this;
    try {
        //find user
        let user = await User.findById(message.user);
        //remove the id of the message from their messages list
        user.messages.remove(message.id);
        //save that user
        await user.save();
        return next();
    }catch(err){
        return next(err);
    }
})

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;