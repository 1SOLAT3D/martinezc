import express, { json } from 'express';
const app = express();
import { createConnection } from 'mysql';
import cors from 'cors';

app.use(json());

app.use(cors());

app.get('/msi2023/equipo', (req, res) => {

    const connection = createConnection({
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

app.get('/msi2023/equipo/:idEquipo', (req, res) => {
    if (typeof (req.params.idEquipo) === 'undefined') {
        res.json({ mensaje: "Debe enviar el parametro idEquipo en la cadena de consulta" });
    }

    const connection = createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'msi2023'
    });

    connection.connect();
    connection.query(`SELECT * FROM equipo WHERE idEquipo=${req.params.idEquipo}`, function (error, results, fields) {
        if (error) {
            res.json(error);
        }
        else {
            res.json(results);
        }
    });
    connection.end();
});

app.delete('/msi2023:idEquipo', (req, res) => {
    if (typeof (req.params.idEquipo) === 'undefined') {
        res.json({ estado: 0, resultado: "Debe enviar el parametro idEquipo en la cadena de consulta" });
    }

    const connection = createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'msi2023'
    });

    connection.connect();
    connection.query(`DELETE FROM equipo WHERE idEquipo=${req.params.idEquipo}`, function (error, results, fields) {
        if (results.affectedRows == 1) {
            res.json({
                estado: 1,
                resultado: 'Equipo borrado'
            });
        }
        else {
            res.json({
                estado: 0,
                resultado: "Ocurrió un error en la eliminacion"
            });
        }
    });
    connection.end();
});

app.post('/msi2023', (req, res) => {

    const connection = createConnection({
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

app.put('/msi2023/:idEquipo', (req, res) => {

    const connection = createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'msi2023'
    });

    connection.connect();
    let sentenciaSQL = "UPDATE equipo SET idRegion = " + req.body.idRegion + ", nombreEquipo = '" + req.body.nombreEquipo + "', acronimo = '" + req.body.acronimo + "', paisEquipo = '" + req.body.paisEquipo + "', seed = " + req.body.seed + " WHERE idEquipo = " + req.params.idEquipo;
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

app.listen(8082, (req, res) => {
    console.log('Servidor Express escuchando en el puerto 8082');
}
);