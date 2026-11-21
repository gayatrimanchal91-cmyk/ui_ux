const uxProcessStages = [
  { step: "Stage 01", title: "Problem Identification", desc: "Define product purpose, target users, and core goals prior to visual styling." },
  { step: "Stage 02", title: "UX Case Study Framing", desc: "Structure problem statements, research rationale, and design decisions." },
  { step: "Stage 03", title: "User Research & Benchmarking", desc: "Analyze existing products, navigation conventions, and user pain points." },
  { step: "Stage 04", title: "User Flow & Information Architecture", desc: "Map logical interaction sequences and content hierarchy." },
  { step: "Stage 05", title: "Low-Fidelity Wireframing", desc: "Validate layout structure and placement early without visual distraction." },
  { step: "Stage 06", title: "High-Fidelity UI Design", desc: "Apply color tokens, typography scale, icons, and spacing in Figma." },
  { step: "Stage 07", title: "Responsive Landing Page", desc: "Adapt header, hero, feature cards, and CTAs across viewport breakpoints." },
  { step: "Stage 08", title: "Design System Creation", desc: "Standardize reusable components and visual styles for consistency." },
  { step: "Stage 09", title: "Prototyping & Self-Review", desc: "Simulate user journeys and refine alignment, contrast, and usability." }
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("workflow-grid");
  if (grid) {
    grid.innerHTML = uxProcessStages.map(item => `
      <article class="card">
        <span class="step-num">${item.step}</span>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </article>
    `).join("");
  }

  const demoBtn = document.getElementById("demo-toast-btn");
  const statusEl = document.getElementById("demo-status");
  if (demoBtn && statusEl) {
    demoBtn.addEventListener("click", () => {
      statusEl.textContent = "Interaction verified: Accessible feedback state triggered.";
    });
  }
});
