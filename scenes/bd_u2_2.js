window.SCENE = {

  title: "BASE DE DATOS U2-2",
  subtitle: "SQL avanzado: manipulación de datos, consultas, subconsultas, agrupaciones, procedimientos almacenados y triggers en MySQL",

  nav: [
    { id: "inicio", label: "Inicio" },
    { id: "contexto", label: "Contexto" },
    { id: "base-completa", label: "Base de Datos" },
    { id: "datos-prueba", label: "Datos de Prueba" },
    { id: "dml", label: "Manipulación" },
    { id: "select", label: "Consultas" },
    { id: "agregacion", label: "Agregación" },
    { id: "subconsultas", label: "Subconsultas" },
    { id: "ordenacion", label: "Ordenación" },
    { id: "agrupacion", label: "Agrupación" },
    { id: "joins", label: "Multitabla" },
    { id: "union", label: "Unión" },
    { id: "interseccion", label: "Intersección" },
    { id: "diferencia", label: "Diferencia" },
    { id: "procedimientos", label: "Procedimientos" },
    { id: "triggers", label: "Triggers" },
    { id: "practicas", label: "Prácticas" },
    { id: "resumen", label: "Resumen" }
  ],

  sections: [

    {
      id: "inicio",
      type: "heroSplit",
      kicker: "PARCIAL 2-2 ",
      title: "MYSQL · SQL · BASES DE DATOS RELACIONALES",
      highlight: "Consultas SQL Avanzadas",
      description: "En esta clase construiremos una base de datos completa para una tienda tecnológica y la utilizaremos para practicar manipulación de datos, consultas avanzadas, funciones de agregación, subconsultas, agrupaciones, joins, unión, intersección, diferencia, procedimientos almacenados y triggers.",
      noteTitle: "Objetivo de aprendizaje",
      note: "Que el alumno sea capaz de resolver problemas reales de información utilizando SQL en MySQL.",
      tags: [
        "MySQL",
        "DML",
        "SELECT",
        "JOIN",
        "GROUP BY",
        "TRIGGERS"
      ],
      cards: [
        {
          title: "Nivel",
          desc: "Intermedio"
        },
        {
          title: "Motor",
          desc: "MySQL 8"
        },
        {
          title: "Proyecto",
          desc: "Sistema de ventas"
        }
      ]
    },

    {
      id: "contexto",
      type: "conceptGrid",
      title: "Contexto del Sistema",
      items: [
        {
          icon: "🏪",
          title: "Empresa",
          desc: "Tienda tecnológica con ventas y soporte técnico."
        },
        {
          icon: "👥",
          title: "Clientes",
          desc: "Personas que compran productos o servicios."
        },
        {
          icon: "📦",
          title: "Productos",
          desc: "Laptops, cámaras, impresoras y accesorios."
        },
        {
          icon: "🧾",
          title: "Ventas",
          desc: "Registro de compras realizadas."
        }
      ]
    },

    {
      id: "base-completa",
      type: "codeWindow",
      title: "Creación Completa de Base de Datos",
      language: "sql",
      code: `-- CREAR BASE DE DATOS
DROP DATABASE IF EXISTS tienda_tecnologica_u2;
CREATE DATABASE tienda_tecnologica_u2;
USE tienda_tecnologica_u2;

-- TABLA CATEGORIAS
CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre_categoria VARCHAR(80),
    descripcion VARCHAR(255)
);

-- TABLA CLIENTES
CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(100),
    telefono VARCHAR(20),
    correo VARCHAR(100),
    ciudad VARCHAR(80),
    fecha_registro DATE
);

-- TABLA PRODUCTOS
CREATE TABLE productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre_producto VARCHAR(120),
    precio DECIMAL(10,2),
    stock INT,
    id_categoria INT,

    FOREIGN KEY(id_categoria)
    REFERENCES categorias(id_categoria)
);

-- TABLA VENTAS
CREATE TABLE ventas (
    id_venta INT AUTO_INCREMENT PRIMARY KEY,
    fecha_venta DATE,
    id_cliente INT,
    total DECIMAL(10,2),

    FOREIGN KEY(id_cliente)
    REFERENCES clientes(id_cliente)
);

-- TABLA DETALLE VENTA
CREATE TABLE detalle_venta (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    id_venta INT,
    id_producto INT,
    cantidad INT,
    precio_unitario DECIMAL(10,2),
    subtotal DECIMAL(10,2),

    FOREIGN KEY(id_venta)
    REFERENCES ventas(id_venta),

    FOREIGN KEY(id_producto)
    REFERENCES productos(id_producto)
);`
    },

    {
      id: "datos-prueba",
      type: "codeWindow",
      title: "Inserción de Datos",
      language: "sql",
      code: `-- INSERTAR CATEGORÍAS
INSERT INTO categorias(nombre_categoria, descripcion)
VALUES
('Laptops', 'Computadoras portátiles'),
('Cámaras', 'Seguridad y vigilancia'),
('Impresoras', 'Impresoras y consumibles');

-- INSERTAR CLIENTES
INSERT INTO clientes(
nombre_cliente,
telefono,
correo,
ciudad,
fecha_registro
)
VALUES
(
'Juan Pérez',
'7441234567',
'juan@gmail.com',
'Azoyú',
'2026-01-10'
);

-- INSERTAR PRODUCTOS
INSERT INTO productos(
nombre_producto,
precio,
stock,
id_categoria
)
VALUES
(
'Laptop Lenovo Ryzen 5',
14500,
10,
1
);`
    },

    {
      id: "dml",
      type: "codeWindow",
      title: "Manipulación de Datos",
      language: "sql",
      code: `-- INSERT
INSERT INTO clientes(
nombre_cliente,
telefono,
correo,
ciudad,
fecha_registro
)
VALUES(
'Laura Díaz',
'7440001111',
'laura@gmail.com',
'Ometepec',
'2026-05-01'
);

-- UPDATE
UPDATE productos
SET precio = 15999
WHERE id_producto = 1;

-- DELETE
DELETE FROM clientes
WHERE id_cliente = 2;`
    },

    {
      id: "agregacion",
      type: "table",
      title: "Funciones de Agregación",
      headers: [
        "Función",
        "Descripción",
        "Ejemplo"
      ],
      rows: [
        ["COUNT()", "Cuenta registros", "COUNT(*)"],
        ["SUM()", "Suma valores", "SUM(total)"],
        ["AVG()", "Promedio", "AVG(precio)"],
        ["MAX()", "Máximo", "MAX(precio)"],
        ["MIN()", "Mínimo", "MIN(precio)"]
      ]
    },

    {
      id: "agregacion-code",
      type: "codeWindow",
      title: "Consultas de Agregación",
      language: "sql",
      code: `-- TOTAL DE PRODUCTOS
SELECT COUNT(*) AS total_productos
FROM productos;

-- PRECIO PROMEDIO
SELECT AVG(precio) AS promedio
FROM productos;

-- PRODUCTO MÁS CARO
SELECT MAX(precio) AS precio_maximo
FROM productos;

-- TOTAL DE STOCK
SELECT SUM(stock) AS stock_total
FROM productos;`
    },

    {
      id: "subconsultas",
      type: "codeWindow",
      title: "Subconsultas",
      language: "sql",
      code: `-- PRODUCTOS MÁS CAROS QUE EL PROMEDIO
SELECT nombre_producto, precio
FROM productos
WHERE precio > (
    SELECT AVG(precio)
    FROM productos
);

-- CLIENTES CON VENTAS
SELECT nombre_cliente
FROM clientes
WHERE id_cliente IN (
    SELECT id_cliente
    FROM ventas
);`
    },

    {
      id: "ordenacion",
      type: "codeWindow",
      title: "ORDER BY",
      language: "sql",
      code: `-- ORDEN ASCENDENTE
SELECT nombre_producto, precio
FROM productos
ORDER BY precio ASC;

-- ORDEN DESCENDENTE
SELECT nombre_producto, precio
FROM productos
ORDER BY precio DESC;`
    },

    {
      id: "agrupacion",
      type: "codeWindow",
      title: "GROUP BY",
      language: "sql",
      code: `-- TOTAL DE CLIENTES POR CIUDAD
SELECT ciudad, COUNT(*) AS total_clientes
FROM clientes
GROUP BY ciudad;

-- TOTAL VENDIDO POR CLIENTE
SELECT id_cliente, SUM(total) AS total_vendido
FROM ventas
GROUP BY id_cliente;`
    },

    {
      id: "joins",
      type: "codeWindow",
      title: "INNER JOIN",
      language: "sql",
      code: `-- CONSULTA RELACIONADA
SELECT
ventas.id_venta,
clientes.nombre_cliente,
ventas.total
FROM ventas
INNER JOIN clientes
ON ventas.id_cliente = clientes.id_cliente;

-- PRODUCTOS Y CATEGORÍAS
SELECT
productos.nombre_producto,
categorias.nombre_categoria
FROM productos
INNER JOIN categorias
ON productos.id_categoria = categorias.id_categoria;`
    },

    {
      id: "union",
      type: "codeWindow",
      title: "UNION",
      language: "sql",
      code: `-- UNION DE RESULTADOS
SELECT ciudad
FROM clientes
UNION
SELECT nombre_categoria
FROM categorias;`
    },

    {
      id: "interseccion",
      type: "codeWindow",
      title: "INTERSECCIÓN SIMULADA",
      language: "sql",
      code: `-- CLIENTES CON VENTAS
SELECT nombre_cliente
FROM clientes
WHERE id_cliente IN (
    SELECT id_cliente
    FROM ventas
);`
    },

    {
      id: "diferencia",
      type: "codeWindow",
      title: "DIFERENCIA",
      language: "sql",
      code: `-- CLIENTES SIN VENTAS
SELECT nombre_cliente
FROM clientes
WHERE id_cliente NOT IN (
    SELECT id_cliente
    FROM ventas
);`
    },

    {
      id: "procedimientos",
      type: "codeWindow",
      title: "Stored Procedures",
      language: "sql",
      code: `DELIMITER $$

CREATE PROCEDURE listar_productos()
BEGIN

    SELECT *
    FROM productos;

END $$

DELIMITER ;

-- EJECUTAR PROCEDIMIENTO
CALL listar_productos();`
    },

    {
      id: "triggers",
      type: "codeWindow",
      title: "Triggers",
      language: "sql",
      code: `DELIMITER $$

CREATE TRIGGER disminuir_stock
AFTER INSERT ON detalle_venta
FOR EACH ROW
BEGIN

    UPDATE productos
    SET stock = stock - NEW.cantidad
    WHERE id_producto = NEW.id_producto;

END $$

DELIMITER ;`
    },

    {
      id: "practicas",
      type: "practice",
      title: "Prácticas",
      items: [
        "Insertar 5 productos nuevos.",
        "Modificar precios con UPDATE.",
        "Eliminar registros específicos.",
        "Realizar consultas con JOIN.",
        "Crear consultas con GROUP BY.",
        "Crear subconsultas.",
        "Crear procedimientos almacenados.",
        "Crear triggers de auditoría."
      ]
    },

    {
      id: "resumen",
      type: "conceptGrid",
      title: "Resumen Final",
      items: [
        {
          icon: "🧠",
          title: "SQL",
          desc: "Permite manipular y consultar información."
        },
        {
          icon: "🔗",
          title: "JOIN",
          desc: "Permite relacionar tablas."
        },
        {
          icon: "⚙️",
          title: "PROCEDURES",
          desc: "Automatizan procesos reutilizables."
        },
        {
          icon: "⚡",
          title: "TRIGGERS",
          desc: "Automatizan acciones dentro de la base de datos."
        }
      ]
    }

  ]

}