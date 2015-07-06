var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'views')));
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/movies', function(req, res){
	fs.readFile('data.json', function(err, data) {
	    res.setHeader('Cache-Control', 'no-cache');
	    res.json(JSON.parse(data)['movies']);
	  });
});

app.listen(app.get('port'), function(){
	console.log('App listening at http://localhost::%s', app.get('port'));
});