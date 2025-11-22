/*c.	Promedio de sedes por sector
Analizar que instituciones oficiales tienden a tener múltiples sedes para cubrir más territorio.*/
db.instituciones.aggregate([
  {
    $group: {
      _id: "$Sector",
      promedioSedes: { $avg: "$Número de Sedes" }
    }
  }
]);
