/*Identificar instituciones públicas en áreas rurales. 
Combina dos condiciones con $and implícito. El operador $regex permite coincidencia insensible a mayúsculas.*/

db.instituciones.find({
  "Sector": "OFICIAL",
  "Zona": { $regex: "RURAL", $options: "i" }
});

