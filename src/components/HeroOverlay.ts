export function createHeroOverlay() {
  const root = document.createElement('div');
  root.innerHTML = `
    <section style="position:absolute;inset:0;display:flex;align-items:center;padding:8vw;pointer-events:none">
      <div>
        <div style="letter-spacing:.3em;font-size:12px;opacity:.6">INDEPENDENT DEVELOPER</div>
        <h1 style="font-size:clamp(64px,12vw,160px);line-height:.9;margin:20px 0;letter-spacing:-.08em">m1ngsama</h1>
        <p style="color:rgba(255,255,255,.6);font-size:20px">AI Agent · Full-stack · Open Source</p>
      </div>
    </section>`
  document.body.appendChild(root)
}
