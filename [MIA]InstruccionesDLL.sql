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