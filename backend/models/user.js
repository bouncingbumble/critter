const mongoose = require('mongoose'),
    bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        unique: true
    },
    profileImage: {
        type: String
    }
})

//this is a pre save hook that will execute before any user info is sent to the DB
//reference article - http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt
userSchema.pre("save", async function(next){
    var user = this;
    try {
        //only hash the password if it has been modified or it is new
        if(!user.isModified("password")){
            return next();
        }

        //hash the password with a salt factor of 10
        let hashedPassword = await bcrypt.hash(user.password, 10);
        //set the hashed password to be the user's password
        user.password = hashedPassword;
        return next();
    } catch(err){
        return next(err);
    }
});

userSchema.method.comparePassword = async function(candidatePassword, next) {
    var user = this;
    try {
        //plain text password gets passed into bcrypt and hashed then compared with the users hashed password
        let isMatch = await bcrypt.compare(candidatePassword, user.password);
        return isMatch;
    }
    catch (err) {
        return next(err);
    }
}

const User = mongoose.model('User', userSchema);

module.exports = User;