const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());

app.use(cors());

app.get('/msi2023',(req, res)=>{
    if(typeof(req.query.idEquipo)=== 'undefined'){
        res.json({mensaje:"Debe enviar el parametro idEquipo en la cadena de consulta"});
    }

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'msi2023'
    });

connection.connect();
connection.query(`SELECT * FROM equipo WHERE idEquipo=${req.query.idEquipo}`, function(error, results, fields){
    if (error) {
        res.json(error);
    }
    else{
    res.json(results);
    }
   });
    connection.end();
});


app.post('/equipo', (req, res) =>{
    console.log(req.body);
    res.send('Servidor Express contestando a Peticion POST');
});


app.listen(8082, (req,res) =>{
    console.log('Servidor Express escuchando en el puerto 8082');
}
);