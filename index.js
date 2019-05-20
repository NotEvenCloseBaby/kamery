const mysql = require('mysql');
const http = require('http');
const PORT = process.env.PORT || 5000;

const db = mysql.createConnection(process.env.JAWSDB_MARIA_URL);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello World!\n');

  db.connect();
  db.query('SELECT id, ip FROM IP WHERE id=1', function(err, rows, fields) {
    if (err) throw err;

    res.write(rows[0].ip);
  });
  db.end();

  res.end(); //end the response
});
server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
