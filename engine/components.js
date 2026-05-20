function componentHeroSplit(section){
  return `
  <section id="${section.id}" class="scene-block hero-split">
    <article class="panel">
      <div class="kicker">${section.kicker || "TEMA"}</div>
      <h2 class="hero-title">
  ${section.title || ""}
  ${
    section.highlight
      ? `<span class="highlight"> ${section.highlight}</span>`
      : ""
  }
</h2>
      <p class="lead">${section.description}</p>
      <div class="mini-card-grid">
        ${(section.cards || []).map(card => `
          <div class="mini-card">
            <strong>${card.title}</strong>
            <span>${card.desc}</span>
          </div>
        `).join("")}
      </div>
    </article>

    <aside class="panel">
      <div class="kicker">${section.noteTitle || "IDEA RÁPIDA"}</div>
      <p class="lead"><strong>${section.note || ""}</strong></p>
      <div class="tags">
        ${(section.tags || []).map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </aside>
  </section>`;
}

function componentConceptGrid(section){
  return `
  <section id="${section.id}" class="scene-block panel">
    <h2 class="section-title">${section.title}</h2>
    <div class="concept-grid">
      ${(section.items || []).map(item => `
        <article class="concept-card">
          <div class="concept-icon">${item.icon}</div>
          <h3>${item.title}</h3>
          <p class="muted">${item.desc}</p>
        </article>
      `).join("")}
    </div>
  </section>`;
}

function componentCodeWindow(section){
  const highlighted = highlightCode(section.code || "", section.language || "text");

  return `
  <section id="${section.id}" class="scene-block">
    <h2 class="section-title">${section.title}</h2>
    <div class="code-window">
      <div class="code-top">
        <div class="lang">⚡ ${String(section.language || "CODE").toUpperCase()}</div>
        <div class="code-actions">
          <button onclick="copyCode(this)">COPIAR</button>
          <button onclick="expandCode(this)">EXPANDIR</button>
        </div>
      </div>
      <pre><code data-raw="${encodeURIComponent(section.code || "")}">${highlighted}</code></pre>
    </div>
  </section>`;
}

function componentFlow(section){
  return `
  <section id="${section.id}" class="scene-block panel">
    <h2 class="section-title">${section.title}</h2>
    <div class="flow">
      ${(section.nodes || []).map((node,index) => `
        <div class="flow-node">
          <h3>${node.title}</h3>
          <p class="muted">${node.desc}</p>
        </div>
        ${index < section.nodes.length - 1 ? `<div class="flow-arrow">➜</div>` : ""}
      `).join("")}
    </div>
  </section>`;
}

function componentTable(section){
  return `
  <section id="${section.id}" class="scene-block panel">
    <h2 class="section-title">${section.title}</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>${section.headers.map(h => `<th>${h}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${section.rows.map(row => `
            <tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  </section>`;
}

function componentPractice(section){
  return `
  <section id="${section.id}" class="scene-block panel">
    <h2 class="section-title">${section.title}</h2>
    <div class="practice-list">
      ${(section.items || []).map((item,index) => `
        <div class="practice-item">
          <strong>Reto ${index + 1}:</strong> ${item}
        </div>
      `).join("")}
    </div>
  </section>`;
}

function highlightText(text, highlight){
  if(!highlight) return text;
  return text.replace(highlight, `<span class="highlight">${highlight}</span>`);
}
