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
    const sql = `drop TABLE AplicacionTratamiento,Conocido,ConocidoVictima,Hospital,RegistroHospital,Tratamiento,Ubicacion,UbicacionVictima,Victima;`;
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
    var sql = `
    CREATE TABLE Victima (
        id INTEGER NOT NULL AUTO_INCREMENT,
        nombre varchar(255) NOT NULL,
        apellido varchar(255) NOT NULL,
        direccion varchar(255) NOT NULL,
        fecha_primera_sospecha TIMESTAMP NOT NULL,
        fecha_confirmacion TIMESTAMP NOT NULL,
        fecha_muerte TIMESTAMP DEFAULT NULL,
        estado varchar(255) NOT NULL,
        PRIMARY KEY (id)
    );
    CREATE TABLE Hospital (
        id INTEGER NOT NULL AUTO_INCREMENT,
        nombre varchar(255) NOT NULL,
        direccion varchar(255) NOT NULL,
        PRIMARY KEY (id)
    );
    CREATE TABLE Tratamiento (
        id INTEGER NOT NULL AUTO_INCREMENT,
        descripcion varchar(255) NOT NULL,
        efectividad INTEGER NOT NULL,
        PRIMARY KEY (id)
    );
    CREATE TABLE Ubicacion (
        id INTEGER NOT NULL AUTO_INCREMENT,
        direccion varchar(255) NOT NULL,
        PRIMARY KEY (id)
    );
    CREATE TABLE Conocido (
        id INTEGER NOT NULL AUTO_INCREMENT,
        nombre varchar(255) NOT NULL,
        apellido varchar(255) NOT NULL,
        PRIMARY KEY (id)
    );
    CREATE TABLE UbicacionVictima (
        id INTEGER NOT NULL AUTO_INCREMENT,
        victima INTEGER NOT NULL,
        ubicacion INTEGER NOT NULL,
        fecha_llegada TIMESTAMP NOT NULL,
        fecha_retiro TIMESTAMP NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (victima) REFERENCES Victima(id),
        FOREIGN KEY (ubicacion) REFERENCES Ubicacion(id)
    );
    CREATE TABLE ConocidoVictima (
        id INTEGER NOT NULL AUTO_INCREMENT,
        victima INTEGER NOT NULL,
        conocido INTEGER NOT NULL,
        contacto varchar(255) NOT NULL,
        fecha_conocio TIMESTAMP NOT NULL,
        fecha_inicio_contacto TIMESTAMP NOT NULL,
        fecha_fin_contacto TIMESTAMP NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (victima) REFERENCES Victima(id),
        FOREIGN KEY (conocido) REFERENCES Conocido(id)
    );
    CREATE TABLE RegistroHospital (
        id INTEGER NOT NULL AUTO_INCREMENT,
        victima INTEGER NOT NULL,
        hospital INTEGER NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (victima) REFERENCES Victima(id),
        FOREIGN KEY (hospital) REFERENCES Hospital(id)
    );
    CREATE TABLE AplicacionTratamiento (
        id INTEGER NOT NULL AUTO_INCREMENT,
        registro INTEGER NOT NULL,
        tratamiento INTEGER NOT NULL,
        efectividad INTEGER NOT NULL,
        fecha_inicio_tratamiento TIMESTAMP NOT NULL,
        fecha_fin_tratamiento TIMESTAMP NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (registro) REFERENCES RegistroHospital(id),
        FOREIGN KEY (tratamiento) REFERENCES Tratamiento(id)
    );
    INSERT INTO Victima (nombre,apellido,direccion,fecha_primera_sospecha,fecha_confirmacion,fecha_muerte,estado)
    SELECT DISTINCT 
    NOMBRE_VICTIMA,
    APELLIDO_VICTIMA,
    DIRECCION_VICTIMA,
    FECHA_PRIMERA_SOSPECHA,
    FECHA_CONFIRMACION,
    FECHA_MUERTE,
    ESTADO_VICTIMA
    FROM Temporal;

    INSERT INTO Hospital (nombre, direccion)
    SELECT DISTINCT NOMBRE_HOSPITAL, 
    DIRECCION_HOSPITAL
    FROM Temporal
    GROUP BY NOMBRE_HOSPITAL;

    INSERT INTO Tratamiento (descripcion,efectividad)
    SELECT DISTINCT
    TRATAMIENTO, EFECTIVIDAD
    FROM Temporal
    WHERE EFECTIVIDAD != 0;

    INSERT INTO Ubicacion(direccion)
    SELECT DISTINCT UBICACION_VICTIMA
    FROM Temporal;

    INSERT INTO Conocido (nombre,apellido)
    SELECT DISTINCT
    NOMBRE_ASOCIADO,
    APELLIDO_ASOCIADO
    FROM Temporal;

    INSERT INTO UbicacionVictima(victima,ubicacion,fecha_llegada,fecha_retiro)
    SELECT DISTINCT
    Victima.id,
    Ubicacion.id,
    Temporal.FECHA_LLEGADA,
    Temporal.FECHA_RETIRO
    FROM Victima,Ubicacion,Temporal
    WHERE 
    Victima.nombre = Temporal.NOMBRE_VICTIMA
    AND
    Ubicacion.direccion = Temporal.UBICACION_VICTIMA
    AND
    Temporal.UBICACION_VICTIMA != ''
    GROUP BY Temporal.NOMBRE_VICTIMA,Temporal.UBICACION_VICTIMA;

    INSERT INTO RegistroHospital (victima,hospital)
SELECT DISTINCT
Victima.id,
Hospital.id
FROM Temporal, Victima,Hospital
WHERE Temporal.NOMBRE_VICTIMA = Victima.nombre
AND Temporal.APELLIDO_VICTIMA = Victima.apellido
AND Temporal.NOMBRE_HOSPITAL = Hospital.nombre
AND Temporal.NOMBRE_HOSPITAL != '';

INSERT INTO ConocidoVictima (conocido,victima,fecha_conocio,contacto,fecha_inicio_contacto,fecha_fin_contacto)
SELECT DISTINCT
Conocido.id,
Victima.id,
Temporal.FECHA_CONOCIO,
Temporal.CONTACTO_FISICO,
Temporal.FECHA_INICIO_CONTACTO,
Temporal.FECHA_FIN_CONTACTO
FROM Temporal,Victima,Conocido
WHERE 
Temporal.NOMBRE_VICTIMA = Victima.nombre
AND Temporal.APELLIDO_VICTIMA = Victima.apellido
AND Temporal.NOMBRE_ASOCIADO = Conocido.nombre
AND Temporal.APELLIDO_ASOCIADO = Conocido.apellido
AND Temporal.NOMBRE_VICTIMA != ''
AND Temporal.APELLIDO_VICTIMA != ''
AND Temporal.NOMBRE_ASOCIADO != ''
AND Temporal.APELLIDO_ASOCIADO != '';

INSERT INTO AplicacionTratamiento(registro,tratamiento,efectividad,fecha_inicio_tratamiento,fecha_fin_tratamiento)
SELECT DISTINCT
RegistroHospital.id,
Tratamiento.id,
Temporal.EFECTIVIDAD_EN_VICTIMA,
Temporal.FECHA_INICIO_TRATAMIENTO,
Temporal.FECHA_FIN_TRATAMIENTO
FROM RegistroHospital,Tratamiento,Temporal,Victima,Hospital
WHERE RegistroHospital.victima = Victima.id
AND Victima.nombre = Temporal.NOMBRE_VICTIMA
AND Victima.apellido = Temporal.APELLIDO_VICTIMA
AND RegistroHospital.hospital = Hospital.id
AND Hospital.nombre = Temporal.NOMBRE_HOSPITAL
AND Tratamiento.descripcion = Temporal.TRATAMIENTO
AND Temporal.TRATAMIENTO != '';
    `;
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
