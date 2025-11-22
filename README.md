# Proyecto MongoDB - Instituciones Educativas del Atlántico

## Descripción
Este proyecto implementa una base de datos en MongoDB para gestionar información sobre instituciones educativas del departamento del Atlántico, Colombia. Incluye operaciones CRUD básicas, consultas con filtros avanzados y análisis estadísticos mediante agregaciones.

## Dataset
**Fuente de datos:** [https://www.datos.gov.co/api/v3/views/7tec-5fhs/query.json]

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
