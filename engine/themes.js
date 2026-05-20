const THEMES = {

    cyber:{
  
      "--bg":"#020617",
      "--cyan":"#22d3ee",
      "--violet":"#a855f7",
      "--text":"#eaf2ff"
  
    },
  
    matrix:{
  
      "--bg":"#020b02",
      "--cyan":"#00ff88",
      "--violet":"#00cc66",
      "--text":"#d7ffe8"
  
    },
  
    quantum:{
  
      "--bg":"#050816",
      "--cyan":"#60a5fa",
      "--violet":"#c084fc",
      "--text":"#eef2ff"
  
    },
  
    fire:{
  
      "--bg":"#140505",
      "--cyan":"#ff7849",
      "--violet":"#ff3d00",
      "--text":"#fff1eb"
  
    },
  
    hologram:{
  
      "--bg":"#03111f",
      "--cyan":"#67e8f9",
      "--violet":"#7c3aed",
      "--text":"#f0f9ff"
  
    }
  
  };
  
  function applyTheme(name){
  
    const theme =
      THEMES[name];
  
    if(!theme) return;
  
    Object.entries(theme)
      .forEach(([key,val])=>{
  
        document.documentElement
          .style
          .setProperty(
            key,
            val
          );
  
      });
  
    localStorage.setItem(
      "engine_theme",
      name
    );
  
  }
  
  function loadSavedTheme(){
  
    const saved =
      localStorage.getItem(
        "engine_theme"
      );
  
    if(saved){
  
      applyTheme(saved);
  
    }
  
  }