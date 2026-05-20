function renderScene(scene){
  document.getElementById("sceneTitle").textContent = scene.title || "Clase Premium";
  document.getElementById("sceneSubtitle").textContent = scene.subtitle || "";

  renderNav(scene.nav || scene.sections.map(s => ({id:s.id,label:s.title})));

  const stage = document.getElementById("stage");
  stage.innerHTML = "";

  scene.sections.forEach(section => {
    let html = "";

    if(section.type === "heroSplit") html = componentHeroSplit(section);
    if(section.type === "conceptGrid") html = componentConceptGrid(section);
    if(section.type === "codeWindow") html = componentCodeWindow(section);
    if(section.type === "flow") html = componentFlow(section);
    if(section.type === "table") html = componentTable(section);
    if(section.type === "practice") html = componentPractice(section);

    stage.insertAdjacentHTML("beforeend", html);
  });
}

function renderNav(nav){
  const navPills = document.getElementById("navPills");
  navPills.innerHTML = nav.map(item => `
    <a href="#${item.id}">${item.label}</a>
  `).join("");
}

function copyCode(btn){
  const codeTag = btn.closest(".code-window").querySelector("code");
  const raw = decodeURIComponent(codeTag.dataset.raw || codeTag.innerText);
  navigator.clipboard.writeText(raw);
  btn.textContent = "COPIADO";
  setTimeout(() => btn.textContent = "COPIAR", 1200);
}

/*
function expandCode(btn){
  const block = btn.closest(".code-window");

  block.classList.toggle("expanded");

  if(block.classList.contains("expanded")){
    block.dataset.oldStyle = block.getAttribute("style") || "";

    block.style.position = "fixed";
    block.style.inset = "40px";
    block.style.zIndex = "999999";
    block.style.overflow = "auto";

    document.body.style.overflow = "hidden";

    btn.textContent = "CERRAR";

    window.addEventListener("keydown", closeExpandedWithEsc);

  }else{
    closeExpandedCode();
  }
}*/

function expandCode(btn){

  const block =
    btn.closest(".code-window");

  block.classList.toggle(
    "expanded"
  );

  const topbar =
    document.querySelector(
      ".topbar"
    );

  const nav =
    document.querySelector(
      ".nav-pills"
    );

  const sceneMenu =
    document.querySelector(
      ".scene-menu"
    );

  if(block.classList.contains("expanded")){

    block.dataset.oldStyle =
      block.getAttribute("style") || "";

    block.style.position =
      "fixed";

    block.style.inset =
      "20px";

    block.style.zIndex =
      "999999";

    block.style.overflow =
      "auto";

    block.style.borderRadius =
      "24px";

    document.body.style.overflow =
      "hidden";

    // OCULTAR UI
    if(topbar)
      topbar.style.display =
        "none";

    if(nav)
      nav.style.display =
        "none";

    if(sceneMenu)
      sceneMenu.style.display =
        "none";

    btn.textContent =
      "CERRAR";

    window.addEventListener(
      "keydown",
      closeExpandedWithEsc
    );

  }else{

    closeExpandedCode();

  }

} 

function closeExpandedWithEsc(e){
  if(e.key === "Escape"){
    closeExpandedCode();
  }
}

function closeExpandedCode(){
  const block = document.querySelector(".code-window.expanded");

  if(block){
    block.classList.remove("expanded");
    block.setAttribute("style", block.dataset.oldStyle || "");

    const btn = block.querySelector(".code-actions button:last-child");
    if(btn){
      btn.textContent = "EXPANDIR";
    }
  }

  document.body.style.overflow = "";

  window.removeEventListener("keydown", closeExpandedWithEsc);
}
