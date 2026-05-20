window.SCENE = {
  title: "BASE DE DATOS U1-1",
  subtitle: "Conceptos, origen, clasificación, SGBD, modelos y elementos relacionales",

  nav: [
    { id: "hero-bd-u2-1", label: "Inicio" },
    { id: "concepto-origen-bd", label: "Concepto y origen" },
    { id: "clasificacion-bd-sgbd", label: "Clasificación" },
    { id: "caracteristicas-bd", label: "Características" },
    { id: "evolucion-sgbd", label: "Evolución" },
    { id: "objetivos-sgbd", label: "Objetivos SGBD" },
    { id: "arquitectura-sgbd", label: "Arquitectura" },
    { id: "modelos-bd", label: "Modelos BD" },
    { id: "usuarios-administracion", label: "Usuarios" },
    { id: "elementos-relacionales", label: "Elementos relacionales" },
    { id: "dato-informacion", label: "Dato e información" },
    { id: "tablas-campos-registros", label: "Tabla, campo, registro" },
    { id: "llaves-atributos", label: "Llaves y atributos" },
    { id: "ejemplo-sql", label: "Ejemplo SQL" },
    { id: "practica-final", label: "Práctica" },
    { id: "resumen-final", label: "Resumen" }
  ],

  sections: [
    {
      id: "hero-bd-u2-1",
      type: "heroSplit",
      kicker: "PARCIAL 1-1",
      title: "Fundamentos",
      highlight: "Bases de Datos y SGBD",
      description: "Escena educativa visual para comprender qué es una base de datos, cómo evolucionaron los sistemas gestores, qué modelos existen y cuáles son los elementos esenciales de una base de datos relacional.",
      noteTitle: "Meta de aprendizaje",
      note: "Al finalizar, el alumno podrá diferenciar dato e información, identificar componentes de una BD relacional, reconocer tipos de SGBD y explicar la función de tablas, campos, registros, llaves y atributos.",
      tags: ["BD", "SGBD", "Modelo Relacional", "SQL", "Datos"],
      cards: [
        {
          title: "Visión conceptual",
          desc: "Comprender el origen, propósito y clasificación de las bases de datos."
        },
        {
          title: "Visión técnica",
          desc: "Reconocer arquitectura, modelos, usuarios y componentes relacionales."
        },
        {
          title: "Visión práctica",
          desc: "Aplicar conceptos creando tablas, llaves y relaciones en SQL."
        }
      ]
    },

    {
      id: "concepto-origen-bd",
      type: "conceptGrid",
      title: "Concepto y origen de las Bases de Datos",
      items: [
        {
          icon: "🧠",
          title: "Base de Datos",
          desc: "Conjunto organizado de datos relacionados entre sí, almacenados de forma estructurada para facilitar su consulta, actualización, control y análisis."
        },
        {
          icon: "🏛️",
          title: "Origen",
          desc: "Surgen por la necesidad de almacenar grandes cantidades de información de forma confiable, evitando desorden, duplicidad y pérdida de datos."
        },
        {
          icon: "📁",
          title: "Antes de las BD",
          desc: "La información se guardaba en archivos físicos o digitales aislados, lo que dificultaba buscar, compartir y mantener datos actualizados."
        },
        {
          icon: "⚙️",
          title: "Necesidad empresarial",
          desc: "Escuelas, bancos, hospitales, tiendas y gobiernos requieren datos organizados para tomar decisiones rápidas y precisas."
        },
        {
          icon: "🔎",
          title: "Propósito principal",
          desc: "Convertir datos dispersos en información útil, segura, accesible y administrable."
        },
        {
          icon: "🚀",
          title: "Valor actual",
          desc: "Las bases de datos son la columna vertebral de aplicaciones web, móviles, sistemas administrativos, inteligencia artificial y comercio digital."
        }
      ]
    },

    {
      id: "clasificacion-bd-sgbd",
      type: "table",
      title: "Clasificación de Bases de Datos y SGBD",
      headers: ["Categoría", "Tipo", "Descripción", "Ejemplo"],
      rows: [
        ["Por estructura", "Relacional", "Organiza datos en tablas conectadas por llaves.", "MySQL, PostgreSQL, Oracle"],
        ["Por estructura", "NoSQL", "Maneja datos flexibles como documentos, grafos o clave-valor.", "MongoDB, Redis, Neo4j"],
        ["Por ubicación", "Centralizada", "La información se almacena en un solo servidor principal.", "Sistema escolar local"],
        ["Por ubicación", "Distribuida", "Los datos se reparten en varios servidores conectados.", "Servicios bancarios globales"],
        ["Por uso", "Operacional", "Apoya tareas diarias como ventas, inscripciones o inventarios.", "Sistema POS"],
        ["Por uso", "Analítica", "Se usa para reportes, estadísticas e inteligencia de negocios.", "Data Warehouse"],
        ["Por acceso", "Monousuario", "Diseñada para un solo usuario a la vez.", "BD local pequeña"],
        ["Por acceso", "Multiusuario", "Permite que varios usuarios trabajen simultáneamente.", "Sistema escolar en red"]
      ]
    },

    {
      id: "caracteristicas-bd",
      type: "conceptGrid",
      title: "Características principales de las Bases de Datos",
      items: [
        {
          icon: "🧩",
          title: "Organización",
          desc: "Los datos se estructuran bajo reglas, tablas, relaciones, campos y registros."
        },
        {
          icon: "🛡️",
          title: "Seguridad",
          desc: "Permiten controlar quién puede consultar, modificar o eliminar información."
        },
        {
          icon: "♻️",
          title: "Integridad",
          desc: "Buscan mantener datos correctos, válidos y coherentes mediante restricciones."
        },
        {
          icon: "⚡",
          title: "Disponibilidad",
          desc: "Facilitan el acceso rápido a los datos cuando los usuarios o sistemas los necesitan."
        },
        {
          icon: "📉",
          title: "Reducción de redundancia",
          desc: "Evitan repetir información innecesaria mediante diseño adecuado y normalización."
        },
        {
          icon: "🔄",
          title: "Actualización controlada",
          desc: "Los cambios se aplican de forma ordenada para mantener la consistencia."
        },
        {
          icon: "👥",
          title: "Acceso multiusuario",
          desc: "Varios usuarios pueden trabajar con la información al mismo tiempo."
        },
        {
          icon: "💾",
          title: "Persistencia",
          desc: "Los datos permanecen guardados aunque el sistema se apague."
        }
      ]
    },

    {
      id: "evolucion-sgbd",
      type: "flow",
      title: "Evolución de los Sistemas Gestores de Bases de Datos",
      nodes: [
        {
          title: "1. Archivos manuales",
          desc: "La información se almacenaba en carpetas, hojas físicas o documentos aislados."
        },
        {
          title: "2. Archivos planos",
          desc: "Los datos se guardaban en archivos de texto o formatos simples, sin relaciones avanzadas."
        },
        {
          title: "3. Modelo jerárquico",
          desc: "Los datos se organizaban como árbol, con estructura padre-hijo."
        },
        {
          title: "4. Modelo de red",
          desc: "Permitía relaciones más flexibles entre registros mediante conexiones múltiples."
        },
        {
          title: "5. Modelo relacional",
          desc: "Organiza los datos en tablas relacionadas mediante llaves. Es el modelo más usado en sistemas administrativos."
        },
        {
          title: "6. SGBD orientados a objetos",
          desc: "Integran datos y comportamiento en objetos, útiles en sistemas complejos."
        },
        {
          title: "7. NoSQL",
          desc: "Diseñados para grandes volúmenes de datos flexibles, escalabilidad y aplicaciones modernas."
        },
        {
          title: "8. Bases de datos en la nube",
          desc: "Permiten almacenar, escalar, respaldar y consultar información desde infraestructura remota."
        }
      ]
    },

    {
      id: "objetivos-sgbd",
      type: "conceptGrid",
      title: "Objetivos y funcionalidad de los SGBD",
      items: [
        {
          icon: "🗂️",
          title: "Administrar datos",
          desc: "Permiten crear, modificar, consultar y eliminar información de forma controlada."
        },
        {
          icon: "🔐",
          title: "Controlar accesos",
          desc: "Gestionan usuarios, permisos, roles y restricciones de seguridad."
        },
        {
          icon: "🧱",
          title: "Mantener integridad",
          desc: "Aplican reglas para evitar datos incorrectos, duplicados o inconsistentes."
        },
        {
          icon: "🔍",
          title: "Optimizar consultas",
          desc: "Procesan búsquedas y operaciones para recuperar información de forma eficiente."
        },
        {
          icon: "💽",
          title: "Respaldar información",
          desc: "Facilitan copias de seguridad, restauración y recuperación ante fallos."
        },
        {
          icon: "👥",
          title: "Gestionar concurrencia",
          desc: "Controlan que múltiples usuarios puedan trabajar sin dañar la información."
        },
        {
          icon: "📊",
          title: "Generar reportes",
          desc: "Ayudan a convertir datos almacenados en información útil para tomar decisiones."
        },
        {
          icon: "⚙️",
          title: "Automatizar procesos",
          desc: "Permiten vistas, procedimientos almacenados, disparadores y reglas internas."
        }
      ]
    },

    {
      id: "arquitectura-sgbd",
      type: "flow",
      title: "Arquitectura general de un SGBD",
      nodes: [
        {
          title: "Usuario o aplicación",
          desc: "Persona, sistema web, app móvil o software que solicita información."
        },
        {
          title: "Lenguaje de consulta",
          desc: "Medio para comunicarse con la base de datos, normalmente SQL en sistemas relacionales."
        },
        {
          title: "Motor del SGBD",
          desc: "Procesa instrucciones, valida reglas, ejecuta consultas y administra transacciones."
        },
        {
          title: "Optimizador de consultas",
          desc: "Busca la forma más eficiente de obtener o modificar los datos solicitados."
        },
        {
          title: "Gestor de almacenamiento",
          desc: "Administra cómo se guardan físicamente los datos en disco o memoria."
        },
        {
          title: "Diccionario de datos",
          desc: "Contiene metadatos: nombres de tablas, campos, tipos, llaves y restricciones."
        },
        {
          title: "Base de datos física",
          desc: "Lugar donde se almacenan realmente las tablas, índices, relaciones y registros."
        }
      ]
    },

    {
      id: "modelos-bd",
      type: "table",
      title: "Modelos de Bases de Datos",
      headers: ["Modelo", "Descripción", "Ventaja", "Ejemplo de uso"],
      rows: [
        ["Jerárquico", "Organiza datos en forma de árbol.", "Estructura simple para relaciones padre-hijo.", "Organigramas, sistemas antiguos"],
        ["De red", "Permite múltiples conexiones entre registros.", "Más flexible que el jerárquico.", "Sistemas empresariales antiguos"],
        ["Relacional", "Usa tablas, filas, columnas y llaves.", "Claro, potente y ampliamente usado.", "Escuela, inventario, ventas"],
        ["Orientado a objetos", "Guarda objetos con atributos y métodos.", "Útil para sistemas complejos.", "Software científico o multimedia"],
        ["Documental", "Guarda datos como documentos JSON o similares.", "Flexible y rápido para datos variables.", "Apps web modernas"],
        ["Clave-valor", "Almacena datos mediante una clave única y su valor.", "Muy rápido para consultas simples.", "Caché, sesiones"],
        ["Grafos", "Representa entidades como nodos y relaciones como aristas.", "Excelente para conexiones complejas.", "Redes sociales, rutas"],
        ["Multidimensional", "Organiza datos para análisis por dimensiones.", "Ideal para reportes y BI.", "Ventas por región y fecha"]
      ]
    },

    {
      id: "usuarios-administracion",
      type: "conceptGrid",
      title: "Administración y usuarios de Bases de Datos",
      items: [
        {
          icon: "👨‍💼",
          title: "DBA",
          desc: "Administrador de Base de Datos. Configura, protege, respalda, optimiza y mantiene la BD."
        },
        {
          icon: "👨‍💻",
          title: "Desarrollador",
          desc: "Crea aplicaciones, consultas, procedimientos y conexiones con la base de datos."
        },
        {
          icon: "🧑‍🏫",
          title: "Usuario final",
          desc: "Consulta o registra información mediante formularios, sistemas o aplicaciones."
        },
        {
          icon: "📊",
          title: "Analista de datos",
          desc: "Interpreta información, genera reportes y apoya la toma de decisiones."
        },
        {
          icon: "🛡️",
          title: "Administrador de seguridad",
          desc: "Define permisos, roles, políticas de acceso y protección de datos."
        },
        {
          icon: "🏢",
          title: "Directivo",
          desc: "Utiliza reportes e indicadores para planear, controlar y decidir."
        }
      ]
    },

    {
      id: "elementos-relacionales",
      type: "conceptGrid",
      title: "Elementos fundamentales de las Bases de Datos Relacionales",
      items: [
        {
          icon: "📋",
          title: "Tabla",
          desc: "Estructura principal donde se almacenan datos relacionados sobre una entidad."
        },
        {
          icon: "📌",
          title: "Campo",
          desc: "Columna de una tabla que representa una característica específica."
        },
        {
          icon: "🧾",
          title: "Registro",
          desc: "Fila de una tabla que representa un elemento completo almacenado."
        },
        {
          icon: "🔑",
          title: "Llave primaria",
          desc: "Campo que identifica de forma única cada registro dentro de una tabla."
        },
        {
          icon: "🔗",
          title: "Llave foránea",
          desc: "Campo que conecta una tabla con otra para formar relaciones."
        },
        {
          icon: "🏷️",
          title: "Atributo",
          desc: "Propiedad o característica de una entidad, representada como campo."
        },
        {
          icon: "🧬",
          title: "Entidad",
          desc: "Objeto, persona, concepto o evento del mundo real que se desea almacenar."
        },
        {
          icon: "🧠",
          title: "Relación",
          desc: "Vínculo lógico entre dos o más tablas mediante llaves."
        }
      ]
    },

    {
      id: "dato-informacion",
      type: "table",
      title: "Diferencia entre Dato e Información",
      headers: ["Concepto", "Definición", "Ejemplo simple", "Valor"],
      rows: [
        ["Dato", "Elemento aislado sin interpretación completa.", "85", "Bajo si no tiene contexto"],
        ["Información", "Dato procesado y contextualizado.", "El alumno obtuvo 85 en Base de Datos.", "Alto porque permite entender y decidir"],
        ["Dato", "Puede ser texto, número, fecha, imagen o código.", "2026-05-14", "Requiere interpretación"],
        ["Información", "Responde preguntas útiles.", "La inscripción fue realizada el 14 de mayo de 2026.", "Ayuda a tomar decisiones"],
        ["Dato", "Es materia prima.", "Juan Pérez", "Identifica parcialmente"],
        ["Información", "Es resultado de organizar datos.", "Juan Pérez está inscrito en el grupo 201.", "Tiene significado académico"]
      ]
    },

    {
      id: "tablas-campos-registros",
      type: "table",
      title: "Tabla, Campo, Registro y Archivo",
      headers: ["Elemento", "Equivalencia visual", "Descripción", "Ejemplo"],
      rows: [
        ["Tabla", "Hoja organizada", "Conjunto de datos de una entidad.", "Alumno"],
        ["Campo", "Columna", "Característica específica de la entidad.", "nombre, edad, correo"],
        ["Registro", "Fila", "Conjunto completo de datos de un elemento.", "Alumno 001: Ana López, 17 años"],
        ["Archivo", "Conjunto almacenado", "Puede contener información persistente de una tabla o sistema.", "Archivo físico de datos"],
        ["Entidad", "Objeto principal", "Elemento del mundo real que se desea representar.", "Curso, Profesor, Inscripción"],
        ["Base de datos", "Colección completa", "Conjunto de tablas relacionadas.", "Control escolar"]
      ]
    },

    {
      id: "llaves-atributos",
      type: "conceptGrid",
      title: "Llaves y atributos en Bases de Datos Relacionales",
      items: [
        {
          icon: "🔑",
          title: "Llave primaria",
          desc: "Identifica de manera única cada registro. No debe repetirse ni quedar vacía."
        },
        {
          icon: "🔗",
          title: "Llave foránea",
          desc: "Permite relacionar una tabla con otra usando la llave primaria de otra entidad."
        },
        {
          icon: "🧩",
          title: "Llave candidata",
          desc: "Campo o conjunto de campos que podrían identificar de forma única un registro."
        },
        {
          icon: "⭐",
          title: "Llave alterna",
          desc: "Llave candidata que no fue elegida como llave primaria, pero sigue siendo única."
        },
        {
          icon: "🏷️",
          title: "Atributo simple",
          desc: "No se divide en partes más pequeñas útiles. Ejemplo: edad."
        },
        {
          icon: "🧬",
          title: "Atributo compuesto",
          desc: "Puede dividirse en varios datos. Ejemplo: nombre completo en nombre y apellidos."
        },
        {
          icon: "📚",
          title: "Atributo multivaluado",
          desc: "Puede tener varios valores. Ejemplo: varios teléfonos de un alumno."
        },
        {
          icon: "🧮",
          title: "Atributo derivado",
          desc: "Se puede calcular a partir de otros datos. Ejemplo: edad desde fecha de nacimiento."
        }
      ]
    },

    {
      id: "ejemplo-sql",
      type: "codeWindow",
      title: "Ejemplo técnico: creación de una Base de Datos Relacional",
      language: "sql",
      code: `CREATE DATABASE control_escolar;
USE control_escolar;

CREATE TABLE alumnos (
  id_alumno INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(80) NOT NULL,
  apellido VARCHAR(80) NOT NULL,
  correo VARCHAR(120) UNIQUE,
  fecha_nacimiento DATE
);

CREATE TABLE cursos (
  id_curso INT AUTO_INCREMENT PRIMARY KEY,
  nombre_curso VARCHAR(100) NOT NULL,
  descripcion TEXT
);

CREATE TABLE inscripciones (
  id_inscripcion INT AUTO_INCREMENT PRIMARY KEY,
  id_alumno INT NOT NULL,
  id_curso INT NOT NULL,
  fecha_inscripcion DATE NOT NULL,

  FOREIGN KEY (id_alumno) REFERENCES alumnos(id_alumno),
  FOREIGN KEY (id_curso) REFERENCES cursos(id_curso)
);

INSERT INTO alumnos (nombre, apellido, correo, fecha_nacimiento)
VALUES
('Ana', 'López', 'ana@escuela.com', '2008-03-15'),
('Carlos', 'Ramírez', 'carlos@escuela.com', '2007-11-20');

INSERT INTO cursos (nombre_curso, descripcion)
VALUES
('Base de Datos U2-1', 'Fundamentos de bases de datos y SGBD'),
('Programación Web', 'HTML, CSS y JavaScript');

INSERT INTO inscripciones (id_alumno, id_curso, fecha_inscripcion)
VALUES
(1, 1, '2026-05-14'),
(2, 1, '2026-05-14');

SELECT 
  alumnos.nombre,
  alumnos.apellido,
  cursos.nombre_curso,
  inscripciones.fecha_inscripcion
FROM inscripciones
INNER JOIN alumnos 
  ON inscripciones.id_alumno = alumnos.id_alumno
INNER JOIN cursos 
  ON inscripciones.id_curso = cursos.id_curso;`
    },

    {
      id: "ejemplo-json",
      type: "codeWindow",
      title: "Ejemplo conceptual: dato estructurado en formato JSON",
      language: "json",
      code: `{
  "alumno": {
    "id": 1,
    "nombre": "Ana López",
    "grupo": "201",
    "curso": "Base de Datos U2-1",
    "calificacion": 85,
    "estatus": "Aprobado"
  }
}`
    },

    {
      id: "flujo-diseno-bd",
      type: "flow",
      title: "Flujo profesional para diseñar una Base de Datos",
      nodes: [
        {
          title: "1. Analizar el problema",
          desc: "Identificar qué información necesita almacenar el sistema."
        },
        {
          title: "2. Detectar entidades",
          desc: "Reconocer objetos principales como alumno, curso, profesor, producto o venta."
        },
        {
          title: "3. Definir atributos",
          desc: "Asignar características a cada entidad: nombre, fecha, precio, correo, estatus."
        },
        {
          title: "4. Elegir llaves primarias",
          desc: "Seleccionar identificadores únicos para cada tabla."
        },
        {
          title: "5. Definir relaciones",
          desc: "Conectar tablas mediante llaves foráneas."
        },
        {
          title: "6. Crear tablas",
          desc: "Pasar el diseño lógico a estructura física usando SQL."
        },
        {
          title: "7. Insertar datos",
          desc: "Agregar registros reales para probar la estructura."
        },
        {
          title: "8. Consultar información",
          desc: "Usar SELECT, JOIN y filtros para obtener información útil."
        }
      ]
    },

    {
      id: "practica-final",
      type: "practice",
      title: "Prácticas para alumnos",
      items: [
        "Explica con tus palabras la diferencia entre dato e información usando un ejemplo escolar.",
        "Identifica 5 entidades posibles para un sistema de control escolar.",
        "Para cada entidad, escribe al menos 4 atributos.",
        "Define cuál sería la llave primaria de cada entidad.",
        "Diseña una tabla llamada productos con campos adecuados para una tienda.",
        "Dibuja la relación entre clientes, pedidos y productos.",
        "Investiga 3 SGBD relacionales y 2 NoSQL. Escribe una diferencia clara entre ellos.",
        "Crea en MySQL una base de datos llamada tienda_escolar.",
        "Crea las tablas clientes, productos y ventas usando llaves primarias.",
        "Agrega una llave foránea en ventas para relacionarla con clientes.",
        "Inserta 3 registros por tabla.",
        "Realiza una consulta que muestre qué cliente realizó una venta.",
        "Explica por qué una base de datos evita duplicidad y mejora el control de información.",
        "Describe qué usuario sería responsable de respaldar y proteger una base de datos.",
        "Elabora un mini reporte indicando qué aprendiste sobre BD, SGBD, tablas, campos, registros y llaves."
      ]
    },

    {
      id: "resumen-final",
      type: "conceptGrid",
      title: "Resumen final de la unidad",
      items: [
        {
          icon: "🧠",
          title: "Base de datos",
          desc: "Es una colección organizada de datos relacionados que permite almacenar, consultar y administrar información."
        },
        {
          icon: "⚙️",
          title: "SGBD",
          desc: "Es el software que permite crear, controlar, proteger, consultar y mantener bases de datos."
        },
        {
          icon: "📊",
          title: "Modelo relacional",
          desc: "Organiza información en tablas formadas por campos y registros conectados mediante llaves."
        },
        {
          icon: "🔑",
          title: "Llaves",
          desc: "Permiten identificar registros y relacionar tablas de manera confiable."
        },
        {
          icon: "🏷️",
          title: "Atributos",
          desc: "Representan características de una entidad y se convierten en campos dentro de una tabla."
        },
        {
          icon: "🚀",
          title: "Importancia",
          desc: "Las bases de datos sostienen sistemas escolares, tiendas, bancos, redes sociales, apps móviles y plataformas modernas."
        }
      ]
    }
  ]
}

