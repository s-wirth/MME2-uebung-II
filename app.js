var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    path = require('path');


app.use('/public', function (req, res) {
    res.sendfile(path.join(__dirname + '/public/index.html'));
});

app.use('/', function (req, res) {
    res.sendfile(path.join(__dirname + '/index.html'));
});

app.listen(port);

console.log('server started at port %s ', port);