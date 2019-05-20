var express   =    require("express");
var mysql     =    require('mysql');
var app       =    express();
//var connection = mysql.createConnection(process.env.JAWSDB_MARIA_URL);

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'hrr5mwqn9zs54rg4.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
    user     : 'z6g3bc6tjeqowqft',
    password : 'ayjhjld7h8i9z2zl',
    database : 'jiakilpheub0l1o3',
    debug    :  false
});

function handle_database(req,res) {
       // connection will be acquired automatically
       pool.query("SELECT id, ip FROM IP WHERE id=1",function(err,rows){
        if(err) {
            return res.json({'error': true, 'message': 'Error occurred'+err});
        }
                //connection will be released as well.
                res.json(rows);
       });
}

app.get("/",function(req,res){-
        handle_database(req,res);
});

app.listen(process.env.PORT || 5000);
