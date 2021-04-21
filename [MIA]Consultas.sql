SELECT 
Hospital.nombre as Nombre_Hospital,
Hospital.direccion Direccion_Hospital,
COUNT(Victima.id) as Numero_de_Muertos
FROM RegistroHospital,Victima,Hospital
WHERE Victima.id = RegistroHospital.victima
AND Hospital.id = RegistroHospital.hospital
AND Victima.fecha_muerte != '0000-00-00 00:00:00'
GROUP BY RegistroHospital.hospital;

SELECT 
Victima.nombre,
Victima.apellido,
Victima.estado,
Tratamiento.descripcion,
AplicacionTratamiento.efectividad
FROM Victima,Tratamiento,AplicacionTratamiento,RegistroHospital
WHERE RegistroHospital.victima= Victima.id
AND RegistroHospital.id = AplicacionTratamiento.registro
AND AplicacionTratamiento.tratamiento = Tratamiento.id
AND Tratamiento.descripcion = 'Transfusiones de sangre'
AND Victima.estado = 'En cuarentena'
AND AplicacionTratamiento.efectividad > 5;

SELECT DISTINCT
Victima.nombre,
Victima.apellido,
Victima.direccion
FROM Victima,Conocido,ConocidoVictima
WHERE Victima.id = ConocidoVictima.victima
AND Conocido.id = ConocidoVictima.conocido
AND Victima.fecha_muerte != '000-00-00 00:00:00'
GROUP BY Victima.nombre,Victima.apellido,Victima.direccion,Victima.fecha_muerte
HAVING COUNT(DISTINCT Conocido.nombre) > 3
ORDER BY Victima.nombre,Victima.apellido;

SELECT DISTINCT
Victima.nombre,
Victima.apellido
FROM Victima,Conocido,ConocidoVictima
WHERE Victima.id = ConocidoVictima.victima
AND Conocido.id = ConocidoVictima.conocido
AND ConocidoVictima.contacto = 'Beso'
AND Victima.estado = 'Sospecha'
GROUP BY Victima.nombre,Victima.apellido
HAVING COUNT(DISTINCT Conocido.id) >2
ORDER BY Victima.nombre,Victima.apellido

SELECT
Victima.nombre,
Victima.apellido,
COUNT(DISTINCT Tratamiento.id)
FROM Victima,AplicacionTratamiento,Tratamiento,RegistroHospital
WHERE Victima.id = RegistroHospital.victima
AND AplicacionTratamiento.tratamiento = Tratamiento.id
AND AplicacionTratamiento.registro = RegistroHospital.id
AND Tratamiento.descripcion = 'Oxigeno'
GROUP BY Victima.nombre,Victima.apellido
ORDER BY Victima.nombre,Victima.apellido
LIMIT 5

SELECT
Victima.nombre,
Victima.apellido,
Victima.fecha_muerte,
Ubicacion.direccion,
Tratamiento.descripcion
FROM Victima,Ubicacion,UbicacionVictima,Tratamiento,AplicacionTratamiento,RegistroHospital
WHERE Victima.id = UbicacionVictima.victima
AND Ubicacion.id = UbicacionVictima.ubicacion
AND Victima.id = RegistroHospital.victima
AND RegistroHospital.id = AplicacionTratamiento.registro
AND Tratamiento.id = AplicacionTratamiento.tratamiento
AND Tratamiento.descripcion = 'Manejo de la presión arterial'
AND Ubicacion.direccion = '1987 Delphine Well'
ORDER BY Victima.nombre,Victima.apellido

SELECT 
Victima.nombre,
Victima.apellido,
Victima.direccion,
COUNT(DISTINCT Conocido.nombre) as Numero_Conocidos,
COUNT(DISTINCT Tratamiento.descripcion) as Numero_Tratamientos
FROM Victima,RegistroHospital,Hospital,AplicacionTratamiento,Tratamiento,ConocidoVictima,Conocido
WHERE Victima.id = RegistroHospital.victima
AND Hospital.id = RegistroHospital.hospital
AND Victima.id = ConocidoVictima.victima
AND Conocido.id = ConocidoVictima.conocido
AND Tratamiento.id = AplicacionTratamiento.tratamiento
AND AplicacionTratamiento.registro = RegistroHospital.id
GROUP BY Victima.nombre,Victima.apellido,Victima.direccion
HAVING COUNT(DISTINCT Conocido.nombre) < 2
AND COUNT(DISTINCT Tratamiento.descripcion) = 2

SELECT
Month(Victima.fecha_primera_sospecha) as Numero_Mes,
Victima.nombre,
Victima.apellido,
COUNT(Tratamiento.descripcion) as Numero
FROM Victima,AplicacionTratamiento,RegistroHospital,Tratamiento
WHERE Victima.id = RegistroHospital.victima
AND RegistroHospital.id = AplicacionTratamiento.registro
AND AplicacionTratamiento.tratamiento = Tratamiento.id
GROUP BY Victima.nombre,Victima.apellido  
ORDER BY Numero  DESC

SELECT
Hospital.nombre as Hospital,
COUNT(Victima.id) / (SELECT COUNT(RegistroHospital.victima) FROM RegistroHospital) * 100 as Porcentaje
FROM Hospital,RegistroHospital,Victima
WHERE Hospital.id = RegistroHospital.hospital
AND Victima.id = RegistroHospital.victima
GROUP BY Hospital.nombre
ORDER BY Hospital.nombre

SELECT
Hospital.nombre,
ConocidoVictima.contacto,
COUNT(ConocidoVictima.contacto) / (SELECT
COUNT(ConocidoVictima.contacto)
FROM Hospital,RegistroHospital,Victima,ConocidoVictima
WHERE Hospital.id = RegistroHospital.hospital
AND  Victima.id = RegistroHospital.victima
AND Victima.id = ConocidoVictima.victima
AND Hospital.nombre != ''
AND ConocidoVictima.contacto != '') * 100 as Porcentaje
FROM Hospital,RegistroHospital,Victima,ConocidoVictima
WHERE Hospital.id = RegistroHospital.hospital
AND  Victima.id = RegistroHospital.victima
AND Victima.id = ConocidoVictima.victima
AND Hospital.nombre != ''
AND ConocidoVictima.contacto != ''
GROUP BY Hospital.nombre,ConocidoVictima.contacto
ORDER BY Hospital.nombre,ConocidoVictima.contacto