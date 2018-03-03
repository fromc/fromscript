var express = require('express');
    app = express();

app.use(app.router);

app.get('/', funciton(req, res){
    res.sendfile(__dirname + '/public/main.html');
});

app.listen(3000);

