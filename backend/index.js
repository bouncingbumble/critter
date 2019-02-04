require("dotenv").config(); //process.env_________
var express = require('express'),
    app = express(),
    port = process.env.PORT || 6969,
    cors = require("cors"),
    bodyParser = require('body-parser'),
    authRoutes = require('./routes/auth'),
    messageRoutes = require('./routes/message'),
    { authenticate, authorize } = require('./middleware/auth'),
    errorHandler = require('./handlers/error');

app.use(cors())
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.use('/api/auth', authRoutes);
app.use('/api/user/:id/message', authenticate, authorize, messageRoutes)
app.use('/api/user/:id/message/:message_id', authenticate, authorize, messageRoutes)
app.get('/', (req, res) => {
    res.sendFile('/Users/jordan/Documents/Dev/critter/backend/views/index.html');
})


// ROUTES

app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
})

app.use(errorHandler);


app.listen(port, () => console.log(`listening on port ${port}!`))