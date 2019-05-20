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

function updateIP(req,res) {
    let updateQuery = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    let query = mysql.format(updateQuery,["IP","ip",req.query.ip,"id","1"]);
    // query = UPDATE `todo` SET `notes`='Hello' WHERE `name`='shahid'
    pool.query(query,(err, response) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows updated
        console.log(response.affectedRows);
    });

    res.send("new ip = " + req.query.ip);
}

app.get("/",function(req,res){
  if(req.query.ip)
    updateIP(req,res);
  else
    handle_database(req,res);
});

app.listen(process.env.PORT || 5000);
