const mysql = require('mysql');
const config = require('../config/config');

var conn = mysql.createConnection({
  host     : config.DB_HOST,
  user     : config.DB_USER,
  password : config.DB_PASS,
  database : config.DB_NAME,
  port     : config.DB_PORT
});

conn.connect(
    (err) => {
        if(!err){
            console.log("Conexion establecida");
        }else{
            console.log("Conexion fallida")
            console.log(err)
        }
    }
)

module.exports = conn;
