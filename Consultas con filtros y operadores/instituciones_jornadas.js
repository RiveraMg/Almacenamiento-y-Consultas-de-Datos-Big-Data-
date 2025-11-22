//Identificar opciones educativas flexibles para trabajadores o adultos

db.instituciones.find({
  $or: [
    { "Jornadas": { $regex: "NOCTURNA", $options: "i" } },
    { "Jornadas": { $regex: "FIN DE SEMANA", $options: "i" } }
  ]
});
