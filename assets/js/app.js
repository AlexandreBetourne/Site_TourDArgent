var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var connection = function(){
	return mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'root',
		database : 'tourdargent',
		socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock'
	});
}
var app = express();

// we add to express the body-parser add-on allowing us to read req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// WE POST ON API CLIENTS THEIR IDENTITY
app.post('/', function(req, res){
	var q = "INSERT INTO clients (firstname, lastname, email, telephone, resa, clients) VALUES ('"+ req.body.firstname +"', '"+ req.body.lastname +"', '"+ req.body.email +"', '"+ req.body.telephone +"', '"+ req.body.resa+"', "+ req.body.clients +")"

    var co = connection()
    
    console.log(q)

    co.connect();
	co.query(q, function (error, results, fields) {
		  if (error) return console.log(error);
		  console.log(results)
	});
	co.end();
    
	res.send('blabla'); 
});

// WE GET THESE INFORMATIONS
app.get('/api/clients', function(req, res){
	var q = 'SELECT * FROM clients';

	var co = connection()
	co.query(q, function (error, results, fields) {
		  if (error) return console.log(error);
		  res.send(results);
	});
	co.end();
})


app.listen(1337);
console.log('app listening on port 1337');