require('dotenv').load();
const jwt = require('jsonwebtoken');

// make sure the user is logged in - Authenticattion
exports.authenticate = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
            console.log(token)
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
exports.authorize = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded){
            if(decoded && decoded.id == req.params.id){
                return next();
            }else {
                return next({
                    status: 401,
                    message: 'Unauthorized'
                })
            }
        });
    }catch(err){
        return next({
            status: 401,
            message: 'Unauthorized'
        })
    }
}
