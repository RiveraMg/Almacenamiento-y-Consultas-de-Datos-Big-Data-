/*Cambiar el correo electrónico de una institución.
Se actualiza el correo usando su Código como identificador único.*/


db.instituciones.updateOne(
  { "Código": "308,078,000,001" },
  { $set: { "Correo Electrónico": "nuevo_correo@ejemplo.com" } }
);
db.instituciones.find(
  { "Código": "308,078,000,001" },
  { "Correo Electrónico": 1, "_id": 0 }
); 
