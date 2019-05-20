var express    = require("express");
var mysql      = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_MARIA_URL);
var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");
} else {
    console.log("Error connecting database ... nn");
}
});

app.get("/",function(req,res){
connection.query('SELECT id, ip FROM IP WHERE id=1', function(err, rows, fields) {
  if (!err)
    res.send('The solution is: ', rows);
  else
    res.send('Error while performing Query.');
  });
});

app.listen(process.env.PORT || 5000);

connection.end();
