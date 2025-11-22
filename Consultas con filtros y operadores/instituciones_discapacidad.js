//Encontrar centros inclusivos
db.instituciones.find({
  "Discapacidades": { $not: { $regex: "NINGUNA", $options: "i" } }
});
