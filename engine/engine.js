/*document.addEventListener("DOMContentLoaded", () => {
  renderScene(window.SCENE);
  initEffects();
  initFloatingWidgets();
  loadSavedTheme();
  checkSavedAccess();

  document.getElementById("btnValidate").addEventListener("click", validateAccess);
  document.getElementById("tokenInput").addEventListener("keydown", e => {
    if(e.key === "Enter") validateAccess();
  });

  document.getElementById("btnClosePanel").addEventListener("click", closeTeacherPanel);
  document.getElementById("btnUnlockTeacher").addEventListener("click", unlockTeacher);
  document.getElementById("btnGenerateToken").addEventListener("click", generateLocalToken);
  document.getElementById("btnInvalidateToken").addEventListener("click", invalidateLocalToken);
  document.getElementById("btnCopyToken").addEventListener("click", copyTeacherToken);

  document.getElementById("btnMatrix").addEventListener("click", () => toggleFx("matrix"));
  document.getElementById("btnAtoms").addEventListener("click", () => toggleFx("atoms"));
  document.getElementById("btnBubbles").addEventListener("click", () => toggleFx("bubbles"));
  document.getElementById("btnFormulas").addEventListener("click", () => toggleFx("formulas"));
  document.getElementById("btnTetris").addEventListener("click", () => toggleFx("tetris"));
  document.getElementById("btnPauseFx").addEventListener("click", togglePauseFx);
  document.getElementById("btnPresentation").addEventListener("click", togglePresentation);
  document.getElementById("fxOpacity").addEventListener("input", e => setFxOpacity(e.target.value));
});*/

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
    name: "BD U2.Roles",
    file: "scenes/bd_u2_roles.js"
  },
  {
    name: "BD U2.2",
    file: "scenes/bd_u2_2.js"
  },

  {
    name: "BD PERMISOS",
    file: "scenes/bd_u2_permisos.js"
  }

];

function initSceneMenu(){

  const nav =
    document.getElementById(
      "sceneMenu"
    );

  if(!nav) return;

  nav.innerHTML =
    SCENE_FILES.map(scene => `

      <button
        class="scene-btn"
        onclick="loadScene('${scene.file}')"
      >

        ${scene.name}

      </button>

    `).join("");

}

function loadScene(file){

  const oldScript =
    document.getElementById(
      "dynamicScene"
    );

  if(oldScript){
    oldScript.remove();
  }

  const script =
    document.createElement(
      "script"
    );

  script.src =
    file +
    "?v=" +
    Date.now();

  script.id =
    "dynamicScene";

  script.onload = () => {

    renderScene(window.SCENE);

  };

  document.body.appendChild(
    script
  );

}

document.addEventListener("DOMContentLoaded", () => {

  // MENÚ DE ESCENAS
  initSceneMenu();

  // ESCENA INICIAL
  loadScene("scenes/bd_u1_1.js");

  // EFECTOS
  initEffects();

  // WIDGETS
  initFloatingWidgets();

  // TEMAS
  loadSavedTheme();

  // SEGURIDAD
  checkSavedAccess();

  // LOGIN
  document.getElementById("btnValidate")
    .addEventListener("click", validateAccess);

  document.getElementById("tokenInput")
    .addEventListener("keydown", e => {

      if(e.key === "Enter"){
        validateAccess();
      }

    });

  // PANEL PROFESOR
  document.getElementById("btnClosePanel")
    .addEventListener("click", closeTeacherPanel);

  document.getElementById("btnUnlockTeacher")
    .addEventListener("click", unlockTeacher);

  document.getElementById("btnGenerateToken")
    .addEventListener("click", generateLocalToken);

  document.getElementById("btnInvalidateToken")
    .addEventListener("click", invalidateLocalToken);

  document.getElementById("btnCopyToken")
    .addEventListener("click", copyTeacherToken);

  // EFECTOS
  document.getElementById("btnMatrix")
    .addEventListener("click", () => toggleFx("matrix"));

  document.getElementById("btnAtoms")
    .addEventListener("click", () => toggleFx("atoms"));

  document.getElementById("btnBubbles")
    .addEventListener("click", () => toggleFx("bubbles"));

  document.getElementById("btnFormulas")
    .addEventListener("click", () => toggleFx("formulas"));

  document.getElementById("btnTetris")
    .addEventListener("click", () => toggleFx("tetris"));

  document.getElementById("btnPauseFx")
    .addEventListener("click", togglePauseFx);

  document.getElementById("btnPresentation")
    .addEventListener("click", togglePresentation);

  document.getElementById("fxOpacity")
    .addEventListener("input", e => {

      setFxOpacity(
        e.target.value
      );

    });

});

