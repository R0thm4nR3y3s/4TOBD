window.SCENE = {
  title: "BASE DE DATOS U1-2",
  subtitle: "Modelo relacional, modelado de datos, comandos SQL y normalización avanzada",

  nav: [
    { id: "intro", label: "Inicio" },
    { id: "modelo-relacional", label: "Modelo relacional" },
    { id: "estructura-datos", label: "Estructura de datos" },
    { id: "operaciones", label: "Operaciones relacionales" },
    { id: "integridad", label: "Reglas de integridad" },
    { id: "modelo-er", label: "Modelo ER" },
    { id: "er-relacional", label: "ER a relacional" },
    { id: "diccionario", label: "Diccionario de datos" },
    { id: "comandos-bd", label: "5 grupos SQL" },
    { id: "normalizacion", label: "Normalización" },
    { id: "practica-final", label: "Práctica final" },
    { id: "resumen-final", label: "Resumen" }
  ],

  sections: [
    {
      id: "intro",
      type: "heroSplit",
      kicker: "PARCIAL 1-2",
      title: "De los datos desordenados a una",
      highlight: "base de datos profesional",
      description: "En esta escena aprenderás cómo se estructuran los datos usando el modelo relacional, cómo se diseñan entidades y relaciones, cómo se transforman a tablas reales y cómo se normaliza una base de datos hasta formas avanzadas.",
      noteTitle: "Objetivo de clase",
      note: "Que el alumno comprenda cómo pensar, diseñar, construir y mejorar una base de datos relacional desde cero, usando ejemplos reales y código SQL.",
      tags: ["Modelo Relacional", "Modelo ER", "SQL", "Integridad", "Normalización", "Diccionario de Datos"],
      cards: [
        {
          title: "Pensamiento de diseñador",
          desc: "Primero se entiende el problema, después se identifican datos, entidades, relaciones y reglas."
        },
        {
          title: "Construcción técnica",
          desc: "El diseño se convierte en tablas, llaves primarias, llaves foráneas, restricciones y comandos SQL."
        },
        {
          title: "Calidad profesional",
          desc: "La normalización ayuda a evitar duplicidad, errores, inconsistencias y pérdida de información."
        }
      ]
    },

    {
      id: "modelo-relacional",
      type: "conceptGrid",
      title: "El modelo relacional",
      items: [
        {
          icon: "🧩",
          title: "¿Qué es?",
          desc: "Es una forma de organizar información en tablas relacionadas entre sí. Cada tabla representa un conjunto de datos de un mismo tipo, por ejemplo alumnos, cursos, profesores o inscripciones."
        },
        {
          icon: "📊",
          title: "Tabla o relación",
          desc: "Una tabla es una estructura formada por filas y columnas. En teoría relacional también se le conoce como relación."
        },
        {
          icon: "↔️",
          title: "Tuplas",
          desc: "Cada fila de una tabla se llama tupla. Representa un registro completo, por ejemplo un alumno específico."
        },
        {
          icon: "🏷️",
          title: "Atributos",
          desc: "Cada columna de una tabla se llama atributo. Describe una característica del registro, como nombre, correo, teléfono o fecha de nacimiento."
        },
        {
          icon: "🔑",
          title: "Llave primaria",
          desc: "Identifica de manera única cada registro dentro de una tabla. No debe repetirse ni quedar vacía."
        },
        {
          icon: "🔗",
          title: "Llave foránea",
          desc: "Permite conectar una tabla con otra. Sirve para representar relaciones entre datos."
        }
      ]
    },

    {
      id: "estructura-datos",
      type: "table",
      title: "Estructura básica de los datos en el modelo relacional",
      headers: ["Elemento", "Nombre técnico", "Ejemplo", "Función"],
      rows: [
        ["Tabla", "Relación", "Alumno", "Agrupa registros de un mismo tipo."],
        ["Fila", "Tupla", "Alumno con id 1", "Representa un registro individual."],
        ["Columna", "Atributo", "nombre", "Representa una característica del registro."],
        ["Celda", "Valor", "Carlos López", "Dato específico dentro de una fila."],
        ["Dominio", "Tipo permitido", "VARCHAR, INT, DATE", "Define qué valores puede aceptar un atributo."],
        ["Llave primaria", "Primary Key", "id_alumno", "Identifica de forma única cada registro."],
        ["Llave foránea", "Foreign Key", "id_curso", "Conecta una tabla con otra."]
      ]
    },

    {
      id: "ejemplo-tablas",
      type: "codeWindow",
      title: "Ejemplo técnico: estructura relacional básica",
      language: "sql",
      code: `CREATE DATABASE escuela_u12;

USE escuela_u12;

CREATE TABLE alumnos (
  id_alumno INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) UNIQUE,
  telefono VARCHAR(20)
);

CREATE TABLE cursos (
  id_curso INT AUTO_INCREMENT PRIMARY KEY,
  nombre_curso VARCHAR(100) NOT NULL,
  semestre INT NOT NULL
);

CREATE TABLE inscripciones (
  id_inscripcion INT AUTO_INCREMENT PRIMARY KEY,
  id_alumno INT NOT NULL,
  id_curso INT NOT NULL,
  fecha_inscripcion DATE NOT NULL,

  FOREIGN KEY (id_alumno) REFERENCES alumnos(id_alumno),
  FOREIGN KEY (id_curso) REFERENCES cursos(id_curso)
);`
    },

    {
      id: "operaciones",
      type: "flow",
      title: "Operaciones del modelo relacional",
      nodes: [
        {
          title: "Selección",
          desc: "Filtra filas según una condición. Ejemplo: mostrar alumnos de cierto semestre."
        },
        {
          title: "Proyección",
          desc: "Muestra solo algunas columnas. Ejemplo: consultar únicamente nombre y correo."
        },
        {
          title: "Unión",
          desc: "Combina resultados compatibles de dos consultas."
        },
        {
          title: "Diferencia",
          desc: "Devuelve registros que existen en una consulta pero no en otra."
        },
        {
          title: "Producto cartesiano",
          desc: "Combina todas las filas de una tabla con todas las filas de otra."
        },
        {
          title: "Join",
          desc: "Relaciona tablas usando campos en común, normalmente llaves primarias y foráneas."
        }
      ]
    },

    {
      id: "operaciones-sql",
      type: "codeWindow",
      title: "Ejemplos SQL de operaciones relacionales",
      language: "sql",
      code: `-- SELECCIÓN: obtener alumnos con nombre específico
SELECT *
FROM alumnos
WHERE nombre = 'Carlos López';

-- PROYECCIÓN: mostrar solo columnas necesarias
SELECT nombre, correo
FROM alumnos;

-- JOIN: relacionar alumnos con sus cursos
SELECT 
  alumnos.nombre AS alumno,
  cursos.nombre_curso AS curso,
  inscripciones.fecha_inscripcion
FROM inscripciones
INNER JOIN alumnos 
  ON inscripciones.id_alumno = alumnos.id_alumno
INNER JOIN cursos 
  ON inscripciones.id_curso = cursos.id_curso;

-- UNIÓN: combinar resultados compatibles
SELECT nombre FROM alumnos
UNION
SELECT nombre_curso FROM cursos;`
    },

    {
      id: "integridad",
      type: "conceptGrid",
      title: "Reglas de integridad",
      items: [
        {
          icon: "🛡️",
          title: "Integridad de entidad",
          desc: "Toda tabla debe tener una llave primaria. Cada registro debe poder identificarse de forma única."
        },
        {
          icon: "🔗",
          title: "Integridad referencial",
          desc: "Una llave foránea debe apuntar a un registro existente en la tabla relacionada."
        },
        {
          icon: "🎯",
          title: "Integridad de dominio",
          desc: "Cada columna debe aceptar solo datos válidos según su tipo, formato o restricción."
        },
        {
          icon: "📌",
          title: "Restricción NOT NULL",
          desc: "Evita que un campo obligatorio quede vacío."
        },
        {
          icon: "🧬",
          title: "Restricción UNIQUE",
          desc: "Evita valores duplicados en una columna, por ejemplo un correo electrónico."
        },
        {
          icon: "⚙️",
          title: "Restricción CHECK",
          desc: "Permite validar condiciones, como edad mayor a cero o calificación entre 0 y 10."
        }
      ]
    },

    {
      id: "integridad-sql",
      type: "codeWindow",
      title: "Código SQL: reglas de integridad",
      language: "sql",
      code: `CREATE TABLE estudiantes (
  id_estudiante INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) UNIQUE NOT NULL,
  edad INT CHECK (edad >= 15),
  promedio DECIMAL(4,2) CHECK (promedio >= 0 AND promedio <= 10)
);

CREATE TABLE materias (
  id_materia INT AUTO_INCREMENT PRIMARY KEY,
  nombre_materia VARCHAR(100) NOT NULL
);

CREATE TABLE estudiante_materia (
  id_estudiante INT NOT NULL,
  id_materia INT NOT NULL,

  PRIMARY KEY (id_estudiante, id_materia),

  FOREIGN KEY (id_estudiante) 
    REFERENCES estudiantes(id_estudiante),

  FOREIGN KEY (id_materia) 
    REFERENCES materias(id_materia)
);`
    },

    {
      id: "modelo-er",
      type: "conceptGrid",
      title: "Modelado de datos: Modelo Entidad - Relación",
      items: [
        {
          icon: "🏢",
          title: "Entidad",
          desc: "Objeto, persona, lugar o concepto del que necesitamos guardar información. Ejemplo: Alumno, Profesor, Curso, Producto."
        },
        {
          icon: "🧾",
          title: "Atributo",
          desc: "Característica de una entidad. Ejemplo: nombre, correo, teléfono, precio o fecha."
        },
        {
          icon: "🔑",
          title: "Identificador",
          desc: "Atributo que permite distinguir una entidad de otra. Normalmente se convierte en llave primaria."
        },
        {
          icon: "🔄",
          title: "Relación",
          desc: "Asociación entre entidades. Ejemplo: un alumno se inscribe en un curso."
        },
        {
          icon: "1️⃣",
          title: "Cardinalidad 1:1",
          desc: "Un registro de una entidad se relaciona con un solo registro de otra entidad."
        },
        {
          icon: "🔢",
          title: "Cardinalidad 1:N",
          desc: "Un registro de una entidad puede relacionarse con muchos registros de otra."
        },
        {
          icon: "🌐",
          title: "Cardinalidad N:M",
          desc: "Muchos registros de una entidad se relacionan con muchos registros de otra. Requiere una tabla intermedia."
        }
      ]
    },

    {
      id: "er-ejemplo",
      type: "flow",
      title: "Ejemplo conceptual: sistema escolar",
      nodes: [
        {
          title: "Alumno",
          desc: "Entidad principal. Atributos: id_alumno, nombre, correo, teléfono."
        },
        {
          title: "Profesor",
          desc: "Entidad que imparte cursos. Atributos: id_profesor, nombre, especialidad."
        },
        {
          title: "Curso",
          desc: "Entidad académica. Atributos: id_curso, nombre, semestre, id_profesor."
        },
        {
          title: "Inscripción",
          desc: "Tabla intermedia entre alumno y curso. Resuelve la relación muchos a muchos."
        },
        {
          title: "Calificación",
          desc: "Dato asociado a la inscripción. Permite registrar el desempeño del alumno en un curso."
        }
      ]
    },

    {
      id: "er-relacional",
      type: "table",
      title: "Relación entre esquema ER y esquema relacional",
      headers: ["Modelo ER", "Modelo Relacional", "Resultado técnico"],
      rows: [
        ["Entidad", "Tabla", "Alumno se convierte en tabla alumnos."],
        ["Atributo", "Columna", "nombre se convierte en columna nombre."],
        ["Identificador", "Llave primaria", "id_alumno se convierte en PRIMARY KEY."],
        ["Relación 1:N", "Llave foránea", "Curso incluye id_profesor."],
        ["Relación N:M", "Tabla intermedia", "Alumno y Curso generan inscripciones."],
        ["Atributo de relación", "Columna en tabla intermedia", "calificación se guarda en inscripciones."]
      ]
    },

    {
      id: "er-relacional-sql",
      type: "codeWindow",
      title: "Transformación ER a modelo relacional con SQL",
      language: "sql",
      code: `CREATE TABLE profesores (
  id_profesor INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  especialidad VARCHAR(100)
);

CREATE TABLE cursos (
  id_curso INT AUTO_INCREMENT PRIMARY KEY,
  nombre_curso VARCHAR(100) NOT NULL,
  semestre INT NOT NULL,
  id_profesor INT NOT NULL,

  FOREIGN KEY (id_profesor) 
    REFERENCES profesores(id_profesor)
);

CREATE TABLE alumnos (
  id_alumno INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) UNIQUE
);

CREATE TABLE inscripciones (
  id_inscripcion INT AUTO_INCREMENT PRIMARY KEY,
  id_alumno INT NOT NULL,
  id_curso INT NOT NULL,
  fecha_inscripcion DATE NOT NULL,
  calificacion DECIMAL(4,2),

  FOREIGN KEY (id_alumno) REFERENCES alumnos(id_alumno),
  FOREIGN KEY (id_curso) REFERENCES cursos(id_curso)
);`
    },

    {
      id: "diccionario",
      type: "table",
      title: "Diccionario de datos: tabla alumnos",
      headers: ["Campo", "Tipo", "Restricción", "Descripción"],
      rows: [
        ["id_alumno", "INT", "PRIMARY KEY, AUTO_INCREMENT", "Identificador único del alumno."],
        ["nombre", "VARCHAR(100)", "NOT NULL", "Nombre completo del alumno."],
        ["correo", "VARCHAR(100)", "UNIQUE", "Correo electrónico del alumno."],
        ["telefono", "VARCHAR(20)", "NULL", "Número telefónico de contacto."],
        ["fecha_registro", "DATE", "NOT NULL", "Fecha en que se registró el alumno."]
      ]
    },

    {
      id: "diccionario-curso",
      type: "table",
      title: "Diccionario de datos: tabla cursos",
      headers: ["Campo", "Tipo", "Restricción", "Descripción"],
      rows: [
        ["id_curso", "INT", "PRIMARY KEY, AUTO_INCREMENT", "Identificador único del curso."],
        ["nombre_curso", "VARCHAR(100)", "NOT NULL", "Nombre oficial del curso."],
        ["semestre", "INT", "NOT NULL", "Semestre en el que se imparte."],
        ["id_profesor", "INT", "FOREIGN KEY", "Profesor responsable del curso."]
      ]
    },

    {
      id: "comandos-bd",
      type: "conceptGrid",
      title: "Los 5 grupos principales de comandos para bases de datos",
      items: [
        {
          icon: "🏗️",
          title: "DDL",
          desc: "Data Definition Language. Sirve para crear, modificar o eliminar estructuras de la base de datos: CREATE, ALTER, DROP, TRUNCATE."
        },
        {
          icon: "✍️",
          title: "DML",
          desc: "Data Manipulation Language. Sirve para insertar, modificar o borrar registros: INSERT, UPDATE, DELETE."
        },
        {
          icon: "🔎",
          title: "DQL",
          desc: "Data Query Language. Sirve para consultar información: SELECT."
        },
        {
          icon: "🔐",
          title: "DCL",
          desc: "Data Control Language. Sirve para controlar permisos: GRANT, REVOKE."
        },
        {
          icon: "💾",
          title: "TCL",
          desc: "Transaction Control Language. Sirve para controlar transacciones: COMMIT, ROLLBACK, SAVEPOINT."
        }
      ]
    },

    {
      id: "comandos-sql",
      type: "codeWindow",
      title: "Ejemplos de los 5 grupos de comandos SQL",
      language: "sql",
      code: `-- DDL: crear estructura
CREATE TABLE productos (
  id_producto INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL
);

-- DML: insertar datos
INSERT INTO productos (nombre, precio)
VALUES ('Mouse inalámbrico', 250.00);

-- DQL: consultar datos
SELECT *
FROM productos;

-- DCL: permisos
GRANT SELECT, INSERT ON escuela_u12.* TO 'usuario_app'@'localhost';

-- TCL: transacciones
START TRANSACTION;

UPDATE productos
SET precio = 230.00
WHERE id_producto = 1;

COMMIT;`
    },

    {
      id: "normalizacion",
      type: "heroSplit",
      kicker: "NORMALIZACIÓN DE BASES DE DATOS",
      title: "Ordenar los datos para evitar",
      highlight: "duplicidad, errores y caos",
      description: "La normalización es un proceso para organizar tablas y relaciones con el objetivo de reducir redundancia, evitar anomalías y mejorar la integridad de la información.",
      noteTitle: "Idea central",
      note: "Una tabla mal diseñada mezcla datos, repite información y causa problemas al insertar, actualizar o eliminar registros.",
      tags: ["1FN", "2FN", "3FN", "4FN", "5FN", "Diseño limpio"],
      cards: [
        {
          title: "Anomalía de inserción",
          desc: "No puedes guardar ciertos datos si no existe otro dato relacionado."
        },
        {
          title: "Anomalía de actualización",
          desc: "Debes actualizar el mismo dato repetido en varias filas."
        },
        {
          title: "Anomalía de eliminación",
          desc: "Al borrar un registro puedes perder información importante."
        }
      ]
    },

    {
      id: "tabla-sin-normalizar",
      type: "table",
      title: "Ejemplo inicial: tabla sin normalizar",
      headers: ["id_pedido", "cliente", "telefono", "productos", "precios", "vendedor"],
      rows: [
        ["1", "Ana Pérez", "5551112233", "Mouse, Teclado", "250, 400", "Luis"],
        ["2", "Ana Pérez", "5551112233", "Monitor", "2500", "Luis"],
        ["3", "Carlos Ruiz", "5559998877", "Laptop, Mouse", "8500, 250", "María"]
      ]
    },

    {
      id: "problemas-tabla",
      type: "conceptGrid",
      title: "Problemas de la tabla sin normalizar",
      items: [
        {
          icon: "⚠️",
          title: "Datos repetidos",
          desc: "El nombre y teléfono del cliente se repiten en varios pedidos."
        },
        {
          icon: "🧨",
          title: "Campos con varios valores",
          desc: "La columna productos contiene más de un producto, lo cual dificulta consultas y cálculos."
        },
        {
          icon: "🔀",
          title: "Mezcla de temas",
          desc: "La tabla guarda pedidos, clientes, productos y vendedores al mismo tiempo."
        },
        {
          icon: "📉",
          title: "Consultas difíciles",
          desc: "Calcular ventas por producto o buscar pedidos por cliente se vuelve complicado."
        }
      ]
    },

    {
      id: "primera-forma-normal",
      type: "conceptGrid",
      title: "Primera Forma Normal 1FN",
      items: [
        {
          icon: "1️⃣",
          title: "Regla principal",
          desc: "Cada celda debe contener un solo valor. No debe haber listas dentro de una columna."
        },
        {
          icon: "📌",
          title: "Antes",
          desc: "Un campo productos contiene: Mouse, Teclado."
        },
        {
          icon: "✅",
          title: "Después",
          desc: "Cada producto se coloca en una fila independiente o en una tabla detalle."
        }
      ]
    },

    {
      id: "codigo-1fn",
      type: "codeWindow",
      title: "1FN: separar valores repetidos en filas",
      language: "sql",
      code: `CREATE TABLE pedidos_1fn (
  id_pedido INT,
  cliente VARCHAR(100),
  telefono VARCHAR(20),
  producto VARCHAR(100),
  precio DECIMAL(10,2),
  vendedor VARCHAR(100)
);

INSERT INTO pedidos_1fn VALUES
(1, 'Ana Pérez', '5551112233', 'Mouse', 250.00, 'Luis'),
(1, 'Ana Pérez', '5551112233', 'Teclado', 400.00, 'Luis'),
(2, 'Ana Pérez', '5551112233', 'Monitor', 2500.00, 'Luis'),
(3, 'Carlos Ruiz', '5559998877', 'Laptop', 8500.00, 'María'),
(3, 'Carlos Ruiz', '5559998877', 'Mouse', 250.00, 'María');`
    },

    {
      id: "segunda-forma-normal",
      type: "conceptGrid",
      title: "Segunda Forma Normal 2FN",
      items: [
        {
          icon: "2️⃣",
          title: "Regla principal",
          desc: "Debe estar en 1FN y todos los campos no clave deben depender completamente de la llave primaria."
        },
        {
          icon: "🧠",
          title: "Problema típico",
          desc: "En una tabla de detalle, el nombre del cliente depende del pedido, pero no del producto."
        },
        {
          icon: "🧱",
          title: "Solución",
          desc: "Separar clientes, pedidos, productos y detalle de pedido en tablas distintas."
        }
      ]
    },

    {
      id: "codigo-2fn",
      type: "codeWindow",
      title: "2FN: separar dependencias parciales",
      language: "sql",
      code: `CREATE TABLE clientes (
  id_cliente INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  telefono VARCHAR(20)
);

CREATE TABLE vendedores (
  id_vendedor INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

CREATE TABLE productos (
  id_producto INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL
);

CREATE TABLE pedidos (
  id_pedido INT AUTO_INCREMENT PRIMARY KEY,
  id_cliente INT NOT NULL,
  id_vendedor INT NOT NULL,
  fecha DATE NOT NULL,

  FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
  FOREIGN KEY (id_vendedor) REFERENCES vendedores(id_vendedor)
);

CREATE TABLE detalle_pedido (
  id_pedido INT NOT NULL,
  id_producto INT NOT NULL,
  cantidad INT NOT NULL,
  precio_unitario DECIMAL(10,2) NOT NULL,

  PRIMARY KEY (id_pedido, id_producto),

  FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);`
    },

    {
      id: "tercera-forma-normal",
      type: "conceptGrid",
      title: "Tercera Forma Normal 3FN",
      items: [
        {
          icon: "3️⃣",
          title: "Regla principal",
          desc: "Debe estar en 2FN y ningún campo no clave debe depender de otro campo no clave."
        },
        {
          icon: "⚠️",
          title: "Dependencia transitiva",
          desc: "Ocurre cuando un dato depende de otro dato que no es llave primaria."
        },
        {
          icon: "✅",
          title: "Solución",
          desc: "Separar catálogos o entidades independientes para evitar repetir información."
        }
      ]
    },

    {
      id: "codigo-3fn",
      type: "codeWindow",
      title: "3FN: eliminar dependencias transitivas",
      language: "sql",
      code: `-- MAL DISEÑO:
-- producto guarda categoria_nombre directamente.
-- Si cambia el nombre de la categoría, habría que actualizar muchos productos.

CREATE TABLE categorias (
  id_categoria INT AUTO_INCREMENT PRIMARY KEY,
  nombre_categoria VARCHAR(100) NOT NULL UNIQUE
);

ALTER TABLE productos
ADD id_categoria INT;

ALTER TABLE productos
ADD CONSTRAINT fk_producto_categoria
FOREIGN KEY (id_categoria)
REFERENCES categorias(id_categoria);

-- Ahora el producto guarda solo id_categoria.
-- El nombre de la categoría vive en su propia tabla.`
    },

    {
      id: "cuarta-forma-normal",
      type: "conceptGrid",
      title: "Cuarta Forma Normal 4FN",
      items: [
        {
          icon: "4️⃣",
          title: "Regla principal",
          desc: "Debe estar en 3FN y no debe tener dependencias multivaluadas independientes."
        },
        {
          icon: "🧩",
          title: "Problema típico",
          desc: "Una tabla mezcla varias listas independientes de una entidad, por ejemplo habilidades e idiomas de un profesor."
        },
        {
          icon: "✅",
          title: "Solución",
          desc: "Separar cada conjunto multivaluado en su propia tabla relacionada."
        }
      ]
    },

    {
      id: "codigo-4fn",
      type: "codeWindow",
      title: "4FN: separar datos multivaluados independientes",
      language: "sql",
      code: `CREATE TABLE profesores_4fn (
  id_profesor INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

CREATE TABLE habilidades (
  id_habilidad INT AUTO_INCREMENT PRIMARY KEY,
  nombre_habilidad VARCHAR(100) NOT NULL
);

CREATE TABLE idiomas (
  id_idioma INT AUTO_INCREMENT PRIMARY KEY,
  nombre_idioma VARCHAR(100) NOT NULL
);

CREATE TABLE profesor_habilidad (
  id_profesor INT NOT NULL,
  id_habilidad INT NOT NULL,

  PRIMARY KEY (id_profesor, id_habilidad),

  FOREIGN KEY (id_profesor) REFERENCES profesores_4fn(id_profesor),
  FOREIGN KEY (id_habilidad) REFERENCES habilidades(id_habilidad)
);

CREATE TABLE profesor_idioma (
  id_profesor INT NOT NULL,
  id_idioma INT NOT NULL,

  PRIMARY KEY (id_profesor, id_idioma),

  FOREIGN KEY (id_profesor) REFERENCES profesores_4fn(id_profesor),
  FOREIGN KEY (id_idioma) REFERENCES idiomas(id_idioma)
);`
    },

    {
      id: "quinta-forma-normal",
      type: "conceptGrid",
      title: "Quinta Forma Normal 5FN",
      items: [
        {
          icon: "5️⃣",
          title: "Regla principal",
          desc: "Debe estar en 4FN y no debe tener dependencias de unión innecesarias."
        },
        {
          icon: "🧠",
          title: "Uso avanzado",
          desc: "Se aplica cuando una relación compleja puede descomponerse en varias relaciones más pequeñas sin perder información."
        },
        {
          icon: "🏢",
          title: "Ejemplo típico",
          desc: "Proveedor, producto y sucursal pueden tener relaciones independientes que no siempre deben guardarse en una sola tabla triple."
        }
      ]
    },

    {
      id: "codigo-5fn",
      type: "codeWindow",
      title: "5FN: dividir relaciones complejas",
      language: "sql",
      code: `CREATE TABLE proveedores (
  id_proveedor INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

CREATE TABLE sucursales (
  id_sucursal INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL
);

CREATE TABLE proveedor_producto (
  id_proveedor INT NOT NULL,
  id_producto INT NOT NULL,

  PRIMARY KEY (id_proveedor, id_producto),

  FOREIGN KEY (id_proveedor) REFERENCES proveedores(id_proveedor),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

CREATE TABLE proveedor_sucursal (
  id_proveedor INT NOT NULL,
  id_sucursal INT NOT NULL,

  PRIMARY KEY (id_proveedor, id_sucursal),

  FOREIGN KEY (id_proveedor) REFERENCES proveedores(id_proveedor),
  FOREIGN KEY (id_sucursal) REFERENCES sucursales(id_sucursal)
);

CREATE TABLE producto_sucursal (
  id_producto INT NOT NULL,
  id_sucursal INT NOT NULL,

  PRIMARY KEY (id_producto, id_sucursal),

  FOREIGN KEY (id_producto) REFERENCES productos(id_producto),
  FOREIGN KEY (id_sucursal) REFERENCES sucursales(id_sucursal)
);`
    },

    {
      id: "comparativa-normalizacion",
      type: "table",
      title: "Comparativa de formas normales",
      headers: ["Forma normal", "Qué corrige", "Pregunta clave"],
      rows: [
        ["1FN", "Celdas con varios valores", "¿Cada celda tiene un solo dato?"],
        ["2FN", "Dependencias parciales", "¿Cada dato depende de toda la llave primaria?"],
        ["3FN", "Dependencias transitivas", "¿Hay datos que dependen de otros datos no clave?"],
        ["4FN", "Dependencias multivaluadas", "¿Hay listas independientes mezcladas?"],
        ["5FN", "Dependencias de unión", "¿La relación compleja se puede dividir sin perder información?"]
      ]
    },

    {
      id: "datos-prueba",
      type: "codeWindow",
      title: "Datos de prueba para el sistema normalizado",
      language: "sql",
      code: `INSERT INTO clientes (nombre, telefono) VALUES
('Ana Pérez', '5551112233'),
('Carlos Ruiz', '5559998877');

INSERT INTO vendedores (nombre) VALUES
('Luis'),
('María');

INSERT INTO categorias (nombre_categoria) VALUES
('Periféricos'),
('Computadoras'),
('Monitores');

INSERT INTO productos (nombre, precio, id_categoria) VALUES
('Mouse', 250.00, 1),
('Teclado', 400.00, 1),
('Laptop', 8500.00, 2),
('Monitor', 2500.00, 3);

INSERT INTO pedidos (id_cliente, id_vendedor, fecha) VALUES
(1, 1, '2026-05-14'),
(2, 2, '2026-05-14');

INSERT INTO detalle_pedido 
(id_pedido, id_producto, cantidad, precio_unitario) VALUES
(1, 1, 1, 250.00),
(1, 2, 1, 400.00),
(2, 3, 1, 8500.00),
(2, 1, 2, 250.00);`
    },

    {
      id: "consulta-final",
      type: "codeWindow",
      title: "Consulta final: reporte profesional de ventas",
      language: "sql",
      code: `SELECT
  pedidos.id_pedido,
  clientes.nombre AS cliente,
  vendedores.nombre AS vendedor,
  productos.nombre AS producto,
  categorias.nombre_categoria AS categoria,
  detalle_pedido.cantidad,
  detalle_pedido.precio_unitario,
  detalle_pedido.cantidad * detalle_pedido.precio_unitario AS subtotal,
  pedidos.fecha
FROM detalle_pedido
INNER JOIN pedidos 
  ON detalle_pedido.id_pedido = pedidos.id_pedido
INNER JOIN clientes 
  ON pedidos.id_cliente = clientes.id_cliente
INNER JOIN vendedores 
  ON pedidos.id_vendedor = vendedores.id_vendedor
INNER JOIN productos 
  ON detalle_pedido.id_producto = productos.id_producto
INNER JOIN categorias 
  ON productos.id_categoria = categorias.id_categoria
ORDER BY pedidos.id_pedido ASC;`
    },

    {
      id: "practica-final",
      type: "practice",
      title: "Práctica para alumnos: diseño completo de base de datos",
      items: [
        "Lee el caso: una escuela necesita controlar alumnos, profesores, materias, grupos, inscripciones y calificaciones.",
        "Identifica mínimo 6 entidades principales.",
        "Define atributos para cada entidad.",
        "Marca la llave primaria de cada entidad.",
        "Identifica relaciones 1:1, 1:N y N:M.",
        "Convierte el modelo ER a tablas relacionales.",
        "Crea el diccionario de datos de mínimo 3 tablas.",
        "Escribe el código SQL para crear la base de datos.",
        "Inserta mínimo 5 registros por tabla.",
        "Crea una consulta con INNER JOIN que muestre alumno, materia, profesor y calificación.",
        "Revisa si tu diseño cumple 1FN, 2FN y 3FN.",
        "Explica qué problema evita cada forma normal aplicada."
      ]
    },

    {
      id: "practica-normalizacion",
      type: "practice",
      title: "Práctica guiada de normalización",
      items: [
        "Crea una tabla inicial llamada ventas_desordenadas con datos repetidos.",
        "Incluye columnas con listas de productos separados por comas.",
        "Detecta qué regla de 1FN se está rompiendo.",
        "Separa los productos en filas independientes.",
        "Detecta dependencias parciales para aplicar 2FN.",
        "Separa clientes, productos, vendedores y pedidos.",
        "Detecta dependencias transitivas para aplicar 3FN.",
        "Crea una tabla categorias y relaciónala con productos.",
        "Agrega llaves primarias y foráneas.",
        "Genera una consulta final que demuestre que el modelo funciona."
      ]
    },

    {
      id: "resumen-final",
      type: "conceptGrid",
      title: "Resumen final de la unidad",
      items: [
        {
          icon: "🧠",
          title: "Modelo relacional",
          desc: "Organiza los datos en tablas conectadas mediante llaves primarias y foráneas."
        },
        {
          icon: "📐",
          title: "Modelo ER",
          desc: "Permite diseñar visualmente entidades, atributos, relaciones y cardinalidades antes de programar."
        },
        {
          icon: "🔄",
          title: "ER a relacional",
          desc: "Las entidades se convierten en tablas, los atributos en columnas y las relaciones en llaves o tablas intermedias."
        },
        {
          icon: "📘",
          title: "Diccionario de datos",
          desc: "Documenta campos, tipos, restricciones y significado de cada dato."
        },
        {
          icon: "💻",
          title: "Comandos SQL",
          desc: "DDL, DML, DQL, DCL y TCL permiten crear, manipular, consultar, proteger y controlar la base de datos."
        },
        {
          icon: "🧼",
          title: "Normalización",
          desc: "Mejora el diseño eliminando redundancia, anomalías y dependencias incorrectas."
        }
      ]
    }
  ]
}