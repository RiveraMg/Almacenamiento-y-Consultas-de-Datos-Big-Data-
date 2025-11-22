// Eliminar físicamente la institución con Código = "108,078,000,011"
db.instituciones.deleteOne({ "Código": "108,078,000,011" });

//Verificar si ya no existe
db.instituciones.find({ "Código": "108,078,000,011" });
