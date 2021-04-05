const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3050;
const app = express();
app.use(bodyParser.json());

const connection = mysql.createConnection({
    multipleStatements: true,
    host: 'localhost',
    user: 'root',
    password: 'P@ssw0rd',
    database: 'PracticaMIA'
});

//<--------------rutas----------------------------->

app.get('/',(req, res) => {
    res.send(`Universidad San Calos de Guatemala 
    <br> Facultad de Ingenieria
    <br> Manejo e Implementacion de Archivos
    <br> Elder Andrade
    <br> 201700858`)
});

// Consulta1 

app.get('/consulta1',(req, res) => {
    const sql = ``;
    connection.query(sql,(error, results) => {
        if (error) throw error;
        if (results.length > 0){
            res.json(results);
        }else{
            res.send('No hay nada');
        }
    });
});

// Consulta2 

app.get('/consulta2',(req, res) => {
    const sql = ``;
    connection.query(sql,(error, results) => {
        if (error) throw error;
        if (results.length > 0){
            res.json(results);
        }else{
            res.send('No hay nada');
        }
    });
});

// Consulta3 

app.get('/consulta3',(req, res) => {
    const sql = ``;
    connection.query(sql,(error, results) => {
        if (error) throw error;
        if (results.length > 0){
            res.json(results);
        }else{
            res.send('No hay nada');
        }
    });
});

// Consulta4 

app.get('/consulta4',(req, res) => {
    const sql = ``;
    connection.query(sql,(error, results) => {
        if (error) throw error;
        if (results.length > 0){
            res.json(results);
        }else{
            res.send('No hay nada');
        }
    });
});

// Consulta5 

app.get('/consulta5',(req, res) => {
    const sql = ``;
    connection.query(sql,(error, results) => {
        if (error) throw error;
        if (results.length > 0){
            res.json(results);
        }else{
            res.send('No hay nada');
        }
    });
});

// Consulta6 

app.get('/consulta6',(req, res) => {
    const sql = ``;
    connection.query(sql,(error, results) => {
        if (error) throw error;
        if (results.length > 0){
            res.json(results);
        }else{
            res.send('No hay nada');
        }
    });
});

// Consulta7 

app.get('/consulta7',(req, res) => {
    const sql = ``;
    connection.query(sql,(error, results) => {
        if (error) throw error;
        if (results.length > 0){
            res.json(results);
        }else{
            res.send('No hay nada');
        }
    });
});

// Consulta8 

app.get('/consulta8',(req, res) => {
    const sql = ``;
    connection.query(sql,(error, results) => {
        if (error) throw error;
        if (results.length > 0){
            res.json(results);
        }else{
            res.send('No hay nada');
        }
    });
});

// Consulta9 

app.get('/consulta9',(req, res) => {
    const sql = ``;
    connection.query(sql,(error, results) => {
        if (error) throw error;
        if (results.length > 0){
            res.json(results);
        }else{
            res.send('No hay nada');
        }
    });
});

// Consulta10 

app.get('/consulta10',(req, res) => {
    const sql = ``;
    connection.query(sql,(error, results) => {
        if (error) throw error;
        if (results.length > 0){
            res.json(results);
        }else{
            res.send('No hay nada');
        }
    });
});

// eliminarTemporal

app.delete('/eliminarTemporal',(req, res) => {
    const sql = `DROP TABLE Temporal`;
    connection.query(sql, error => {
        if (error) throw error;
        res.send('Temporal eliminada')
    });
});

// eliminarModelo

app.delete('/eliminarModelo',(req, res) => {
    const sql = `DROP TABLE `;
    connection.query(sql, error => {
        if (error) throw error;
        res.send('Modelo eliminado')
    });
});

// cargarTemporal

app.post('/cargarTemporal',(req, res) => {
    var sql = `
    CREATE TABLE Temporal (
        NOMBRE_VICTIMA VARCHAR(255) NULL,
        APELLIDO_VICTIMA VARCHAR(255) NULL,
        DIRECCION_VICTIMA VARCHAR(255) NULL,
        FECHA_PRIMERA_SOSPECHA DATETIME NULL,
        FECHA_CONFIRMACION DATETIME NULL,
        FECHA_MUERTE DATETIME NULL,
        ESTADO_VICTIMA VARCHAR(255) NULL,
        NOMBRE_ASOCIADO VARCHAR(255) NULL,
        APELLIDO_ASOCIADO VARCHAR(255) NULL,
        FECHA_CONOCIO DATETIME NULL,
        CONTACTO_FISICO VARCHAR(255) NULL,
        FECHA_INICIO_CONTACTO DATETIME NULL,
        FECHA_FIN_CONTACTO DATETIME NULL,
        NOMBRE_HOSPITAL VARCHAR(255) NULL,
        DIRECCION_HOSPITAL VARCHAR(255) NULL,
        UBICACION_VICTIMA VARCHAR(255) NULL,
        FECHA_LLEGADA DATETIME NULL,
        FECHA_RETIRO DATETIME NULL,
        TRATAMIENTO VARCHAR(255) NULL,
        EFECTIVIDAD INT DEFAULT NULL,
        FECHA_INICIO_TRATAMIENTO DATETIME NULL,
        FECHA_FIN_TRATAMIENTO DATETIME NULL,
        EFECTIVIDAD_EN_VICTIMA INT DEFAULT NULL
    );
    LOAD DATA
    INFILE '/var/lib/mysql-files/GRAND_VIRUS_EPICENTER.csv'
    INTO TABLE Temporal
    FIELDS TERMINATED BY ';'
    LINES TERMINATED BY '\\n'
    IGNORE 1 ROWS;
    `;
    connection.query(sql, error => {
        if (error) throw error;
        res.send('Temporal cargada')
    });
});

// cargarModelo

app.post('/cargarModelo',(req, res) => {
    var sql = ``;
    connection.query(sql, error => {
        if (error) throw error;
        res.send('Modelo cargado')
    });
});

connection.connect(error => {
    if(error) throw error;
    console.log('Base de Datos Funciona');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
