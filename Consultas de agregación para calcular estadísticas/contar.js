/*Refleja la densidad poblacional y la oferta educativa en cada municipio.
Agrupa documentos por Municipio y cuenta cuántos hay en cada uno.*/
//a.	Contar instituciones por municipio
db.instituciones.aggregate([
  { $group: { _id: "$Municipio", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]);

//b.	Contar instituciones oficiales vs no oficiales
//Identificar cuantas instituciones oficiales y no oficiales hay.
db.instituciones.aggregate([
  { $group: { _id: "$Sector", total: { $sum: 1 } } }
]);

/*c.	Contar instituciones que atienden discapacidades
Primero filtra ($match) y luego cuenta ($count) las instituciones que atienden alguna discapacidad.*/
db.instituciones.aggregate([
  { $match: { "Discapacidades": { $not: { $regex: "NINGUNA", $options: "i" } } } },
  { $count: "instituciones_con_discapacidad" }
]);

/*d.	Contar instituciones por nivel educativo ofrecido
Identifica instituciones públicas en áreas rurales.
Combina dos condiciones con $and implícito al listar múltiples campos en el mismo objeto.
El operador $regex permite coincidencia insensible a mayúsculas gracias a la opción "i".*/
db.instituciones.aggregate([
  { $match: { "Niveles": { $regex: "MEDIA", $options: "i" } } },
  { $count: "con_nivel_media" }
]);
