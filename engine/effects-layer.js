const FX = {
  paused:false,
  matrix:true,
  atoms:true,
  bubbles:true,
  formulas:true,
  tetris:false
};

function resizeCanvas(canvas){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function startMatrix(){
  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d");

  resizeCanvas(canvas);
  window.addEventListener("resize", () => resizeCanvas(canvas));

  //const chars = "未来光東京界数字心電学空術人ネオンSQL量子データ制約ビュー漢字日本語構造関数表0123456789";
  //const chars =  "01<>[]{}⊕⊗∆∑∫≈∞λΩΦΨΣAI.SQL.DATA.NODE.API.CORE.NET.DB";

  const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ<>[]{}#@$%&*+-=AI.SQL.DATA.NODE.API.CORE.NET.DB";
  const fontSize = 22;
  let drops = [];

  function resetDrops(){
    const columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(0);
  }

  resetDrops();
  window.addEventListener("resize", resetDrops);

  function draw(){
    if(!FX.paused && FX.matrix){
      ctx.fillStyle =
  "rgba(2,6,23,0.32)";

ctx.fillRect(
  0,
  0,
  canvas.width,
  canvas.height
);

ctx.fillStyle =
"rgba(34,211,238,0.58)";
      ctx.font =
  `${fontSize}px Consolas`;

      for(let i=0;i<drops.length;i++){
        const text = chars[Math.floor(Math.random() * chars.length)];
              
        const y =
        (drops[i] * fontSize) +
        Math.sin(i * 0.5) * 6;
        const x =
        (i * fontSize) +
        Math.sin(y * 0.01 + i) * 8;

        ctx.fillText(text, x, y);

        if(Math.random() > 0.955){
          drops[i]++;
        }

        if(y > canvas.height && Math.random() > 0.992){
          drops[i] = 0;
        }
      }
    }
    requestAnimationFrame(draw);
  }

  draw();
}

function startAtoms(){
  const canvas = document.getElementById("atomsCanvas");
  const ctx = canvas.getContext("2d");

  resizeCanvas(canvas);
  window.addEventListener("resize", () => resizeCanvas(canvas));

  const particles = Array.from({length:54}, () => ({
    x:Math.random() * canvas.width,
    y:Math.random() * canvas.height,
    r:Math.random() * 5 + 2.4,
    vx:(Math.random() - .5) * .35,
    vy:(Math.random() - .5) * .35
  }));

  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    if(!FX.paused && FX.atoms){
      particles.forEach((p,i) => {
        p.x += p.vx;
        p.y += p.vy;

        if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle =
  "rgba(34,211,238,.88)";
        ctx.fill();

        for(let j=i+1;j<particles.length;j++){
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx*dx + dy*dy);

          if(dist < 240){
            ctx.beginPath();
            ctx.moveTo(p.x,p.y);
            ctx.lineTo(p2.x,p2.y);
            ctx.strokeStyle = `rgba(34,211,238,${0.42 - dist/900})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
    }

    requestAnimationFrame(draw);
  }

  draw();
}

function createBubbles(){
  const layer = document.getElementById("bubblesLayer");
  layer.innerHTML = "";

  for(let i=0;i<26;i++){
    const b = document.createElement("div");
    const size = Math.random() * 46 + 12;
    b.className = "bubble";
    b.style.width = size + "px";
    b.style.height = size + "px";
    b.style.left = Math.random() * 100 + "%";
    b.style.animationDuration = (Math.random() * 18 + 14) + "s";
    b.style.animationDelay = (-Math.random() * 18) + "s";
    layer.appendChild(b);
  }
}

function createFormulas(){
  const layer = document.getElementById("formulasLayer");
  layer.innerHTML = "";

  const formulas = ["E=mc²","∑xᵢ","∫f(x)dx","λ=h/p","PV=nRT","a²+b²=c²","Δt","F=ma","O(n)","SELECT *"];
  formulas.forEach((text) => {
    const f = document.createElement("div");
    f.className = "formula";
    f.textContent = text;
    f.style.left = Math.random() * 88 + "%";
    f.style.top = Math.random() * 86 + "%";
    f.style.animationDelay = (-Math.random() * 6) + "s";
    layer.appendChild(f);
  });
}

function createTetris(){
  const layer = document.getElementById("tetrisLayer");
  layer.innerHTML = "";

  for(let i=0;i<62;i++){
    const b = document.createElement("div");
    b.className = "tetris-block";
    b.style.left = Math.random() * 100 + "%";
    b.style.animationDuration = (Math.random() * 16 + 18) + "s";
    b.style.animationDelay = (-Math.random() * 10) + "s";
    layer.appendChild(b);
  }
}

function toggleFx(name){
  FX[name] = !FX[name];

  if(name === "bubbles"){
    document.getElementById("bubblesLayer").style.display = FX.bubbles ? "block" : "none";
  }

  if(name === "formulas"){
    document.getElementById("formulasLayer").style.display = FX.formulas ? "block" : "none";
  }

  if(name === "tetris"){
    const layer = document.getElementById("tetrisLayer");
    layer.style.display = FX.tetris ? "block" : "none";
    if(FX.tetris && layer.children.length === 0) createTetris();
  }

  if(name === "matrix"){
    document.getElementById("matrixCanvas").style.display = FX.matrix ? "block" : "none";
  }

  if(name === "atoms"){
    document.getElementById("atomsCanvas").style.display = FX.atoms ? "block" : "none";
  }
}

function togglePauseFx(){
  FX.paused = !FX.paused;
}

function togglePresentation(){
  document.body.classList.toggle("presentation");
}

function setFxOpacity(value){
  document.getElementById("fxLayer").style.opacity = Number(value) / 100;
}

function initEffects(){
  startMatrix();
  startAtoms();
  createBubbles();
  createFormulas();

  document.getElementById("tetrisLayer").style.display = "none";
}
