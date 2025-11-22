# Proyecto MongoDB - Instituciones Educativas del Atlántico

## Descripción
Este proyecto implementa una base de datos en MongoDB para gestionar información sobre instituciones educativas del departamento del Atlántico, Colombia. Incluye operaciones CRUD básicas, consultas con filtros avanzados y análisis estadísticos mediante agregaciones.

## Dataset
**Fuente de datos:** [https://www.datos.gov.co/Educaci-n/Listado-de-Instituciones-Educativas-Oficiales-y-No/7tec-5fhs/explore/query/SELECT%0A%20%20%60municipio%60%2C%0A%20%20%60c_digo_municipio%60%2C%0A%20%20%60c_digo%60%2C%0A%20%20%60nombre%60%2C%0A%20%20%60direcci_n%60%2C%0A%20%20%60nombre_rector%60%2C%0A%20%20%60tipo_establecimiento%60%2C%0A%20%20%60sector%60%2C%0A%20%20%60genero%60%2C%0A%20%20%60zona%60%2C%0A%20%20%60niveles%60%2C%0A%20%20%60jornadas%60%2C%0A%20%20%60caracter%60%2C%0A%20%20%60especialidad%60%2C%0A%20%20%60licencia%60%2C%0A%20%20%60grados%60%2C%0A%20%20%60modelos_educativos%60%2C%0A%20%20%60discapacidades%60%2C%0A%20%20%60idiomas%60%2C%0A%20%20%60n_mero_de_sedes%60%2C%0A%20%20%60estado%60%2C%0A%20%20%60prestador_de_servicio%60%2C%0A%20%20%60propiedad_de_la_planta_fis%60%2C%0A%20%20%60correo_electr_nico%60/page/filter]

El dataset contiene información detallada sobre instituciones educativas incluyendo ubicación, tipo de establecimiento, niveles educativos, jornadas, infraestructura y servicios especializados.

## Implementación

### Carga de la Base de Datos
La base de datos se carga en MongoDB con la colección `instituciones` que almacena documentos con información estructurada de cada centro educativo.

---

## Operaciones CRUD

### 1. Inserción (Insert)
Inserción de una nueva institución educativa:

### 2. Selección (Find)
Consultar instituciones activas:

### 3. Actualización (Update)
Actualizar el correo electrónico de una institución:

### 4. Eliminación (Delete)
Eliminación física de una institución:

## Consultas con Filtros y Operadores

### a. Instituciones oficiales en zona rural
### b. Instituciones que ofrecen educación para adultos
### c. Instituciones que atienden alguna discapacidad
### d. Instituciones con más de 2 sedes
### e. Instituciones con jornada nocturna o fin de semana


## Consultas de Agregación

### a. Contar instituciones por municipio
### b. Contar instituciones oficiales vs no oficiales
### c. Promedio de sedes por sector
### d. Contar instituciones que atienden discapacidades
### e. Contar instituciones por nivel educativo (Media)


## Tecnologías Utilizadas
- **MongoDB** - Base de datos NoSQL orientada a documentos
- **MongoDB Shell** - Interfaz de línea de comandos para interactuar con MongoDB

## Autores
Karime Maria Vega Silva

Melanie Rivera Giron

## Curso

Big data
