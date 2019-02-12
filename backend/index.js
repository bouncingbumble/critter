require("dotenv").config(); //process.env_________
var express = require('express'),
    app = express(),
    port = 8081,
    cors = require("cors"),
    bodyParser = require('body-parser'),
    authRoutes = require('./routes/auth'),
    messageRoutes = require('./routes/message'),
    db = require('./models/index'),
    { authenticate, authorize } = require('./middleware/auth'),
    errorHandler = require('./handlers/error');

app.use(cors())
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/user/:id/message', authenticate, authorize, messageRoutes)
app.use('/api/user/:id/message/:message_id', authenticate, authorize, messageRoutes)
app.get('/', (req, res) => {
    res.sendFile('/Users/jordan/Documents/Dev/critter/backend/views/index.html');
})

app.get('/api/messages/all', async (req, res, next) => {
    try {
        let messages = await db.Message.find()
            .sort({createdAt: 'desc'})
            .populate("user", {
                username: true,
                profileImageUrl: true
            });
        res.status(200).json(messages);
    }catch(err){
        return next({status: 400, message: 'Error getting messages'});
    }
})


app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
})

app.use(errorHandler);


app.listen(port, () => console.log(`listening on port ${port}!`))