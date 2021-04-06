SELECT 
Hospital.nombre as Nombre_Hospital,
Hospital.direccion Direccion_Hospital,
COUNT(Victima.id) as Numero_de_Muertos
FROM RegistroHospital,Victima,Hospital
WHERE Victima.id = RegistroHospital.victima
AND Hospital.id = RegistroHospital.hospital
AND Victima.fecha_muerte != '0000-00-00 00:00:00'
GROUP BY RegistroHospital.hospital

SELECT
Victima.nombre as Nombre,
Victima.apellido as Apellido,
Victima.estado as Estado,
Tratamiento.descripcion as Tratamiento,
AplicacionTratamiento.efectividad
FROM Victima,RegistroHospital,AplicacionTratamiento,Tratamiento
WHERE AplicacionTratamiento.registro = RegistroHospital.id
AND RegistroHospital.victima = Victima.id
AND Victima.estado = 'En cuarentena'
AND Tratamiento.descripcion = 'Transfusiones de sangre'
AND AplicacionTratamiento.efectividad > 5
ORDER BY Victima.nombre,Victima.apellido