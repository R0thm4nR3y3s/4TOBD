const ACCESS_KEY = "edu_engine_access_token_v2";
const LOCAL_TOKEN_KEY = "edu_engine_local_token_v2";

function getAvailableTokens(){
  const baseTokens = window.TOKEN_SYSTEM?.tokens || [];
  const localRaw = localStorage.getItem(LOCAL_TOKEN_KEY);

  if(!localRaw) return baseTokens;

  try{
    const localToken = JSON.parse(localRaw);
    return [...baseTokens, localToken];
  }catch(e){
    return baseTokens;
  }
}

function isValidToken(value){
  const tokens = getAvailableTokens();

  const token = tokens.find(t => t.value === value && t.active === true);

  if(!token) return { ok:false, msg:"TOKEN INVÁLIDO" };

  const now = new Date();
  const expires = new Date(token.expires);

  if(now > expires) return { ok:false, msg:"TOKEN EXPIRADO" };

  return { ok:true, token };
}

function validateAccess(){
  const input = document.getElementById("tokenInput").value.trim();
  const result = isValidToken(input);

  if(!result.ok){
    document.getElementById("accessError").textContent = result.msg;
    return;
  }

  localStorage.setItem(ACCESS_KEY, input);
  document.getElementById("accessOverlay").classList.add("hidden");
}

function checkSavedAccess(){
  const saved = localStorage.getItem(ACCESS_KEY);
  if(!saved) return;

  const result = isValidToken(saved);
  if(result.ok){
    document.getElementById("accessOverlay").classList.add("hidden");
  }else{
    localStorage.removeItem(ACCESS_KEY);
  }
}

function openTeacherPanel(){
  document.getElementById("teacherPanel").classList.remove("hidden");
}

function closeTeacherPanel(){
  document.getElementById("teacherPanel").classList.add("hidden");
}

function unlockTeacher(){
  const pass = document.getElementById("teacherPass").value;
  if(pass !== window.TOKEN_SYSTEM.masterPassword){
    alert("Acceso denegado");
    return;
  }

  document.getElementById("teacherTools").classList.remove("hidden");
  refreshTeacherTokenView();
}

function generateLocalToken(){
  const minutes = Number(document.getElementById("durationSelect").value);
  const expires = new Date(Date.now() + minutes * 60 * 1000);
  const token = {
    value: "CLASE-" + Math.random().toString(36).substring(2,8).toUpperCase(),
    expires: expires.toISOString(),
    active: true
  };

  localStorage.setItem(LOCAL_TOKEN_KEY, JSON.stringify(token));
  refreshTeacherTokenView();
}

function invalidateLocalToken(){
  localStorage.removeItem(LOCAL_TOKEN_KEY);
  localStorage.removeItem(ACCESS_KEY);
  refreshTeacherTokenView();
}

function refreshTeacherTokenView(){
  const localRaw = localStorage.getItem(LOCAL_TOKEN_KEY);
  let token = null;

  if(localRaw){
    try{ token = JSON.parse(localRaw); }catch(e){}
  }

  if(!token){
    token = window.TOKEN_SYSTEM.tokens[0];
  }

  document.getElementById("tokenView").textContent = token.value;
  document.getElementById("tokenExpires").textContent = new Date(token.expires).toLocaleString();
}

function copyTeacherToken(){
  const token = document.getElementById("tokenView").textContent;
  navigator.clipboard.writeText(token);
  alert("Token copiado");
}

document.addEventListener("keydown", e => {

  const key =
    e.key.toLowerCase();

  // PANEL PROFESOR
  if(
    e.ctrlKey &&
    e.altKey &&
    key === "p"
  ){
    e.preventDefault();
    openTeacherPanel();
    return;
  }

  // ATAJOS BLOQUEADOS
  if(

    e.key === "F12" ||

    (e.ctrlKey && e.shiftKey && key === "i") ||

    (e.ctrlKey && e.shiftKey && key === "j") ||

    (e.ctrlKey && key === "u") ||

    (e.ctrlKey && key === "s") ||

    (e.ctrlKey && !e.altKey && key === "p")

  ){

    e.preventDefault();

    restrictedScreen();

  }

});

document.addEventListener("contextmenu", e => e.preventDefault());

function restrictedScreen(){
  document.body.innerHTML = `
    <div style="
      position:fixed;
      inset:0;
      background:black;
      display:flex;
      align-items:center;
      justify-content:center;
      color:#22d3ee;
      font-size:44px;
      font-family:Consolas,monospace;
      letter-spacing:4px;
    ">
      ACCESS RESTRICTED
    </div>
  `;
}
