require("dotenv").config();
var express = require('express'),
    app = express(),
    port = process.env.PORT || 6969,
    cors = require("cors"),
    bodyParser = require('body-parser'),
    authRoutes = require('./routes/auth')
    errorHandler = require('./handlers/error');

app.use(cors())
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.sendFile('index.html');
})


// ROUTES

app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
})

app.use(errorHandler);


app.listen(port, () => console.log(`listening on port ${port}!`))