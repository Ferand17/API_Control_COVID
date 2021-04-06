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