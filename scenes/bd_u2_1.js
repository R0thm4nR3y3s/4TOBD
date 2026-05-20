window.SCENE = {

  title: "BASE DE DATOS U2-1",
  subtitle: "Restricciones de columna, restricciones de tabla, creación y borrado de vistas",

  nav: [
    { id: "intro", label: "Inicio" },
    { id: "restricciones-columna", label: "Restricciones de columna" },
    { id: "restricciones-tabla", label: "Restricciones de tabla" },
    { id: "comparativa", label: "Comparativa" },
    { id: "vistas", label: "Vistas" },
    { id: "codigo-general", label: "Código SQL" },
    { id: "practicas", label: "Prácticas" },
    { id: "resumen-final", label: "Resumen final" }
  ],

  sections: [

    {
      id: "intro",
      type: "heroSplit",
      kicker: "PARCIAL 2-2",
      title: "Control, seguridad y presentación de datos",
      highlight: "Restricciones y vistas",
      description: "En esta clase el alumno aprenderá a proteger la integridad de una base de datos usando restricciones y a presentar información mediante vistas SQL.",
      noteTitle: "Idea clave",
      note: "Una base de datos profesional no solo guarda datos; también valida, protege y organiza la información para evitar errores.",
      tags: [
        "MySQL",
        "Integridad de datos",
        "Restricciones",
        "Vistas",
        "SQL"
      ],
      cards: [
        {
          title: "Restricciones",
          desc: "Reglas que evitan datos incorrectos, duplicados o incompletos."
        },
        {
          title: "Vistas",
          desc: "Consultas guardadas que funcionan como tablas virtuales para simplificar reportes."
        },
        {
          title: "Objetivo",
          desc: "Diseñar tablas más seguras y consultar información de forma más clara."
        }
      ]
    },

    {
      id: "restricciones-columna",
      type: "conceptGrid",
      title: "Restricciones de columna",
      items: [
        {
          icon: "🔒",
          title: "NOT NULL",
          desc: "Obliga a que una columna siempre tenga un valor. Evita registros incompletos."
        },
        {
          icon: "🆔",
          title: "PRIMARY KEY",
          desc: "Identifica de manera única cada registro de una tabla. No acepta valores repetidos ni nulos."
        },
        {
          icon: "♻️",
          title: "UNIQUE",
          desc: "Evita que se repitan valores en una columna, como un correo, matrícula o RFC."
        },
        {
          icon: "✅",
          title: "CHECK",
          desc: "Valida que un valor cumpla una condición específica, por ejemplo edad mayor o igual a 18."
        },
        {
          icon: "🎯",
          title: "DEFAULT",
          desc: "Asigna un valor automático cuando el usuario no proporciona uno."
        },
        {
          icon: "🔗",
          title: "FOREIGN KEY",
          desc: "Relaciona una columna con la llave primaria de otra tabla para mantener consistencia."
        }
      ]
    },

    {
      id: "ejemplo-columna",
      type: "codeWindow",
      title: "Ejemplo SQL · Restricciones de columna",
      language: "sql",
      code: `CREATE DATABASE escuela_u2;
USE escuela_u2;

CREATE TABLE alumno (
  id_alumno INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(80) NOT NULL,
  correo VARCHAR(100) UNIQUE,
  edad INT CHECK (edad >= 15),
  estatus VARCHAR(20) DEFAULT 'Activo'
);`
    },

    {
      id: "tabla-restricciones-columna",
      type: "table",
      title: "Tabla de restricciones de columna",
      headers: [
        "Restricción",
        "Función",
        "Ejemplo de uso"
      ],
      rows: [
        [
          "NOT NULL",
          "Evita valores vacíos",
          "nombre VARCHAR(80) NOT NULL"
        ],
        [
          "PRIMARY KEY",
          "Identifica cada registro",
          "id_alumno INT PRIMARY KEY"
        ],
        [
          "UNIQUE",
          "Evita datos repetidos",
          "correo VARCHAR(100) UNIQUE"
        ],
        [
          "CHECK",
          "Valida una condición",
          "edad INT CHECK (edad >= 15)"
        ],
        [
          "DEFAULT",
          "Asigna valor automático",
          "estatus VARCHAR(20) DEFAULT 'Activo'"
        ]
      ]
    },

    {
      id: "restricciones-tabla",
      type: "conceptGrid",
      title: "Restricciones de tabla",
      items: [
        {
          icon: "🏗️",
          title: "Definición a nivel tabla",
          desc: "Se escriben después de declarar las columnas y permiten crear reglas más estructuradas."
        },
        {
          icon: "🧩",
          title: "Llaves primarias compuestas",
          desc: "Permiten formar una llave primaria usando dos o más columnas."
        },
        {
          icon: "🔗",
          title: "Relaciones entre tablas",
          desc: "Permiten conectar tablas mediante claves foráneas."
        },
        {
          icon: "🛡️",
          title: "Integridad referencial",
          desc: "Evita registros huérfanos o relaciones inválidas entre tablas."
        }
      ]
    },

    {
      id: "ejemplo-tabla",
      type: "codeWindow",
      title: "Ejemplo SQL · Restricciones de tabla",
      language: "sql",
      code: `CREATE TABLE curso (
  id_curso INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  creditos INT CHECK (creditos > 0)
);

CREATE TABLE inscripcion (
  id_alumno INT,
  id_curso INT,
  fecha_inscripcion DATE NOT NULL,

  CONSTRAINT pk_inscripcion
  PRIMARY KEY (id_alumno, id_curso),

  CONSTRAINT fk_inscripcion_alumno
  FOREIGN KEY (id_alumno)
  REFERENCES alumno(id_alumno),

  CONSTRAINT fk_inscripcion_curso
  FOREIGN KEY (id_curso)
  REFERENCES curso(id_curso)
);`
    },

    {
      id: "flujo-restricciones",
      type: "flow",
      title: "Flujo lógico para aplicar restricciones",
      nodes: [
        {
          title: "1. Identificar datos importantes",
          desc: "Detectar columnas como ID, correo, matrícula, precio, fecha o estatus."
        },
        {
          title: "2. Definir reglas",
          desc: "Decidir qué datos son obligatorios, únicos o deben cumplir una condición."
        },
        {
          title: "3. Crear restricciones",
          desc: "Aplicar NOT NULL, UNIQUE, CHECK, DEFAULT, PRIMARY KEY o FOREIGN KEY."
        },
        {
          title: "4. Probar inserciones",
          desc: "Insertar datos correctos e incorrectos para comprobar que las reglas funcionan."
        },
        {
          title: "5. Validar integridad",
          desc: "Confirmar que la base de datos rechaza información inválida."
        }
      ]
    },

    {
      id: "comparativa",
      type: "table",
      title: "Restricciones de columna vs restricciones de tabla",
      headers: [
        "Tipo",
        "Dónde se declara",
        "Cuándo conviene usarla",
        "Ejemplo"
      ],
      rows: [
        [
          "Columna",
          "Junto al nombre de la columna",
          "Cuando la regla afecta solo a una columna",
          "correo VARCHAR(100) UNIQUE"
        ],
        [
          "Tabla",
          "Al final de la definición de columnas",
          "Cuando la regla involucra varias columnas o relaciones",
          "PRIMARY KEY (id_alumno, id_curso)"
        ],
        [
          "Columna",
          "Dentro de CREATE TABLE",
          "Para reglas simples y directas",
          "nombre VARCHAR(80) NOT NULL"
        ],
        [
          "Tabla",
          "Después de todas las columnas",
          "Para claves foráneas o nombres personalizados de restricciones",
          "CONSTRAINT fk_alumno FOREIGN KEY (...)"
        ]
      ]
    },

    {
      id: "vistas",
      type: "conceptGrid",
      title: "Creación y borrado de vistas",
      items: [
        {
          icon: "👁️",
          title: "Vista",
          desc: "Es una consulta guardada que se comporta como una tabla virtual."
        },
        {
          icon: "📊",
          title: "Reportes",
          desc: "Permite mostrar información organizada sin escribir consultas largas cada vez."
        },
        {
          icon: "🔐",
          title: "Seguridad",
          desc: "Ayuda a mostrar solo ciertas columnas y ocultar información sensible."
        },
        {
          icon: "⚡",
          title: "Simplicidad",
          desc: "Facilita consultas complejas usando un nombre simple."
        },
        {
          icon: "🧹",
          title: "DROP VIEW",
          desc: "Permite eliminar una vista cuando ya no se necesita."
        }
      ]
    },

    {
      id: "crear-vista",
      type: "codeWindow",
      title: "Ejemplo SQL · Crear una vista",
      language: "sql",
      code: `CREATE VIEW vista_alumnos_activos AS
SELECT
  id_alumno,
  nombre,
  correo,
  estatus
FROM alumno
WHERE estatus = 'Activo';`
    },

    {
      id: "consultar-vista",
      type: "codeWindow",
      title: "Ejemplo SQL · Consultar una vista",
      language: "sql",
      code: `SELECT *
FROM vista_alumnos_activos;`
    },

    {
      id: "vista-join",
      type: "codeWindow",
      title: "Ejemplo SQL · Vista con varias tablas",
      language: "sql",
      code: `CREATE VIEW vista_inscripciones AS
SELECT
  alumno.nombre AS alumno,
  curso.nombre AS curso,
  curso.creditos,
  inscripcion.fecha_inscripcion
FROM inscripcion
INNER JOIN alumno
  ON inscripcion.id_alumno = alumno.id_alumno
INNER JOIN curso
  ON inscripcion.id_curso = curso.id_curso;`
    },

    {
      id: "borrar-vista",
      type: "codeWindow",
      title: "Ejemplo SQL · Borrar una vista",
      language: "sql",
      code: `DROP VIEW vista_alumnos_activos;

DROP VIEW IF EXISTS vista_inscripciones;`
    },

    {
      id: "tabla-vistas",
      type: "table",
      title: "Comandos principales para vistas",
      headers: [
        "Comando",
        "Función",
        "Ejemplo"
      ],
      rows: [
        [
          "CREATE VIEW",
          "Crea una vista nueva",
          "CREATE VIEW vista_nombre AS SELECT ..."
        ],
        [
          "SELECT",
          "Consulta los datos de una vista",
          "SELECT * FROM vista_nombre;"
        ],
        [
          "DROP VIEW",
          "Elimina una vista",
          "DROP VIEW vista_nombre;"
        ],
        [
          "DROP VIEW IF EXISTS",
          "Elimina una vista solo si existe",
          "DROP VIEW IF EXISTS vista_nombre;"
        ]
      ]
    },

    {
      id: "codigo-general",
      type: "codeWindow",
      title: "Práctica completa SQL · Restricciones y vistas",
      language: "sql",
      code: `CREATE DATABASE tienda_u2;
USE tienda_u2;

CREATE TABLE cliente (
  id_cliente INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  telefono VARCHAR(20),
  correo VARCHAR(100) UNIQUE,
  estatus VARCHAR(20) DEFAULT 'Activo'
);

CREATE TABLE producto (
  id_producto INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) CHECK (precio > 0),
  existencia INT DEFAULT 0 CHECK (existencia >= 0)
);

CREATE TABLE venta (
  id_venta INT PRIMARY KEY AUTO_INCREMENT,
  id_cliente INT NOT NULL,
  fecha DATE NOT NULL,

  CONSTRAINT fk_venta_cliente
  FOREIGN KEY (id_cliente)
  REFERENCES cliente(id_cliente)
);

CREATE TABLE detalle_venta (
  id_venta INT,
  id_producto INT,
  cantidad INT NOT NULL CHECK (cantidad > 0),
  precio_unitario DECIMAL(10,2) NOT NULL CHECK (precio_unitario > 0),

  CONSTRAINT pk_detalle_venta
  PRIMARY KEY (id_venta, id_producto),

  CONSTRAINT fk_detalle_venta
  FOREIGN KEY (id_venta)
  REFERENCES venta(id_venta),

  CONSTRAINT fk_detalle_producto
  FOREIGN KEY (id_producto)
  REFERENCES producto(id_producto)
);

INSERT INTO cliente (nombre, telefono, correo)
VALUES
('Ana López', '7441234567', 'ana@mail.com'),
('Carlos Ruiz', '7445558899', 'carlos@mail.com');

INSERT INTO producto (nombre, precio, existencia)
VALUES
('Memoria USB 32GB', 120.00, 15),
('Mouse inalámbrico', 180.00, 10),
('Teclado mecánico', 650.00, 5);

INSERT INTO venta (id_cliente, fecha)
VALUES
(1, '2026-05-14'),
(2, '2026-05-14');

INSERT INTO detalle_venta (id_venta, id_producto, cantidad, precio_unitario)
VALUES
(1, 1, 2, 120.00),
(1, 2, 1, 180.00),
(2, 3, 1, 650.00);

CREATE VIEW vista_reporte_ventas AS
SELECT
  venta.id_venta,
  cliente.nombre AS cliente,
  producto.nombre AS producto,
  detalle_venta.cantidad,
  detalle_venta.precio_unitario,
  detalle_venta.cantidad * detalle_venta.precio_unitario AS subtotal,
  venta.fecha
FROM venta
INNER JOIN cliente
  ON venta.id_cliente = cliente.id_cliente
INNER JOIN detalle_venta
  ON venta.id_venta = detalle_venta.id_venta
INNER JOIN producto
  ON detalle_venta.id_producto = producto.id_producto;

SELECT *
FROM vista_reporte_ventas;

DROP VIEW IF EXISTS vista_reporte_ventas;`
    },

    {
      id: "practicas",
      type: "practice",
      title: "Prácticas para alumnos",
      items: [
        "Crear una base de datos llamada biblioteca_u2.",
        "Crear una tabla libro con restricciones NOT NULL, UNIQUE, CHECK y DEFAULT.",
        "Crear una tabla usuario con clave primaria y correo único.",
        "Crear una tabla prestamo relacionada con libro y usuario usando FOREIGN KEY.",
        "Crear una llave primaria compuesta en una tabla detalle_prestamo.",
        "Insertar datos correctos para comprobar que la base funciona.",
        "Intentar insertar datos incorrectos para observar cómo actúan las restricciones.",
        "Crear una vista llamada vista_prestamos_activos.",
        "Consultar la vista usando SELECT.",
        "Eliminar la vista usando DROP VIEW IF EXISTS."
      ]
    },

    {
      id: "practica-evaluacion",
      type: "table",
      title: "Lista de cotejo para evaluar la práctica",
      headers: [
        "Criterio",
        "Cumple",
        "Observaciones"
      ],
      rows: [
        [
          "Crea correctamente la base de datos",
          "Sí / No",
          "Debe usar CREATE DATABASE y USE"
        ],
        [
          "Aplica restricciones de columna",
          "Sí / No",
          "NOT NULL, UNIQUE, CHECK, DEFAULT"
        ],
        [
          "Aplica restricciones de tabla",
          "Sí / No",
          "PRIMARY KEY compuesta y FOREIGN KEY"
        ],
        [
          "Inserta datos de prueba",
          "Sí / No",
          "Debe incluir registros válidos"
        ],
        [
          "Crea vistas correctamente",
          "Sí / No",
          "Debe usar CREATE VIEW"
        ],
        [
          "Elimina vistas correctamente",
          "Sí / No",
          "Debe usar DROP VIEW IF EXISTS"
        ]
      ]
    },

    {
      id: "resumen-final",
      type: "heroSplit",
      kicker: "CIERRE DE CLASE",
      title: "Una base de datos profesional",
      highlight: "controla, valida y presenta información",
      description: "Las restricciones permiten proteger los datos desde el diseño de las tablas. Las vistas permiten transformar consultas complejas en herramientas simples para reportes, seguridad y análisis.",
      noteTitle: "Conclusión",
      note: "Las restricciones cuidan la calidad de los datos. Las vistas mejoran la forma en que consultamos y presentamos la información.",
      tags: [
        "Restricciones de columna",
        "Restricciones de tabla",
        "CREATE VIEW",
        "DROP VIEW",
        "Integridad"
      ],
      cards: [
        {
          title: "Restricciones de columna",
          desc: "Se aplican directamente sobre una columna para validar datos individuales."
        },
        {
          title: "Restricciones de tabla",
          desc: "Permiten definir reglas más completas, relaciones y claves compuestas."
        },
        {
          title: "Vistas",
          desc: "Guardan consultas para mostrar información procesada como una tabla virtual."
        }
      ]
    }

  ]

}