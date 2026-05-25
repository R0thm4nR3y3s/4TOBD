window.SCENE = {

  title:"Roles, Usuarios y Permisos en MySQL",
  subtitle:"Arquitectura de Seguridad y Control de Accesos en Entornos Profesionales",

  nav:[
    {id:"hero_roles",label:"Inicio"},
    {id:"importance_roles",label:"Importancia"},
    {id:"concepts_roles",label:"Conceptos"},
    {id:"glossary_roles",label:"Glosario"},
    {id:"flow_roles",label:"Funcionamiento"},
    {id:"real_world_roles",label:"Escenarios"},
    {id:"soc_visual",label:"Visual"},
    {id:"gallery_roles",label:"Galería"},
    {id:"sql_users",label:"Usuarios"},
    {id:"sql_roles",label:"Roles"},
    {id:"comparison_roles",label:"Comparativas"},
    {id:"best_practices",label:"Buenas Prácticas"},
    {id:"common_errors",label:"Errores"},
    {id:"labs_roles",label:"Laboratorios"},
    {id:"final_challenge",label:"Reto Final"},
    {id:"summary_roles",label:"Resumen"}
  ],

  sections:[

    {
      id:"hero_roles",
      type:"heroSplit",

      kicker:"MYSQL SECURITY ARCHITECTURE",
      title:"Roles, Usuarios y",
      highlight:"Permisos Profesionales",
      description:"La administración de usuarios y privilegios en MySQL representa uno de los pilares más importantes dentro de la seguridad informática y la administración profesional de bases de datos. En entornos empresariales reales, no todos los usuarios deben tener acceso total al sistema. Un cajero no debe eliminar tablas, un auditor no debe modificar registros y un almacenista únicamente debería interactuar con inventarios. La correcta implementación de roles permite construir arquitecturas seguras, escalables y organizadas, evitando fugas de información, errores humanos y accesos no autorizados. En esta experiencia educativa premium exploraremos cómo diseñar esquemas reales de seguridad utilizando roles, privilegios y usuarios profesionales en MySQL.",

      noteTitle:"Arquitectura de Seguridad",
      note:"Las organizaciones modernas utilizan roles para simplificar la administración de permisos y aplicar el principio de mínimo privilegio. Esto reduce riesgos operativos, facilita auditorías y mejora el control de accesos.",

      image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",

      tags:[
        "MySQL",
        "Roles",
        "Usuarios",
        "Ciberseguridad",
        "SQL",
        "DBA",
        "Seguridad",
        "Permisos"
      ],

      cards:[
        {
          title:"Control Granular",
          desc:"Permite definir exactamente qué puede hacer cada usuario dentro de la base de datos profesional."
        },
        {
          title:"Seguridad Empresarial",
          desc:"Reduce riesgos de manipulación accidental o maliciosa dentro de sistemas críticos."
        },
        {
          title:"Escalabilidad",
          desc:"Los roles simplifican la administración cuando existen cientos o miles de usuarios."
        }
      ]
    },

    {
      id:"importance_roles",
      type:"conceptGrid",

      title:"¿Por Qué Son Importantes los Roles y Permisos?",

      items:[
        {
          icon:"🛡️",
          title:"Seguridad de la Información",
          desc:"Los permisos permiten proteger datos críticos dentro de una organización. En un banco, hospital o sistema escolar, la información almacenada puede contener datos personales, financieros o médicos extremadamente sensibles. Si cualquier usuario tuviera permisos completos sobre todas las tablas, el riesgo de fuga de información, eliminación accidental o sabotaje aumentaría considerablemente. Los roles ayudan a limitar el alcance de cada usuario y a mantener un entorno seguro. Por ejemplo, un cajero puede registrar ventas pero no modificar la estructura de la base de datos. Esto crea capas de protección internas muy utilizadas en arquitecturas modernas de seguridad informática.",
          image:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"Importancia Empresarial",
            content:"Grandes compañías utilizan modelos RBAC (Role Based Access Control) para gestionar accesos. Esto facilita auditorías, cumplimiento normativo y protección frente a amenazas internas. Sin roles correctamente diseñados, los sistemas se vuelven difíciles de controlar y extremadamente vulnerables."
          }
        },

        {
          icon:"⚙️",
          title:"Administración Eficiente",
          desc:"Imagina una empresa con 300 empleados. Asignar permisos manualmente a cada usuario sería lento, complejo y propenso a errores. Los roles permiten agrupar privilegios y aplicarlos rápidamente a múltiples usuarios. Por ejemplo, todos los almacenistas pueden heredar automáticamente permisos sobre inventarios sin necesidad de configurar usuario por usuario. Esto ahorra tiempo, reduce inconsistencias y facilita el crecimiento de la organización. En ambientes empresariales reales, la eficiencia administrativa es tan importante como la seguridad.",
          image:"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"Escalabilidad Organizacional",
            content:"Cuando una empresa crece, también aumenta la complejidad de los accesos. Los roles permiten mantener estructuras organizadas y fáciles de mantener. Incluso es posible integrar permisos con departamentos, áreas o sucursales completas."
          }
        },

        {
          icon:"📊",
          title:"Auditoría y Trazabilidad",
          desc:"Uno de los mayores beneficios de los roles es la capacidad de rastrear quién realizó determinadas acciones dentro de la base de datos. Cuando cada usuario utiliza credenciales individuales con permisos limitados, las actividades quedan registradas y pueden analizarse posteriormente. Esto es esencial en investigaciones internas, cumplimiento legal y control operativo. Los auditores suelen requerir entornos donde las modificaciones estén claramente delimitadas y documentadas.",
          image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"Cumplimiento Normativo",
            content:"Normativas internacionales como ISO 27001, GDPR o estándares financieros exigen controles estrictos de acceso y trazabilidad. Los roles ayudan a cumplir estos requerimientos de forma organizada y profesional."
          }
        }
      ]
    },

    {
      id:"concepts_roles",
      type:"conceptGrid",

      title:"Conceptos Fundamentales de Roles y Privilegios",

      items:[
        {
          icon:"👤",
          title:"Usuario en MySQL",
          desc:"Un usuario representa una identidad autorizada para conectarse al servidor MySQL. Cada usuario cuenta con credenciales de autenticación y puede tener diferentes privilegios dependiendo de las tareas que desempeñe dentro de la organización. Por ejemplo, un administrador posee permisos elevados mientras que un auditor generalmente tendrá acceso únicamente de lectura. Los usuarios pueden conectarse desde localhost o desde cualquier dirección IP dependiendo de la configuración definida. Gestionar correctamente usuarios es una práctica esencial para mantener la seguridad y evitar accesos no autorizados.",
          image:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"Usuarios Locales y Remotos",
            content:"El formato 'usuario'@'localhost' permite conexiones únicamente desde la misma máquina. Por otro lado, 'usuario'@'%' permite conexiones remotas desde cualquier IP, lo cual puede ser útil pero también representa un mayor riesgo de seguridad si no se implementan controles adicionales."
          }
        },

        {
          icon:"🎭",
          title:"Rol",
          desc:"Un rol es un contenedor lógico de privilegios. En lugar de asignar permisos directamente a cada usuario, se crean roles con privilegios específicos y posteriormente se asignan dichos roles a los usuarios correspondientes. Esta metodología simplifica enormemente la administración de accesos. Un rol puede representar un departamento, un cargo o una función específica dentro de una empresa. Por ejemplo, un rol llamado cajero podría incluir permisos para registrar ventas y consultar productos.",
          image:"https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"RBAC",
            content:"RBAC significa Role Based Access Control. Este modelo es ampliamente utilizado en sistemas empresariales, servicios cloud y plataformas corporativas porque facilita la organización y el control centralizado de privilegios."
          }
        },

        {
          icon:"🔐",
          title:"Privilegios",
          desc:"Los privilegios indican qué acciones puede ejecutar un usuario o rol dentro de la base de datos. Existen privilegios de lectura, inserción, actualización, eliminación y administración estructural. Cada privilegio representa una capacidad específica dentro del sistema. Un mal diseño de privilegios puede ocasionar pérdida de información, corrupción de datos o accesos indebidos. Por ello, es fundamental asignar únicamente los permisos estrictamente necesarios.",
          image:"https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"Principio de Mínimo Privilegio",
            content:"Esta práctica establece que cada usuario debe tener únicamente los permisos indispensables para realizar su trabajo. Esto minimiza riesgos y reduce el impacto de posibles ataques o errores humanos."
          }
        }
      ]
    },

    {
      id:"glossary_roles",
      type:"conceptGrid",

      title:"Glosario Visual Inteligente",

      items:[
        {
          icon:"🌐",
          title:"localhost",
          desc:"El término localhost hace referencia a la misma computadora donde se encuentra instalado el servidor MySQL. Cuando un usuario está configurado como 'usuario'@'localhost', significa que únicamente podrá conectarse desde esa máquina específica. Esta configuración incrementa considerablemente la seguridad porque evita conexiones remotas no autorizadas desde internet o redes externas.",
          image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"Uso Profesional",
            content:"En servidores críticos, muchos administradores limitan accesos administrativos únicamente a localhost para evitar exposición remota."
          }
        },

        {
          icon:"⚠️",
          title:"ALL PRIVILEGES",
          desc:"ALL PRIVILEGES representa permisos completos sobre una base de datos o conjunto de tablas. Esto incluye crear, eliminar, modificar y administrar prácticamente cualquier recurso. Aunque es útil para administradores, asignarlo indiscriminadamente representa un riesgo muy elevado dentro de ambientes empresariales.",
          image:"https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"Riesgos",
            content:"Otorgar ALL PRIVILEGES a usuarios innecesarios puede provocar eliminación accidental de información, alteración de estructuras críticas o abuso interno del sistema."
          }
        },

        {
          icon:"📡",
          title:"Privilegios Globales",
          desc:"Los privilegios globales afectan todas las bases de datos del servidor MySQL. Se asignan utilizando ON *.* y deben administrarse con extrema precaución. Generalmente solo los administradores principales requieren este tipo de acceso.",
          image:"https://images.unsplash.com/photo-1516321310764-8d4d1c73c5a3?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"Buenas Prácticas",
            content:"En ambientes profesionales se recomienda evitar privilegios globales para usuarios normales y utilizar permisos específicos por base de datos o tabla."
          }
        }
      ]
    },

    {
      id:"flow_roles",
      type:"flow",

      title:"Flujo Profesional de Implementación de Seguridad",

      nodes:[
        {
          title:"Diseño de Roles",
          desc:"El DBA analiza los departamentos y define qué funciones realizará cada usuario dentro del sistema.",
          icon:"🧠"
        },
        {
          title:"Creación de Usuarios",
          desc:"Se generan cuentas individuales con autenticación segura y políticas organizacionales.",
          icon:"👤"
        },
        {
          title:"Asignación de Privilegios",
          desc:"Los privilegios se agrupan en roles y posteriormente se aplican a los usuarios.",
          icon:"🔐"
        },
        {
          title:"Pruebas de Restricción",
          desc:"Se verifica que cada usuario únicamente pueda ejecutar acciones autorizadas.",
          icon:"🧪"
        },
        {
          title:"Monitoreo y Auditoría",
          desc:"El sistema se supervisa continuamente para detectar accesos indebidos o comportamientos anómalos.",
          icon:"📊"
        }
      ]
    },

    {
      id:"real_world_roles",
      type:"conceptGrid",

      title:"Escenarios Reales Empresariales",

      items:[
        {
          icon:"🏦",
          title:"Bancos",
          desc:"En una institución bancaria los accesos deben estar estrictamente controlados. Los cajeros únicamente pueden registrar operaciones financieras, mientras que los supervisores poseen capacidades adicionales de validación y auditoría. Ningún empleado debería tener acceso completo a todos los sistemas debido al riesgo operativo y financiero que implicaría.",
          image:"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"Seguridad Financiera",
            content:"Los bancos implementan auditorías constantes, separación de funciones y control granular de permisos para cumplir normativas internacionales y reducir fraudes internos."
          }
        },

        {
          icon:"🏥",
          title:"Hospitales",
          desc:"Los hospitales manejan expedientes clínicos extremadamente sensibles. Un médico puede actualizar diagnósticos, mientras que recepción únicamente registra pacientes y personal administrativo genera reportes. La segmentación de privilegios protege la privacidad y ayuda a cumplir regulaciones médicas.",
          image:"https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"Protección de Datos Médicos",
            content:"Los sistemas hospitalarios requieren políticas estrictas porque una fuga de información médica puede tener implicaciones legales y éticas muy graves."
          }
        },

        {
          icon:"🛒",
          title:"Tiendas y ERPs",
          desc:"Los sistemas de ventas utilizan roles para separar funciones entre cajas, inventarios, administración y auditoría. Esto evita manipulaciones indebidas y facilita el control operativo dentro de la organización.",
          image:"https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"Control Comercial",
            content:"Las empresas comerciales suelen implementar roles específicos para sucursales, supervisores y personal operativo con el fin de mantener orden y trazabilidad."
          }
        }
      ]
    },

    {
      id:"soc_visual",
      type:"visualCard",

      title:"Centro de Monitoreo de Seguridad de Base de Datos",
      image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
      desc:"Los administradores profesionales de bases de datos operan dentro de centros de monitoreo similares a SOCs donde supervisan accesos, conexiones activas, privilegios y actividad sospechosa. En organizaciones modernas, los accesos a bases de datos son monitoreados continuamente mediante dashboards, sistemas SIEM y herramientas de auditoría avanzada. Un cambio incorrecto de permisos puede representar un incidente crítico de seguridad. Por ello, los DBA y equipos de ciberseguridad trabajan conjuntamente para mantener integridad, disponibilidad y confidencialidad de la información.",
      tags:[
        "SOC",
        "DBA",
        "Seguridad",
        "MySQL",
        "Monitoreo"
      ]
    },

    {
      id:"gallery_roles",
      type:"imageGallery",

      title:"Entornos y Arquitecturas Relacionadas",

      images:[
        {
          title:"Centro de Datos Empresarial",
          image:"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
          desc:"Los servidores de bases de datos empresariales suelen encontrarse dentro de centros de datos con estrictas políticas de seguridad física y lógica."
        },
        {
          title:"Dashboard de Seguridad",
          image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
          desc:"Los dashboards permiten visualizar conexiones activas, privilegios y posibles intentos de acceso no autorizados."
        },
        {
          title:"Administración de Usuarios",
          image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
          desc:"Las plataformas empresariales modernas utilizan modelos centralizados de administración de identidades y accesos."
        }
      ]
    },

    {
      id:"sql_users",
      type:"codeWindow",

      title:"Creación Profesional de Usuarios en MySQL",
      language:"sql",
      code:`CREATE DATABASE tienda_db;
USE tienda_db;

CREATE USER 'admin1'@'localhost'
IDENTIFIED BY 'Admin123*';

CREATE USER 'cajero1'@'localhost'
IDENTIFIED BY 'Caja123*';

CREATE USER 'almacen1'@'localhost'
IDENTIFIED BY 'Stock123*';

CREATE USER 'auditor1'@'localhost'
IDENTIFIED BY 'Audit123*';

SHOW GRANTS FOR 'cajero1'@'localhost';`
    },

    {
      id:"sql_roles",
      type:"codeWindow",

      title:"Creación de Roles y Asignación de Privilegios",
      language:"sql",
      code:`CREATE ROLE 'administrador';
CREATE ROLE 'cajero';
CREATE ROLE 'almacenista';
CREATE ROLE 'auditor';

GRANT ALL PRIVILEGES
ON tienda_db.*
TO 'administrador';

GRANT SELECT, INSERT, UPDATE
ON tienda_db.ventas
TO 'cajero';

GRANT SELECT
ON tienda_db.productos
TO 'cajero';

GRANT SELECT
ON tienda_db.clientes
TO 'cajero';

GRANT SELECT, UPDATE
ON tienda_db.productos
TO 'almacenista';

GRANT SELECT
ON tienda_db.*
TO 'auditor';

GRANT 'administrador'
TO 'admin1'@'localhost';

SET DEFAULT ROLE ALL
TO 'admin1'@'localhost';`
    },

    {
      id:"comparison_roles",
      type:"table",

      title:"Comparativa de Roles Empresariales",

      headers:[
        "Rol",
        "Permisos",
        "Área",
        "Riesgo",
        "Uso Profesional"
      ],

      rows:[
        [
          "Administrador",
          "ALL PRIVILEGES",
          "Control total",
          "Muy Alto",
          "DBA y soporte crítico"
        ],
        [
          "Cajero",
          "SELECT, INSERT, UPDATE",
          "Ventas",
          "Medio",
          "Registro de operaciones"
        ],
        [
          "Almacenista",
          "SELECT, UPDATE",
          "Inventarios",
          "Bajo",
          "Control de stock"
        ],
        [
          "Auditor",
          "SELECT",
          "Supervisión",
          "Muy Bajo",
          "Análisis y auditoría"
        ]
      ]
    },

    {
      id:"best_practices",
      type:"conceptGrid",

      title:"Buenas Prácticas Profesionales",

      items:[
        {
          icon:"✅",
          title:"Aplicar el Principio de Mínimo Privilegio",
          desc:"Cada usuario debe poseer únicamente los permisos estrictamente necesarios para desempeñar sus funciones. Esto reduce el impacto de errores humanos, malware y accesos maliciosos. Otorgar permisos excesivos es uno de los errores más comunes dentro de entornos empresariales y puede comprometer completamente la seguridad de la información.",
          image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"Ejemplo Real",
            content:"Un cajero no necesita eliminar tablas ni modificar estructuras. Si accidentalmente posee permisos elevados podría provocar daños graves en la operación del negocio."
          }
        },

        {
          icon:"🔑",
          title:"Contraseñas Seguras",
          desc:"Las credenciales débiles representan uno de los vectores de ataque más explotados por ciberdelincuentes. Las organizaciones profesionales utilizan contraseñas robustas, autenticación multifactor y políticas periódicas de rotación.",
          image:"https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"Recomendaciones",
            content:"Utilizar combinaciones de mayúsculas, minúsculas, números y caracteres especiales incrementa significativamente la seguridad de las cuentas administrativas."
          }
        },

        {
          icon:"🚫",
          title:"Evitar el Uso de Root",
          desc:"El usuario root posee control absoluto sobre el servidor MySQL. Utilizarlo para aplicaciones diarias incrementa enormemente el riesgo de daños accidentales o compromisos de seguridad. Lo recomendable es crear usuarios específicos con privilegios delimitados.",
          image:"https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"Entornos Empresariales",
            content:"En compañías profesionales el usuario root se reserva únicamente para mantenimiento crítico y tareas administrativas excepcionales."
          }
        }
      ]
    },

    {
      id:"common_errors",
      type:"table",

      title:"Errores Comunes en Administración de Permisos",

      headers:[
        "Error",
        "Causa",
        "Impacto",
        "Solución"
      ],

      rows:[
        [
          "Access denied",
          "Credenciales o permisos incorrectos",
          "Usuario sin acceso",
          "Revisar GRANT y autenticación"
        ],
        [
          "Unknown role",
          "El rol no existe",
          "Asignación fallida",
          "Crear rol previamente"
        ],
        [
          "Table doesn't exist",
          "Nombre incorrecto de tabla",
          "Consultas fallidas",
          "Verificar estructura"
        ],
        [
          "Permisos excesivos",
          "Uso incorrecto de ALL PRIVILEGES",
          "Riesgo crítico",
          "Aplicar mínimo privilegio"
        ]
      ]
    },

    {
      id:"labs_roles",
      type:"practice",

      title:"Laboratorios y Prácticas Guiadas",

      items:[
        "Crear un usuario llamado vendedor y otorgarle únicamente permisos SELECT sobre productos e INSERT sobre ventas.",
        "Crear un rol llamado soporte con permisos SELECT y UPDATE sobre la tabla clientes.",
        "Quitar el privilegio INSERT al rol cajero y comprobar que ya no pueda registrar ventas.",
        "Crear un usuario remoto utilizando 'usuario'@'%' e investigar los riesgos de seguridad asociados.",
        "Crear un rol gerente con permisos SELECT, UPDATE y DELETE sobre todas las tablas de tienda_db.",
        "Documentar capturas de pantalla demostrando restricciones exitosas y errores por falta de privilegios.",
        "Realizar pruebas de acceso iniciando sesión con distintos usuarios y validar comportamientos esperados.",
        "Diseñar una arquitectura de permisos para un hospital con roles doctor, enfermero y recepcionista."
      ]
    },

    {
      id:"final_challenge",
      type:"flow",

      title:"Reto Final Profesional",

      nodes:[
        {
          title:"Diseñar hospital_db",
          desc:"Crear una nueva base de datos orientada a un entorno hospitalario empresarial.",
          icon:"🏥"
        },
        {
          title:"Crear Roles",
          desc:"Implementar roles doctor, enfermero y recepcionista con diferentes niveles de privilegios.",
          icon:"🎭"
        },
        {
          title:"Aplicar Restricciones",
          desc:"Verificar que cada usuario únicamente pueda ejecutar acciones autorizadas.",
          icon:"🔐"
        },
        {
          title:"Probar Seguridad",
          desc:"Intentar ejecutar operaciones no permitidas y documentar los errores generados.",
          icon:"🧪"
        },
        {
          title:"Presentar Evidencias",
          desc:"Documentar consultas, resultados y capturas como evidencia técnica profesional.",
          icon:"📋"
        }
      ]
    },

    {
      id:"summary_roles",
      type:"conceptGrid",

      title:"Resumen Final de Aprendizaje",

      items:[
        {
          icon:"🚀",
          title:"Competencias Desarrolladas",
          desc:"A lo largo de esta experiencia educativa aprendimos a crear usuarios, implementar roles, asignar privilegios y construir arquitecturas seguras en MySQL. También analizamos escenarios empresariales reales y comprendimos la importancia del principio de mínimo privilegio dentro de sistemas críticos modernos.",
          image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"Nivel Profesional",
            content:"Estas habilidades son utilizadas diariamente por administradores de bases de datos, ingenieros DevOps, especialistas en ciberseguridad y arquitectos de software en organizaciones de todo el mundo."
          }
        },

        {
          icon:"🛡️",
          title:"Visión de Seguridad",
          desc:"La administración correcta de privilegios es una pieza fundamental de la ciberseguridad moderna. Un sistema mal configurado puede provocar filtraciones de datos, sabotajes internos y pérdidas económicas importantes. Por ello, dominar roles y permisos es esencial para cualquier profesional de TI.",
          image:"https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",

          moreInfo:{
            title:"Importancia Real",
            content:"Actualmente, prácticamente todas las empresas que utilizan bases de datos implementan controles de acceso basados en roles para proteger sus operaciones."
          }
        }
      ]
    }

  ]

}