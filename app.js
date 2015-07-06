var express = require('express');
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'views')));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/movies', function(req, res){
	fs.readFile('data.json', function(err, data) {
	    res.setHeader('Cache-Control', 'no-cache');
	    res.json(JSON.parse(data)['movies']);
	  });
});

app.post('/movies', function(req, res) {
  fs.readFile('data.json', function(err, data) {
    var movies = JSON.parse(data)['movies'];
    movies.push(req.body);
    fs.writeFile('data.json', JSON.stringify({"movies":movies}), function(err) {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(movies);
    });
  });
});

app.listen(app.get('port'), function(){
	console.log('App listening at http://localhost::%s', app.get('port'));
});