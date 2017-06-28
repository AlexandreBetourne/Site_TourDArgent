var express = require('express'); 
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = 1337;

var fs = require('fs');

app.use('/static/css', express.static(__dirname + '/assets/css'));
app.use('/static/js', express.static(__dirname + '/assets/js'));
app.use('/static/images', express.static(__dirname + '/assets/images'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/access', function(req, res){
	res.sendFile(__dirname + '/views/access.html');
});

app.get('/menu', function(req, res){
	res.sendFile(__dirname + '/views/menu.html');
});

app.get('/restaurant', function(req, res){
	res.sendFile(__dirname + '/views/restaurant.html');
});

app.get('/mentions_legales', function(req, res){
	res.sendFile(__dirname + '/views/mention_legales.html');
});

app.get('/credit', function(req, res){
	res.sendFile(__dirname + '/views/credit.html');
});

server.listen(port);
	console.log('Server listening on port' + port);








