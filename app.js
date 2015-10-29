var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mime = require('mime'),
    type = mime.lookup(path);


app.use('/public', function (req, res) {
    var charset = mime.charsets.lookup(type);
    res.setHeader('Content-Type', type + (charset ? '; charset=' + charset : ''));
    res.sendfile(path.join(__dirname + '/public/index.html'));
});

app.use('/', function (req, res) {
    res.sendfile(path.join(__dirname + '/index.html'));
});

app.listen(port);

console.log('server started at port %s ', port);