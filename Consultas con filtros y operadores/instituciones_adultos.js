// Identificar instituciones con programas para adultos.

db.instituciones.find({
  "Grados": { $regex: "21|22|23|24|25|26" }
});
0