/*Identificar instituciones con cobertura territorial amplia.
Usa el operador $gt (greater than) para filtrar por un valor numérico.*/

db.instituciones.find({
  "Número de Sedes": { $gt: 2 }
});

