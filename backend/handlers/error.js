//accepts an error object with
//status
//message

function errorHandler(error, request, response, next) {
    return response.status(error.status || 500).json({
        error: {
            message: error.message || "Something broke"
        }
    });
}

module.exports = errorHandler;