const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3050;
const app = express();
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P@ssw0rd',
    database: 'PracticaMIA'
});

//<--------------rutas----------------------------->

app.get('/',(req, res) => {
    res.send('Tabla Temporal Creada')
});

// Consulta1 

app.get('/consulta1',(req, res) => {
    res.send('Consulta1')
});

// Consulta2 

app.get('/consulta2',(req, res) => {
    res.send('Consulta2')
});

// Consulta3 

app.get('/consulta3',(req, res) => {
    res.send('Consulta3')
});

// Consulta4 

app.get('/consulta4',(req, res) => {
    res.send('Consulta4')
});

// Consulta5 

app.get('/consulta5',(req, res) => {
    res.send('Consulta5')
});

// Consulta6 

app.get('/consulta6',(req, res) => {
    res.send('Consulta6')
});

// Consulta7 

app.get('/consulta7',(req, res) => {
    res.send('Consulta7')
});

// Consulta8 

app.get('/consulta8',(req, res) => {
    res.send('Consulta8')
});

// Consulta9 

app.get('/consulta9',(req, res) => {
    res.send('Consulta9')
});

// Consulta10 

app.get('/consulta10',(req, res) => {
    res.send('Consulta10')
});

// eliminarTemporal

app.get('/eliminarTemporal',(req, res) => {
    res.send('Temporal Eliminada')
});

// eliminarModelo

app.get('/eliminarModelo',(req, res) => {
    res.send('Modelo Eliminado')
});

// cargarTemporal

app.get('/cargarTemporal',(req, res) => {
    res.send('Temporal Cargada')
});

// cargarModelo

app.get('/cargarModelo',(req, res) => {
    res.send('Modelo cargado')
});

connection.connect(error => {
    if(error) throw error;
    console.log('Base de Datos Funciona');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
