const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());

app.use(cors());

app.get('/msi2023', (req, res) => {

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'msi2023'
    });

    connection.connect();
    connection.query(`SELECT * FROM equipo`, function (error, results, fields) {
        if (error) {
            res.json(error);
        }
        else {
            res.json(results);
        }
    });
    connection.end();
});

app.get('/msi2023/:idEquipo',(req, res)=>{
    if(typeof(req.params.idEquipo)=== 'undefined'){
        res.json({mensaje:"Debe enviar el parametro idEquipo en la cadena de consulta"});
    }

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'msi2023'
    });

connection.connect();
connection.query(`SELECT * FROM equipo WHERE idEquipo=${req.params.idEquipo}`, function(error, results, fields){
    if (error) {
        res.json(error);
    }
    else{
    res.json(results);
    }
   });
    connection.end();
});

app.delete('/msi2023/:idEquipo', (req, res) => {
    if(typeof(req.params.idEquipo)=== 'undefined'){
        res.json({estado:0, resultado:"Debe enviar el parametro idEquipo en la cadena de consulta"});
    }

    const connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'msi2023'
    });

    connection.connect();
    connection.query(`DELETE FROM equipo WHERE idEquipo=${req.params.idEquipo}`, function(error, results, fields){
        if (results.affectedRows==1) {
            res.json({estado : 1,
            resultado: 'Equipo borrado'});
        }
        else{
            res.json({estado : 0,
            resultado: "Ocurrió un error en la eliminacion"});
        }
    });
    connection.end();
});

app.post('/msi2023', (req, res) => {

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'msi2023'
    });

    connection.connect();
    let sentenciaSQL = "insert into equipo values (" + req.body.idEquipo + "," + req.body.idRegion + ", '" + req.body.nombreEquipo + "', '" + req.body.acronimo + "', '" + req.body.paisEquipo + "', " + req.body.seed + ");"
    console.log(sentenciaSQL);
    connection.query(sentenciaSQL, function (error, results, fields) {
        if (error) {
            res.json(error);
        }
        else {
            res.json(results);
        }
    });
    connection.end();
});

app.listen(8082, (req,res) =>{
    console.log('Servidor Express escuchando en el puerto 8082');
}
);