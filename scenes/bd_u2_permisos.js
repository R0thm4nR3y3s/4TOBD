window.SCENE = {

  title: "Usuarios, Privilegios y Permisos en MySQL",
  subtitle: "Control profesional de accesos en bases de datos: creación de usuarios, permisos, vistas, restricciones, REVOKE y buenas prácticas.",

  nav: [
    { id: "inicio", label: "Inicio" },
    { id: "objetivo", label: "Objetivo" },
    { id: "conceptos", label: "Conceptos clave" },
    { id: "flujo-general", label: "Flujo general" },
    { id: "crear-bd", label: "Crear BD" },
    { id: "crear-tablas", label: "Tablas" },
    { id: "insertar-datos", label: "Insertar datos" },
    { id: "crear-vistas", label: "Vistas" },
    { id: "crear-usuarios", label: "Usuarios" },
    { id: "permisos", label: "Permisos GRANT" },
    { id: "tabla-roles", label: "Roles" },
    { id: "probar-permisos", label: "Pruebas" },
    { id: "revocar", label: "REVOKE" },
    { id: "eliminar-usuarios", label: "Eliminar usuarios" },
    { id: "practicas", label: "Prácticas" },
    { id: "resumen", label: "Resumen" }
  ],

  sections: [

    {
      id: "inicio",
      type: "heroSplit",
      kicker: "MySQL Security Lab",
      title: "Manejo de usuarios y permisos en bases de datos",
      highlight: "GRANT, REVOKE, DROP, DELETE, UPDATE, SELECT y VISTAS",
      description: "En esta clase aprenderás a crear una base de datos desde cero y protegerla mediante usuarios con permisos específicos. El objetivo es comprender cómo controlar qué puede hacer cada usuario dentro de MySQL.",
      noteTitle: "Idea central",
      note: "No todos los usuarios deben tener permisos de administrador. En un sistema real, cada usuario debe recibir únicamente los permisos necesarios para cumplir su función.",
      tags: [
        "MySQL",
        "Usuarios",
        "Permisos",
        "GRANT",
        "REVOKE",
        "Vistas",
        "Seguridad"
      ],
      cards: [
        {
          title: "Administrador",
          desc: "Tiene control total sobre la base de datos: crear, modificar, borrar tablas, insertar, actualizar y eliminar registros."
        },
        {
          title: "Capturista",
          desc: "Puede registrar y modificar información, pero no debe eliminar tablas ni destruir datos importantes."
        },
        {
          title: "Lector",
          desc: "Solo puede consultar información. Es ideal para reportes, auditorías o consultas básicas."
        }
      ]
    },

    {
      id: "objetivo",
      type: "conceptGrid",
      title: "Objetivos de aprendizaje",
      items: [
        {
          icon: "🧱",
          title: "Crear una base de datos",
          desc: "Construir una base de datos escolar desde cero usando instrucciones SQL."
        },
        {
          icon: "📋",
          title: "Crear tablas y campos",
          desc: "Definir tablas con claves primarias, campos de texto, números y relaciones básicas."
        },
        {
          icon: "🧪",
          title: "Insertar información",
          desc: "Agregar registros reales para poder probar consultas y permisos."
        },
        {
          icon: "👤",
          title: "Crear usuarios",
          desc: "Generar cuentas independientes para controlar el acceso a MySQL."
        },
        {
          icon: "🔐",
          title: "Asignar permisos",
          desc: "Usar GRANT para permitir SELECT, INSERT, UPDATE, DELETE, DROP y acceso a vistas."
        },
        {
          icon: "🚫",
          title: "Revocar permisos",
          desc: "Usar REVOKE para quitar privilegios cuando un usuario ya no debe tener acceso."
        }
      ]
    },

    {
      id: "conceptos",
      type: "conceptGrid",
      title: "Conceptos clave antes de iniciar",
      items: [
        {
          icon: "🗄️",
          title: "Base de datos",
          desc: "Es el contenedor principal donde se almacenan tablas, vistas, procedimientos y datos."
        },
        {
          icon: "📦",
          title: "Tabla",
          desc: "Estructura donde se guarda información organizada en filas y columnas."
        },
        {
          icon: "🔎",
          title: "SELECT",
          desc: "Permiso para consultar información almacenada en una tabla o vista."
        },
        {
          icon: "➕",
          title: "INSERT",
          desc: "Permiso para agregar nuevos registros a una tabla."
        },
        {
          icon: "✏️",
          title: "UPDATE",
          desc: "Permiso para modificar información existente."
        },
        {
          icon: "🗑️",
          title: "DELETE",
          desc: "Permiso para eliminar registros específicos de una tabla."
        },
        {
          icon: "💣",
          title: "DROP",
          desc: "Permiso peligroso que permite eliminar tablas, vistas o bases de datos completas."
        },
        {
          icon: "👁️",
          title: "Vista",
          desc: "Consulta guardada que permite mostrar solo cierta información sin exponer toda la tabla."
        }
      ]
    },

    {
      id: "flujo-general",
      type: "flow",
      title: "Flujo general para administrar permisos en MySQL",
      nodes: [
        {
          title: "1. Crear base de datos",
          desc: "Primero se crea el espacio donde se almacenará la información."
        },
        {
          title: "2. Crear tablas",
          desc: "Después se definen las estructuras donde vivirán los datos."
        },
        {
          title: "3. Insertar registros",
          desc: "Se agregan datos de prueba para validar el funcionamiento."
        },
        {
          title: "4. Crear vistas",
          desc: "Se generan consultas controladas para mostrar solo información permitida."
        },
        {
          title: "5. Crear usuarios",
          desc: "Se crean cuentas separadas para cada perfil de trabajo."
        },
        {
          title: "6. Asignar permisos",
          desc: "Se usa GRANT para definir qué puede hacer cada usuario."
        },
        {
          title: "7. Probar accesos",
          desc: "Se verifica si el usuario puede o no ejecutar ciertas instrucciones."
        },
        {
          title: "8. Revocar o eliminar",
          desc: "Se retiran permisos con REVOKE o se elimina el usuario con DROP USER."
        }
      ]
    },

    {
      id: "crear-bd",
      type: "codeWindow",
      title: "Crear base de datos desde cero",
      language: "sql",
      code: `-- CREAR UNA BASE DE DATOS LLAMADA escuela_segura_db
CREATE DATABASE escuela_segura_db;

-- SELECCIONAR LA BASE DE DATOS PARA TRABAJAR DENTRO DE ELLA
USE escuela_segura_db;

-- VERIFICAR QUÉ BASE DE DATOS ESTÁ ACTIVA
SELECT DATABASE();`
    },

    {
      id: "crear-tablas",
      type: "codeWindow",
      title: "Crear tablas principales",
      language: "sql",
      code: `-- CREAR TABLA DE ESTUDIANTES
CREATE TABLE estudiantes (

    -- CLAVE PRIMARIA AUTOINCREMENTABLE
    id_estudiante INT AUTO_INCREMENT PRIMARY KEY,

    -- NOMBRE COMPLETO DEL ESTUDIANTE
    nombre VARCHAR(100) NOT NULL,

    -- CORREO DEL ESTUDIANTE
    correo VARCHAR(100) UNIQUE,

    -- EDAD DEL ESTUDIANTE
    edad INT,

    -- GRUPO ESCOLAR AL QUE PERTENECE
    grupo VARCHAR(20)

);

-- CREAR TABLA DE PROFESORES
CREATE TABLE profesores (

    -- CLAVE PRIMARIA AUTOINCREMENTABLE
    id_profesor INT AUTO_INCREMENT PRIMARY KEY,

    -- NOMBRE COMPLETO DEL PROFESOR
    nombre VARCHAR(100) NOT NULL,

    -- ESPECIALIDAD DEL PROFESOR
    especialidad VARCHAR(100)

);

-- CREAR TABLA DE MATERIAS
CREATE TABLE materias (

    -- CLAVE PRIMARIA AUTOINCREMENTABLE
    id_materia INT AUTO_INCREMENT PRIMARY KEY,

    -- NOMBRE DE LA MATERIA
    nombre_materia VARCHAR(100) NOT NULL,

    -- SEMESTRE EN EL QUE SE IMPARTE
    semestre INT,

    -- ID DEL PROFESOR QUE IMPARTE LA MATERIA
    id_profesor INT,

    -- RELACIÓN CON LA TABLA PROFESORES
    FOREIGN KEY (id_profesor)
    REFERENCES profesores(id_profesor)

);`
    },

    {
      id: "insertar-datos",
      type: "codeWindow",
      title: "Insertar información de prueba",
      language: "sql",
      code: `-- INSERTAR ESTUDIANTES
INSERT INTO estudiantes(nombre, correo, edad, grupo)
VALUES
('Juan Pérez', 'juan.perez@escuela.com', 18, '401'),
('María López', 'maria.lopez@escuela.com', 19, '402'),
('Carlos Ruiz', 'carlos.ruiz@escuela.com', 18, '401'),
('Ana Torres', 'ana.torres@escuela.com', 20, '403');

-- INSERTAR PROFESORES
INSERT INTO profesores(nombre, especialidad)
VALUES
('Laura Méndez', 'Base de Datos'),
('Roberto Salinas', 'Programación'),
('Elena Castro', 'Redes');

-- INSERTAR MATERIAS
INSERT INTO materias(nombre_materia, semestre, id_profesor)
VALUES
('Fundamentos de Bases de Datos', 4, 1),
('Programación Web', 4, 2),
('Redes de Computadoras', 5, 3);

-- CONSULTAR LOS DATOS INSERTADOS
SELECT * FROM estudiantes;

-- CONSULTAR PROFESORES
SELECT * FROM profesores;

-- CONSULTAR MATERIAS
SELECT * FROM materias;`
    },

    {
      id: "crear-vistas",
      type: "codeWindow",
      title: "Crear vistas para mostrar información controlada",
      language: "sql",
      code: `-- CREAR UNA VISTA PÚBLICA DE ESTUDIANTES
-- ESTA VISTA NO MUESTRA TODOS LOS CAMPOS, SOLO LOS DATOS PERMITIDOS
CREATE VIEW vista_estudiantes_publica AS
SELECT
    nombre,
    grupo
FROM estudiantes;

-- CREAR UNA VISTA ACADÉMICA CON INFORMACIÓN DE MATERIAS Y PROFESORES
CREATE VIEW vista_materias_profesores AS
SELECT
    materias.nombre_materia,
    materias.semestre,
    profesores.nombre AS profesor,
    profesores.especialidad
FROM materias
INNER JOIN profesores
ON materias.id_profesor = profesores.id_profesor;

-- CONSULTAR LA VISTA DE ESTUDIANTES
SELECT * FROM vista_estudiantes_publica;

-- CONSULTAR LA VISTA DE MATERIAS Y PROFESORES
SELECT * FROM vista_materias_profesores;`
    },

    {
      id: "crear-usuarios",
      type: "codeWindow",
      title: "Crear usuarios en MySQL",
      language: "sql",
      code: `-- CREAR USUARIO ADMINISTRADOR
-- ESTE USUARIO TENDRÁ CONTROL TOTAL SOBRE LA BASE DE DATOS
CREATE USER 'admin_escuela'@'localhost'
IDENTIFIED BY 'Admin123*';

-- CREAR USUARIO CAPTURISTA
-- ESTE USUARIO PODRÁ INSERTAR Y ACTUALIZAR INFORMACIÓN
CREATE USER 'capturista'@'localhost'
IDENTIFIED BY 'Captura123*';

-- CREAR USUARIO LECTOR
-- ESTE USUARIO SOLO PODRÁ CONSULTAR INFORMACIÓN
CREATE USER 'lector'@'localhost'
IDENTIFIED BY 'Lector123*';

-- CREAR USUARIO VISOR DE VISTAS
-- ESTE USUARIO SOLO PODRÁ CONSULTAR UNA VISTA ESPECÍFICA
CREATE USER 'visor_vistas'@'localhost'
IDENTIFIED BY 'Vista123*';

-- CREAR USUARIO AUDITOR
-- ESTE USUARIO PODRÁ CONSULTAR INFORMACIÓN PARA REVISIÓN
CREATE USER 'auditor'@'localhost'
IDENTIFIED BY 'Auditor123*';

-- VER USUARIOS CREADOS EN MYSQL
SELECT user, host
FROM mysql.user;`
    },

    {
      id: "permisos",
      type: "codeWindow",
      title: "Asignar permisos con GRANT",
      language: "sql",
      code: `-- DAR TODOS LOS PRIVILEGIOS AL ADMINISTRADOR SOBRE LA BASE DE DATOS
GRANT ALL PRIVILEGES
ON escuela_segura_db.*
TO 'admin_escuela'@'localhost';

-- DAR PERMISOS AL CAPTURISTA
-- PUEDE CONSULTAR, INSERTAR Y MODIFICAR DATOS
GRANT SELECT, INSERT, UPDATE
ON escuela_segura_db.*
TO 'capturista'@'localhost';

-- DAR PERMISO SOLO DE CONSULTA AL LECTOR
GRANT SELECT
ON escuela_segura_db.*
TO 'lector'@'localhost';

-- DAR PERMISO SOLO SOBRE UNA VISTA AL USUARIO visor_vistas
GRANT SELECT
ON escuela_segura_db.vista_estudiantes_publica
TO 'visor_vistas'@'localhost';

-- DAR PERMISOS DE CONSULTA AL AUDITOR
GRANT SELECT
ON escuela_segura_db.*
TO 'auditor'@'localhost';

-- APLICAR CAMBIOS DE PRIVILEGIOS
FLUSH PRIVILEGES;`
    },

    {
      id: "tabla-roles",
      type: "table",
      title: "Tabla de roles y permisos recomendados",
      headers: [
        "Usuario",
        "Rol",
        "SELECT",
        "INSERT",
        "UPDATE",
        "DELETE",
        "DROP",
        "Vista"
      ],
      rows: [
        [
          "admin_escuela",
          "Administrador",
          "Sí",
          "Sí",
          "Sí",
          "Sí",
          "Sí",
          "Sí"
        ],
        [
          "capturista",
          "Captura de datos",
          "Sí",
          "Sí",
          "Sí",
          "No",
          "No",
          "Sí"
        ],
        [
          "lector",
          "Consulta general",
          "Sí",
          "No",
          "No",
          "No",
          "No",
          "Sí"
        ],
        [
          "visor_vistas",
          "Consulta limitada",
          "Solo vista",
          "No",
          "No",
          "No",
          "No",
          "Sí"
        ],
        [
          "auditor",
          "Revisión",
          "Sí",
          "No",
          "No",
          "No",
          "No",
          "Sí"
        ]
      ]
    },

    {
      id: "ver-permisos",
      type: "codeWindow",
      title: "Ver permisos asignados a cada usuario",
      language: "sql",
      code: `-- VER PERMISOS DEL ADMINISTRADOR
SHOW GRANTS FOR 'admin_escuela'@'localhost';

-- VER PERMISOS DEL CAPTURISTA
SHOW GRANTS FOR 'capturista'@'localhost';

-- VER PERMISOS DEL LECTOR
SHOW GRANTS FOR 'lector'@'localhost';

-- VER PERMISOS DEL USUARIO QUE SOLO CONSULTA VISTAS
SHOW GRANTS FOR 'visor_vistas'@'localhost';

-- VER PERMISOS DEL AUDITOR
SHOW GRANTS FOR 'auditor'@'localhost';`
    },

    {
      id: "probar-permisos",
      type: "codeWindow",
      title: "Ejemplos para probar permisos",
      language: "sql",
      code: `-- EJEMPLO 1:
-- SI EL USUARIO capturista EJECUTA ESTO, DEBE FUNCIONAR
INSERT INTO estudiantes(nombre, correo, edad, grupo)
VALUES('Pedro Ramírez', 'pedro.ramirez@escuela.com', 19, '404');

-- EJEMPLO 2:
-- SI EL USUARIO capturista EJECUTA ESTO, DEBE FUNCIONAR
UPDATE estudiantes
SET grupo = '405'
WHERE id_estudiante = 1;

-- EJEMPLO 3:
-- SI EL USUARIO capturista INTENTA ESTO, DEBE FALLAR
-- PORQUE NO TIENE PERMISO DELETE
DELETE FROM estudiantes
WHERE id_estudiante = 2;

-- EJEMPLO 4:
-- SI EL USUARIO lector EJECUTA ESTO, DEBE FUNCIONAR
SELECT * FROM estudiantes;

-- EJEMPLO 5:
-- SI EL USUARIO lector INTENTA ESTO, DEBE FALLAR
-- PORQUE NO TIENE PERMISO UPDATE
UPDATE estudiantes
SET edad = 25
WHERE id_estudiante = 1;

-- EJEMPLO 6:
-- SI EL USUARIO visor_vistas EJECUTA ESTO, DEBE FUNCIONAR
SELECT * FROM vista_estudiantes_publica;

-- EJEMPLO 7:
-- SI EL USUARIO visor_vistas INTENTA CONSULTAR LA TABLA REAL, DEBE FALLAR
SELECT * FROM estudiantes;`
    },

    {
      id: "permisos-drop-delete-update",
      type: "table",
      title: "Diferencia entre permisos peligrosos",
      headers: [
        "Permiso",
        "Qué permite hacer",
        "Nivel de riesgo",
        "Recomendación"
      ],
      rows: [
        [
          "UPDATE",
          "Modificar registros existentes",
          "Medio",
          "Usarlo solo para usuarios que corrigen o actualizan datos"
        ],
        [
          "DELETE",
          "Eliminar registros de una tabla",
          "Alto",
          "Evitarlo en usuarios normales"
        ],
        [
          "DROP",
          "Eliminar tablas, vistas o bases completas",
          "Crítico",
          "Solo debe usarlo un administrador"
        ],
        [
          "ALL PRIVILEGES",
          "Control total sobre la base de datos",
          "Crítico",
          "Usarlo únicamente para administradores confiables"
        ]
      ]
    },

    {
      id: "grant-especifico-tablas",
      type: "codeWindow",
      title: "Dar permisos a tablas específicas",
      language: "sql",
      code: `-- DAR PERMISO SELECT SOLO SOBRE LA TABLA estudiantes
GRANT SELECT
ON escuela_segura_db.estudiantes
TO 'lector'@'localhost';

-- DAR PERMISOS INSERT Y UPDATE SOLO SOBRE LA TABLA estudiantes
GRANT INSERT, UPDATE
ON escuela_segura_db.estudiantes
TO 'capturista'@'localhost';

-- DAR PERMISO SELECT SOLO SOBRE LA TABLA materias
GRANT SELECT
ON escuela_segura_db.materias
TO 'auditor'@'localhost';

-- APLICAR CAMBIOS
FLUSH PRIVILEGES;`
    },

    {
      id: "revocar",
      type: "codeWindow",
      title: "Quitar permisos con REVOKE",
      language: "sql",
      code: `-- QUITAR PERMISO UPDATE AL USUARIO capturista
REVOKE UPDATE
ON escuela_segura_db.*
FROM 'capturista'@'localhost';

-- QUITAR PERMISO INSERT AL USUARIO capturista
REVOKE INSERT
ON escuela_segura_db.*
FROM 'capturista'@'localhost';

-- QUITAR PERMISO SELECT AL USUARIO lector
REVOKE SELECT
ON escuela_segura_db.*
FROM 'lector'@'localhost';

-- QUITAR PERMISO SOBRE UNA VISTA AL USUARIO visor_vistas
REVOKE SELECT
ON escuela_segura_db.vista_estudiantes_publica
FROM 'visor_vistas'@'localhost';

-- QUITAR TODOS LOS PRIVILEGIOS DEL AUDITOR
REVOKE ALL PRIVILEGES
ON escuela_segura_db.*
FROM 'auditor'@'localhost';

-- APLICAR CAMBIOS
FLUSH PRIVILEGES;`
    },

    {
      id: "revocar-explicacion",
      type: "conceptGrid",
      title: "¿Qué pasa cuando usamos REVOKE?",
      items: [
        {
          icon: "🚫",
          title: "Quita permisos",
          desc: "REVOKE elimina privilegios que anteriormente fueron entregados con GRANT."
        },
        {
          icon: "👤",
          title: "El usuario sigue existiendo",
          desc: "Aunque se le quiten permisos, la cuenta de usuario no se elimina."
        },
        {
          icon: "🔐",
          title: "Control de seguridad",
          desc: "Permite reducir accesos cuando un usuario cambia de función o ya no necesita privilegios."
        },
        {
          icon: "🧪",
          title: "Debe probarse",
          desc: "Después de revocar permisos, se recomienda probar que el usuario ya no pueda ejecutar la acción."
        }
      ]
    },

    {
      id: "eliminar-usuarios",
      type: "codeWindow",
      title: "Eliminar usuarios completamente",
      language: "sql",
      code: `-- ELIMINAR USUARIO LECTOR
DROP USER 'lector'@'localhost';

-- ELIMINAR USUARIO CAPTURISTA
DROP USER 'capturista'@'localhost';

-- ELIMINAR USUARIO VISOR DE VISTAS
DROP USER 'visor_vistas'@'localhost';

-- ELIMINAR USUARIO AUDITOR
DROP USER 'auditor'@'localhost';

-- VERIFICAR USUARIOS EXISTENTES
SELECT user, host
FROM mysql.user;

-- APLICAR CAMBIOS
FLUSH PRIVILEGES;`
    },

    {
      id: "consultas-admin",
      type: "codeWindow",
      title: "Consultas útiles para administración",
      language: "sql",
      code: `-- VER TODAS LAS BASES DE DATOS
SHOW DATABASES;

-- USAR LA BASE DE DATOS
USE escuela_segura_db;

-- VER TODAS LAS TABLAS
SHOW TABLES;

-- VER LA ESTRUCTURA DE LA TABLA estudiantes
DESCRIBE estudiantes;

-- VER USUARIO ACTUAL CON EL QUE ESTÁS CONECTADO
SELECT CURRENT_USER();

-- VER VISTAS EXISTENTES
SHOW FULL TABLES
WHERE Table_type = 'VIEW';

-- VER USUARIOS DE MYSQL
SELECT user, host
FROM mysql.user;`
    },

    {
      id: "escenario-real",
      type: "flow",
      title: "Escenario real en una institución educativa",
      nodes: [
        {
          title: "Director",
          desc: "Puede consultar reportes, pero no necesita modificar tablas directamente."
        },
        {
          title: "Control escolar",
          desc: "Puede insertar y actualizar estudiantes, pero no debería eliminar tablas."
        },
        {
          title: "Docente",
          desc: "Puede consultar estudiantes y materias asignadas."
        },
        {
          title: "Auditor",
          desc: "Puede consultar información, pero no modificarla."
        },
        {
          title: "Administrador de sistemas",
          desc: "Tiene permisos totales para mantenimiento, respaldo y estructura."
        }
      ]
    },

    {
      id: "caso-practico-completo",
      type: "codeWindow",
      title: "Caso práctico completo: usuarios por rol",
      language: "sql",
      code: `-- CREAR BASE DE DATOS
CREATE DATABASE colegio_roles_db;

-- USAR BASE DE DATOS
USE colegio_roles_db;

-- CREAR TABLA ALUMNOS
CREATE TABLE alumnos (
    id_alumno INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    grupo VARCHAR(20),
    promedio DECIMAL(4,2)
);

-- INSERTAR DATOS
INSERT INTO alumnos(nombre, grupo, promedio)
VALUES
('Luis Hernández', '501', 8.7),
('Mónica García', '502', 9.2),
('Sofía Ramos', '501', 7.8);

-- CREAR VISTA SOLO CON DATOS GENERALES
CREATE VIEW vista_alumnos_general AS
SELECT
    nombre,
    grupo
FROM alumnos;

-- CREAR USUARIO ADMINISTRADOR
CREATE USER 'admin_colegio'@'localhost'
IDENTIFIED BY 'AdminColegio123*';

-- CREAR USUARIO DOCENTE
CREATE USER 'docente'@'localhost'
IDENTIFIED BY 'Docente123*';

-- CREAR USUARIO SECRETARIA
CREATE USER 'secretaria'@'localhost'
IDENTIFIED BY 'Secretaria123*';

-- CREAR USUARIO INVITADO
CREATE USER 'invitado'@'localhost'
IDENTIFIED BY 'Invitado123*';

-- ADMINISTRADOR CON TODOS LOS PERMISOS
GRANT ALL PRIVILEGES
ON colegio_roles_db.*
TO 'admin_colegio'@'localhost';

-- DOCENTE SOLO PUEDE CONSULTAR
GRANT SELECT
ON colegio_roles_db.*
TO 'docente'@'localhost';

-- SECRETARIA PUEDE CONSULTAR, INSERTAR Y ACTUALIZAR
GRANT SELECT, INSERT, UPDATE
ON colegio_roles_db.alumnos
TO 'secretaria'@'localhost';

-- INVITADO SOLO PUEDE CONSULTAR LA VISTA
GRANT SELECT
ON colegio_roles_db.vista_alumnos_general
TO 'invitado'@'localhost';

-- APLICAR PRIVILEGIOS
FLUSH PRIVILEGES;

-- VERIFICAR PERMISOS
SHOW GRANTS FOR 'admin_colegio'@'localhost';
SHOW GRANTS FOR 'docente'@'localhost';
SHOW GRANTS FOR 'secretaria'@'localhost';
SHOW GRANTS FOR 'invitado'@'localhost';`
    },

    {
      id: "errores-comunes",
      type: "table",
      title: "Errores comunes al trabajar con permisos",
      headers: [
        "Error",
        "Causa probable",
        "Solución"
      ],
      rows: [
        [
          "Access denied",
          "El usuario no tiene permiso para ejecutar esa acción",
          "Revisar permisos con SHOW GRANTS"
        ],
        [
          "User does not exist",
          "El usuario no fue creado o el host es incorrecto",
          "Verificar con SELECT user, host FROM mysql.user"
        ],
        [
          "DROP command denied",
          "El usuario no tiene permiso DROP",
          "Asignar DROP solo si realmente es necesario"
        ],
        [
          "DELETE command denied",
          "El usuario no tiene permiso DELETE",
          "Usar GRANT DELETE o mantenerlo restringido"
        ],
        [
          "Table does not exist",
          "La tabla no está en la base activa o el nombre está mal escrito",
          "Usar USE nombre_bd y SHOW TABLES"
        ]
      ]
    },

    {
      id: "buenas-practicas",
      type: "conceptGrid",
      title: "Buenas prácticas de seguridad",
      items: [
        {
          icon: "🛡️",
          title: "No usar root para aplicaciones",
          desc: "El usuario root debe reservarse para administración, no para sistemas en producción."
        },
        {
          icon: "🎯",
          title: "Aplicar mínimo privilegio",
          desc: "Cada usuario debe tener solo los permisos estrictamente necesarios."
        },
        {
          icon: "🔑",
          title: "Usar contraseñas fuertes",
          desc: "Combinar mayúsculas, minúsculas, números y símbolos."
        },
        {
          icon: "👥",
          title: "Separar usuarios por rol",
          desc: "Administrador, capturista, lector y auditor deben ser cuentas diferentes."
        },
        {
          icon: "🧾",
          title: "Revisar permisos periódicamente",
          desc: "Usar SHOW GRANTS para verificar qué puede hacer cada usuario."
        },
        {
          icon: "🚫",
          title: "Revocar permisos innecesarios",
          desc: "Si un usuario ya no necesita acceso, usar REVOKE o DROP USER."
        }
      ]
    },

    {
      id: "practicas",
      type: "practice",
      title: "Prácticas para alumnos",
      items: [
        "Crear una base de datos llamada tienda_segura_db.",
        "Crear una tabla productos con id_producto, nombre, precio y stock.",
        "Insertar mínimo 5 productos diferentes.",
        "Crear un usuario llamado vendedor que pueda consultar, insertar y actualizar productos.",
        "Crear un usuario llamado lector_tienda que solo pueda consultar productos.",
        "Crear una vista llamada vista_productos_publica que muestre nombre y precio.",
        "Crear un usuario llamado cliente_virtual que solo pueda consultar la vista.",
        "Probar que vendedor no pueda ejecutar DROP TABLE.",
        "Revocar el permiso UPDATE al usuario vendedor.",
        "Verificar permisos usando SHOW GRANTS.",
        "Eliminar el usuario cliente_virtual usando DROP USER.",
        "Explicar en una tabla qué permisos tiene cada usuario creado."
      ]
    },

    {
      id: "reto-final",
      type: "practice",
      title: "Reto final de clase",
      items: [
        "Diseña un sistema de permisos para una base de datos de hospital.",
        "Crea roles para administrador, médico, recepcionista, paciente y auditor.",
        "Define qué usuario puede consultar, insertar, actualizar o eliminar información.",
        "Crea una vista para que el paciente solo vea su información básica.",
        "Crea una vista para que el auditor consulte información sin poder modificarla.",
        "Genera el código SQL completo con CREATE DATABASE, CREATE TABLE, INSERT, CREATE USER, GRANT, REVOKE y DROP USER.",
        "Documenta cada línea del código con comentarios claros.",
        "Explica por qué no todos los usuarios deben tener permisos DELETE o DROP."
      ]
    },

    {
      id: "resumen",
      type: "conceptGrid",
      title: "Resumen final",
      items: [
        {
          icon: "🗄️",
          title: "Primero se crea la base",
          desc: "Toda la seguridad parte de una base de datos bien organizada."
        },
        {
          icon: "👤",
          title: "Después se crean usuarios",
          desc: "Cada usuario representa una persona, rol o sistema que necesita acceso."
        },
        {
          icon: "🔐",
          title: "GRANT asigna permisos",
          desc: "Permite decidir qué puede hacer cada usuario dentro de una base de datos."
        },
        {
          icon: "🚫",
          title: "REVOKE quita permisos",
          desc: "Sirve para retirar privilegios cuando ya no deben estar disponibles."
        },
        {
          icon: "👁️",
          title: "Las vistas protegen datos",
          desc: "Permiten mostrar solo una parte de la información sin exponer toda la tabla."
        },
        {
          icon: "⚠️",
          title: "DROP y DELETE son delicados",
          desc: "Deben asignarse con mucho cuidado porque pueden destruir información."
        }
      ]
    }

  ]

}