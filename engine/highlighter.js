function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","‹");
    //.replaceAll(">","&gt;");
}

function createTokenStore(){
  const store = [];

  function save(cls, value){
    const key = "¤TK" + store.length + "¤";
    store.push({
      key,
      value: `<span class="${cls}">${value}</span>`
    });
    return key;
  }

  function restore(code){
    for(let i = store.length - 1; i >= 0; i--){
      code = code.replaceAll(store[i].key, store[i].value);
    }
    return code;
  }

  return { save, restore };
}

function highlightCode(rawCode, language="text"){
  const lang = String(language).toLowerCase();
  let code = escapeHtml(rawCode);
  const tk = createTokenStore();

  if(lang === "html" || lang === "xml"){
    return highlightHtml(code, tk);
  }

  if(lang === "json"){
    return highlightJson(code, tk);
  }

  // Proteger comentarios y cadenas primero
  code = code.replace(/\/\*[\s\S]*?\*\//g, m => tk.save("tok-comment", m));
  code = code.replace(/\/\/.*$/gm, m => tk.save("tok-comment", m));
  code = code.replace(/--.*$/gm, m => tk.save("tok-comment", m));
  code = code.replace(/`([^`\\]|\\.)*`/g, m => tk.save("tok-string", m));
  code = code.replace(/'([^'\\]|\\.)*'/g, m => tk.save("tok-string", m));
  code = code.replace(/"([^"\\]|\\.)*"/g, m => tk.save("tok-string", m));

  const rules = {
    sql: {
      keywords: [
        "CREATE","TABLE","PRIMARY","KEY","NOT","NULL","UNIQUE","DEFAULT",
        "FOREIGN","REFERENCES","VIEW","SELECT","FROM","DROP","INSERT","INTO",
        "VALUES","UPDATE","SET","DELETE","WHERE","JOIN","INNER","LEFT","RIGHT",
        "ON","AS","CHECK","CONSTRAINT","ALTER","ADD","AND","OR","GROUP","BY",
        "ORDER","HAVING","COUNT","SUM","AVG","MIN","MAX"
      ],
      types: [
        "INT","VARCHAR","DECIMAL","DATE","TEXT","FLOAT","DOUBLE","BOOLEAN",
        "CHAR","DATETIME","TIMESTAMP"
      ]
    },

    javascript: {
      keywords: [
        "const","let","var","function","return","if","else","for","while",
        "async","await","try","catch","class","new","import","export","from",
        "default","switch","case","break","continue","true","false","null",
        "undefined"
      ],
      types: [
        "Promise","Array","Object","String","Number","Boolean","JSON","Math",
        "Date","console","fetch"
      ]
    },

    js: {
      keywords: [
        "const","let","var","function","return","if","else","for","while",
        "async","await","try","catch","class","new","import","export","from",
        "default","switch","case","break","continue","true","false","null",
        "undefined"
      ],
      types: [
        "Promise","Array","Object","String","Number","Boolean","JSON","Math",
        "Date","console","fetch"
      ]
    },

    python: {
      keywords: [
        "def","return","if","elif","else","for","while","in","import","from",
        "as","class","try","except","finally","with","lambda","True","False",
        "None","and","or","not"
      ],
      types: [
        "str","int","float","list","dict","set","tuple","print","len","range","open"
      ]
    },

    bash: {
      keywords: [
        "sudo","cd","ls","mkdir","rm","cp","mv","echo","cat","grep","chmod",
        "chown","npm","node","python","git","docker"
      ],
      types:[]
    },

    php: {
      keywords: [
        "function","return","if","else","foreach","while","class","public",
        "private","protected","echo","new","use","namespace","true","false","null"
      ],
      types:["string","int","float","array","bool"]
    },

    css: {
      keywords: [
        "display","position","absolute","relative","fixed","flex","grid","color",
        "background","padding","margin","border","width","height","font",
        "transform","animation","transition"
      ],
      types:[]
    }
  };

  const rule = rules[lang] || { keywords:[], types:[] };

  if(rule.keywords.length){
    const kw = rule.keywords.join("|");
    code = code.replace(
      new RegExp(`\\b(${kw})\\b`, "g"),
      m => tk.save("tok-keyword", m)
    );
  }

  if(rule.types.length){
    const tp = rule.types.join("|");
    code = code.replace(
      new RegExp(`\\b(${tp})\\b`, "g"),
      m => tk.save("tok-type", m)
    );
  }

  code = code.replace(
    /\b(\d+(\.\d+)?)\b/g,
    m => tk.save("tok-number", m)
  );

  code = code.replace(
    /\b([a-zA-Z_$][\w$]*)(?=\s*\()/g,
    m => tk.save("tok-function", m)
  );

  code = code.replace(
    /(\.|#)([a-zA-Z_$][\w$-]*)/g,
    (full, prefix, name) => prefix + tk.save("tok-property", name)
  );

  code = code.replace(
    /([=+\-*\/%<>!&|]+)/g,
    m => tk.save("tok-operator", m)
  );

  return tk.restore(code);
}

function highlightHtml(code, tk){
  // Comentarios HTML
  code = code.replace(
    /(&lt;!--[\s\S]*?--&gt;)/g,
    m => tk.save("tok-comment", m)
  );

  // Strings de atributos
  code = code.replace(
    /"([^"]*)"/g,
    m => tk.save("tok-string", m)
  );

  // Nombres de etiquetas
  code = code.replace(
    /(&lt;\/?)([a-zA-Z0-9-]+)/g,
    (full, open, tag) => open + tk.save("tok-tag", tag)
  );

  // Atributos
  code = code.replace(
    /\b([a-zA-Z-:]+)(=)/g,
    (full, attr, eq) => tk.save("tok-attr", attr) + eq
  );

  return tk.restore(code);
}

function highlightJson(code, tk){
  code = code.replace(
    /"([^"\\]|\\.)*"\s*:/g,
    m => tk.save("tok-property", m.slice(0, -1)) + ":"
  );

  code = code.replace(
    /"([^"\\]|\\.)*"/g,
    m => tk.save("tok-string", m)
  );

  code = code.replace(
    /\b(true|false|null)\b/g,
    m => tk.save("tok-keyword", m)
  );

  code = code.replace(
    /\b(\d+(\.\d+)?)\b/g,
    m => tk.save("tok-number", m)
  );

  return tk.restore(code);
}
