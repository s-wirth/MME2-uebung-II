var express = require('express'),
    app = express(),
    port = process.env.PORT || 3001;

app.use(express.static('public'));

app.listen(port);

console.log('Server started at http://localhost:%s/', port);
