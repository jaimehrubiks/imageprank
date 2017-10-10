var express = require('express');
var app = express();

app.get('/noticia.jpg', function (req, res) {
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        var op = ip.replace(/[^0-9]/g, '').split("").reduce((a,b)=>(Number(a)+Number(b)))%2;
        res.sendFile(op + '.jpg', {root: 'public'});
});

app.listen(6767, function () { });


