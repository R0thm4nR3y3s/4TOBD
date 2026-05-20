<!-- Presionar CTRL + SHIFT + V  ESTO RENDERIZARÁ <div class="access-help">Panel profesor: <strong>CTRL + ALT + P</strong></div> -->
# Engine Educativo Premium V3 Corregido

## Acceso alumno

```text
BD2026
```

## Panel profesor

```text
CTRL + ALT + P
```

## Password profesor

```text
1234
```

## Correcciones de esta versión

- Se corrigió el error visual donde aparecían etiquetas `<span>` dentro del código.
- El código ahora se muestra con colores reales según lenguaje.
- Se simplificó el password del profesor a `1234` para evitar errores al probar.
- El contenido sigue separado de los efectos.
- Los efectos siguen siendo independientes y movibles desde FX Manager.

# ENGINE EDUCATIVO CYBER NEON PREMIUM
# GUÍA COMPLETA PARA USUARIO Y DESARROLLADOR

---

# DESCRIPCIÓN GENERAL

El sistema es un Engine Educativo Visual Premium diseñado para:

- clases técnicas
- programación
- bases de datos
- ciberseguridad
- redes
- desarrollo web
- APIs
- sistemas
- infraestructura
- arquitectura de software

El engine funciona:

✅ Offline  
✅ Online  
✅ GitHub Pages  
✅ Navegadores modernos  
✅ Proyectores  
✅ Windows  

---

# OBJETIVO DEL ENGINE

Separar completamente:

- contenido educativo
- diseño visual
- efectos
- seguridad
- renderizado
- syntax highlighting

Esto permite:

✅ crear nuevas clases rápidamente  
✅ reutilizar el sistema  
✅ modificar solo contenido  
✅ mantener diseño premium global  
✅ escalar el proyecto fácilmente  

---

# ESTRUCTURA DEL PROYECTO

```text
proyecto/
│
├── index.html
│
├── engine/
│   ├── engine.js
│   ├── renderer.js
│   ├── effects-layer.js
│   ├── highlighter.js
│   ├── security.js
│   ├── themes.js
│   └── theme.css
│
├── scenes/
│   ├── bd_u2_1.js
│   ├── subneteo_u1.js
│   ├── javascript_funciones.js
│   └── etc...
│
├── tokens/
│   └── tokens.js
│
└── assets/
```

---

# FUNCIÓN DE CADA ARCHIVO

---

# index.html

## FUNCIÓN

Archivo principal del sistema.

Carga:
- engine
- escenas
- efectos
- seguridad
- widgets
- CSS

## CONTIENE

- estructura base
- overlays
- paneles
- canvases
- widgets flotantes

## MODIFICAR SOLO SI

- agregas widgets nuevos
- agregas paneles nuevos
- agregas scripts globales

## NORMALMENTE NO SE TOCA

---

# engine/engine.js

## FUNCIÓN

Inicializador principal.

Controla:
- render inicial
- eventos
- botones
- widgets
- listeners
- shortcuts

## CONTIENE

- DOMContentLoaded
- listeners globales
- inicialización FX
- navegación

## MODIFICAR SI

- agregas nuevos botones
- agregas shortcuts
- agregas widgets

---

# engine/renderer.js

## FUNCIÓN

Motor visual del contenido.

Convierte:

```javascript
window.SCENE = {}
```

en interfaz visual.

## CONTIENE

- renderHero
- renderCodeWindow
- renderTable
- renderFlow
- renderPractice
- expandCode()

## MODIFICAR SI

- agregas componentes visuales nuevos
- mejoras render
- mejoras modales
- mejoras UX

---

# engine/effects-layer.js

## FUNCIÓN

Motor de efectos visuales.

## CONTIENE

### Matrix
- símbolos
- lluvia
- partículas

### Átomos
- nodos
- conexiones
- partículas IA

### Burbujas
- holográficas
- flotantes

### Fórmulas
- ecuaciones flotantes

### Tetris
- bloques ambientales

## MODIFICAR SI

- quieres nuevos efectos
- cambiar velocidad
- cambiar glow
- mejorar animaciones

---

# engine/highlighter.js

## FUNCIÓN

Syntax highlighting profesional.

## SOPORTA

- SQL
- JavaScript
- HTML
- CSS
- Python
- Bash
- PHP
- JSON

## CONTIENE

- colores
- tokens
- resaltado
- parsing

## MODIFICAR SI

- agregas lenguajes
- cambias colores
- mejoras IDE visual

---

# engine/security.js

## FUNCIÓN

Sistema de seguridad.

## CONTIENE

- validación tokens
- panel profesor
- bloqueo shortcuts
- ACCESS RESTRICTED
- localStorage

## FUNCIONES

### validateAccess()
Valida token alumno.

### openTeacherPanel()
Abre panel profesor.

### generateLocalToken()
Genera tokens temporales.

### invalidateLocalToken()
Invalida token.

## SHORTCUTS

### PANEL PROFESOR

```text
CTRL + ALT + P
```

## PASSWORD

Definido en:

```javascript
window.TOKEN_SYSTEM.masterPassword
```

---

# engine/themes.js

## FUNCIÓN

Sistema de themes dinámicos.

## CONTIENE

- cyber
- matrix
- quantum
- hologram
- fire

## FUNCIÓN PRINCIPAL

```javascript
applyTheme("matrix")
```

## MODIFICAR SI

- agregas nuevos themes
- cambias colores globales

---

# engine/theme.css

## FUNCIÓN

CSS global premium.

## CONTIENE

- layout
- cards
- glow
- animaciones
- modales
- widgets
- flow
- tablas
- responsive

## MODIFICAR SI

- quieres cambiar diseño global
- mejorar animaciones
- mejorar widgets

---

# scenes/

# LA PARTE MÁS IMPORTANTE

## AQUÍ VIVE TODO EL CONTENIDO

Cada archivo representa:
- una clase
- una unidad
- un tema

---

# EJEMPLO

```text
scenes/bd_u2_1.js
```

---

# ESTRUCTURA

```javascript
window.SCENE = {

  title:"",
  subtitle:"",

  nav:[],

  sections:[]

}
```

---

# COMPONENTES DISPONIBLES

---

# heroSplit

## FUNCIÓN

Portada principal premium.

## USO

```javascript
type:"heroSplit"
```

---

# conceptGrid

## FUNCIÓN

Tarjetas de conceptos.

## USO

```javascript
type:"conceptGrid"
```

---

# codeWindow

## FUNCIÓN

Código con syntax highlighting.

## USO

```javascript
type:"codeWindow"
```

## SOPORTA

- sql
- js
- html
- css
- python
- php
- bash

---

# flow

## FUNCIÓN

Diagramas visuales.

## USO

```javascript
type:"flow"
```

---

# table

## FUNCIÓN

Tablas premium.

## USO

```javascript
type:"table"
```

---

# practice

## FUNCIÓN

Retos y prácticas.

## USO

```javascript
type:"practice"
```

---

# TOKENS

---

# tokens/tokens.js

## FUNCIÓN

Define:
- tokens válidos
- password profesor

## EJEMPLO

```javascript
window.TOKEN_SYSTEM = {

  masterPassword:"1234",

  tokens:[
    {
      value:"BD2026",
      expires:"2099-12-31T23:59:59",
      active:true
    }
  ]
};
```

---

# CÓMO CREAR NUEVAS CLASES

---

# PASO 1

Crear archivo:

```text
scenes/nueva_clase.js
```

---

# PASO 2

Definir:

```javascript
window.SCENE = {}
```

---

# PASO 3

Agregar:
- hero
- conceptos
- código
- tablas
- prácticas

---

# PASO 4

Importar archivo en:

```html
index.html
```

---

# RESPALDOS

---

# RESPALDAR SOLO CONTENIDO

```text
scenes/
```

---

# RESPALDAR TODO EL ENGINE

```text
engine/
```

---

# LO MÁS IMPORTANTE

El contenido SIEMPRE está separado del sistema.

---

# THEMES DISPONIBLES

```javascript
applyTheme("cyber")
applyTheme("matrix")
applyTheme("quantum")
applyTheme("fire")
applyTheme("hologram")
```

---

# FUNCIONES IMPORTANTES

---

# CAMBIAR OPACIDAD FX

```javascript
setFxOpacity(60)
```

---

# ACTIVAR/DESACTIVAR EFECTOS

```javascript
toggleFx("matrix")
toggleFx("atoms")
toggleFx("bubbles")
toggleFx("formulas")
toggleFx("tetris")
```

---

# PAUSAR EFECTOS

```javascript
togglePauseFx()
```

---

# PRESENTACIÓN

```javascript
togglePresentation()
```

---

Aquí tienes el bloque completo en Markdown listo para copiar y pegar dentro de tu documentación `.md`.

````md
# SISTEMA DINÁMICO DE ESCENAS

---

# NUEVA ARQUITECTURA MODULAR

Ahora el engine soporta múltiples escenas dinámicas cargadas desde menú sin recargar la página.

Esto permite:

✅ múltiples materias  
✅ múltiples unidades  
✅ múltiples clases  
✅ cambiar contenido dinámicamente  
✅ SPA offline premium  
✅ sistema modular tipo LMS  

---

# MENÚ DE ESCENAS

El menú superior de materias/clases se controla desde:

```javascript
engine/engine.js
````

---

# CONFIGURACIÓN

## Buscar:

```javascript
const SCENE_FILES = [
```

---

# EJEMPLO

```javascript
const SCENE_FILES = [

  {
    name: "BD U1.1",
    file: "scenes/bd_u1_1.js"
  },

  {
    name: "BD U1.2",
    file: "scenes/bd_u1_2.js"
  },

  {
    name: "BD U2.1",
    file: "scenes/bd_u2_1.js"
  },

  {
    name: "BD U2.2",
    file: "scenes/bd_u2_2.js"
  },

  {
    name: "BD PERMISOS",
    file: "scenes/bd_permisos.js"
  }

];
```

---

# AGREGAR NUEVA CLASE

## PASO 1

Crear nuevo archivo:

```text
scenes/react_hooks.js
```

---

# PASO 2

Definir:

```javascript
window.SCENE = {

  title:"React Hooks",

  subtitle:"Hooks modernos en React",

  nav:[],

  sections:[]

};
```

---

# PASO 3

Agregar botón al menú:

```javascript
{
  name: "React",
  file: "scenes/react_hooks.js"
}
```

---

# RESULTADO

El engine automáticamente:

✅ crea botón
✅ agrega navegación
✅ carga escena
✅ renderiza contenido
✅ cambia clase sin recargar página

---

# IMPORTANTE

## TODOS LOS ARCHIVOS DE ESCENAS DEBEN TENER:

```javascript
window.SCENE = {}
```

Porque el renderizador utiliza:

```javascript
renderScene(window.SCENE)
```

---

# IMPORTANTE

## NO IMPORTA EL NOMBRE DEL ARCHIVO

Estos nombres son válidos:

```text
react.js
firebase.js
clase1.js
tema_redes.js
mysql_avanzado.js
```

SIEMPRE Y CUANDO:

```javascript
window.SCENE = {}
```

exista dentro.

---

# IMPORTANTE

## NO IMPORTAR ESCENAS MANUALMENTE EN index.html

ANTES:

```html
<script src="scenes/bd_u1_1.js"></script>
```

---

# AHORA

Las escenas se cargan dinámicamente desde:

```javascript
loadScene()
```

---

# FUNCIÓN loadScene()

## FUNCIÓN

Carga dinámicamente una escena.

## EJEMPLO

```javascript
loadScene("scenes/react.js")
```

## EL ENGINE:

✅ elimina escena anterior
✅ carga nuevo JS
✅ renderiza automáticamente
✅ mantiene efectos
✅ mantiene themes
✅ mantiene seguridad
✅ mantiene widgets

---

# MENÚ INTERNO DE NAVEGACIÓN

Cada escena tiene su propio menú interno.

## DEFINIDO EN:

```javascript
nav:[]
```

---

# EJEMPLO

```javascript
nav:[

  {
    id:"intro",
    label:"Inicio"
  },

  {
    id:"sql",
    label:"Consultas SQL"
  }

]
```

---

# IMPORTANTE

Cada:

```javascript
id
```

del nav debe existir en:

```javascript
sections:[]
```

---

# EJEMPLO

```javascript
{
  id:"sql",

  type:"codeWindow",

  title:"Consultas SQL",

  language:"sql",

  code:`SELECT * FROM alumnos`
}
```

---

# EXPANDIR CÓDIGO

## FUNCIÓN

```javascript
expandCode()
```

---

# CARACTERÍSTICAS

✅ fullscreen real
✅ oculta topbar
✅ oculta nav
✅ oculta scene-menu
✅ ESC para cerrar
✅ UX tipo VSCode/OpenAI

---

# CERRAR MODAL

## TECLA

```text
ESC
```

---

# NUEVA ESTRUCTURA RECOMENDADA

```text
proyecto/
│
├── engine/
│
├── scenes/
│   ├── bd/
│   ├── react/
│   ├── firebase/
│   ├── redes/
│   ├── linux/
│   └── etc...
│
├── tokens/
│
└── assets/
```

---

# RECOMENDACIÓN PROFESIONAL

## CASI NUNCA MODIFICAR

```text
engine/
```

---

# CASI SIEMPRE MODIFICAR

```text
scenes/
```

---

# EL ENGINE YA FUNCIONA COMO

✅ LMS
✅ dashboard educativo
✅ sistema modular
✅ motor de clases
✅ SPA offline
✅ framework educativo premium

```
```



# SEGURIDAD

## BLOQUEA

- F12
- CTRL+SHIFT+I
- CTRL+SHIFT+J
- CTRL+U
- CTRL+P

---

# PERMITE

- CTRL+C
- CTRL+V
- CTRL+A
- CTRL+ALT+P

---

# MODAL EXPANDIDO

## CERRAR CON

```text
ESC
```

---

# COMPATIBILIDAD

## FUNCIONA EN

✅ Chrome  
✅ Edge  
✅ Opera  
✅ Brave  
✅ GitHub Pages  
✅ Offline  

---

# ARQUITECTURA DEL ENGINE

## DESACOPLADA

### CONTENIDO

```text
scenes/
```

### MOTOR

```text
engine/
```

### SEGURIDAD

```text
security.js
```

### THEMES

```text
themes.js
```

### EFECTOS

```text
effects-layer.js
```

---

# OBJETIVO FINAL

Construir:
- clases premium
- dashboards educativos
- LMS visual
- sistema tipo IA
- framework reutilizable

SIN volver a diseñar cada clase.

---

# RECOMENDACIÓN PROFESIONAL

## CASI NUNCA MODIFICAR

```text
engine/
```

---

# CASI SIEMPRE MODIFICAR

```text
scenes/
```

---


# FIN DE DOCUMENTACIÓN