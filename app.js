var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001
    path = require('path');

app.use('/public', express.static('public'));
app.use('/', function (req, res) {
    res.sendfile(path.join(__dirname + '/index.html'));
});
app.listen(port);

console.log('Server started at http://localhost:%s/', port);
