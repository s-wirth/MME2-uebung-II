var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use('/public', function (req, res) {
    var data = '<h1>welcome to public</h1>';

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data)
});

app.use('/', function (req, res) {
    var data = '<h1>hello world</h1>';

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data)
});

app.listen(port);

console.log('server started at port %s ', port);