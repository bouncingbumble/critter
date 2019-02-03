require('dotenv').load();
const jwt = require('jsonwebtoken');

// make sure the user is logged in - Authenticattion
exports.authenticate = function(req, res, next) {
    try {
        const token = req.headers.autherization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
            if(decoded){
                return next();
            }else {
                return next({
                    status: 401,
                    message: 'Please login first'
                })
            }
        });
    }catch(err){
        return next({
            status: 401,
            message: 'Please login first'
        })
    }

}
// make sure we get the correct user - Authorization

