/* =======================================================
   Calculateur ECTS – CredESI (multi-campus + bacheliers)
   ======================================================= */

let B1_COURSES = [];
const DATA_BY_CAMPUS = {
  ESI: [],
  ISIB: [],
  ISES: [],
  ISEK: [],
  DEFRE: [],
  IESSID: [],
};

const STORAGE_CAMPUS = "credesi.b1.campus";
let currentCampus = localStorage.getItem(STORAGE_CAMPUS) || "ESI";
function selKey() {
  return `credesi.b1.selectedCourses.${currentCampus}`;
}

// ---------- Chargement serveur ----------
async function loadFromServer(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`API: HTTP ${res.status}`);
  return await res.json();
}

// ---------- DOM ----------
const ectsAccordion = document.getElementById("ects-accordion");
const ectsBadge = document.getElementById("ects-badge");
const listEl = document.getElementById("ects-list");
const sumEl = document.getElementById("ects-sum");
const barEl = document.getElementById("ects-progress");
const tabs = [...document.querySelectorAll(".ects-tab")];
const searchEl = document.getElementById("ects-search");
const resetBtn = document.getElementById("ects-reset");
const bachelorPicker = document.getElementById("bachelor-picker");
const bachelorSelect = document.getElementById("bachelorSelect");

let selected = new Set(JSON.parse(localStorage.getItem(selKey()) || "[]"));
const STORAGE_ACO = "credesi.b1.ectsAccordionOpen";
let currentTab = "ALL";
let currentQuery = "";

// ---------- Sélection ----------
function saveSelected() {
  localStorage.setItem(selKey(), JSON.stringify([...selected]));
}

function totalECTS() {
  return Math.min(
    B1_COURSES.reduce((s, c) => s + (selected.has(c.id) ? c.ects : 0), 0),
    60
  );
}

function updateSummary() {
  const t = totalECTS();
  sumEl.textContent = t;
  if (barEl) {
    barEl.style.width = (t / 60) * 100 + "%";
    barEl.style.background = t > 60 ? "#fb923c" : "#2F5AFF";
  }
  if (ectsBadge) ectsBadge.textContent = `${t}/60`;
}

function renderList() {
  listEl.innerHTML = "";

  if (!B1_COURSES || B1_COURSES.length === 0) {
    listEl.innerHTML = `<div style="padding:12px; color:#6b7a90;">
      Aucune donnée pour ce campus/bachelier pour l’instant.
    </div>`;
    return;
  }

  B1_COURSES.filter((c) => currentTab === "ALL" || c.quadri === currentTab)
    .filter((c) => (c.name || "").toLowerCase().includes(currentQuery))
    .forEach((c) => {
      const row = document.createElement("div");
      row.className = "ects-row" + (selected.has(c.id) ? " is-checked" : "");

      const left = document.createElement("label");
      left.className = "ects-left";

      const chk = document.createElement("input");
      chk.type = "checkbox";
      chk.checked = selected.has(c.id);

      const name = document.createElement("span");
      name.className = "ects-name";
      name.textContent = c.name;

      const badge = document.createElement("div");
      badge.className = "ects-badge-ects";
      badge.textContent = `+${c.ects} ECTS`;

      chk.addEventListener("change", () => {
        chk.checked ? selected.add(c.id) : selected.delete(c.id);
        saveSelected();
        renderList();
        updateSummary();
      });

      left.appendChild(chk);
      left.appendChild(name);
      row.appendChild(left);
      row.appendChild(badge);
      listEl.appendChild(row);
    });
}

// ---------- Onglets ----------
tabs.forEach((t) =>
  t.addEventListener("click", () => {
    tabs.forEach((x) => {
      x.classList.remove("is-active");
      x.setAttribute("aria-selected", "false");
    });
    t.classList.add("is-active");
    t.setAttribute("aria-selected", "true");
    currentTab = t.dataset.tab;
    renderList();
    updateSummary();
  })
);

// ---------- Recherche ----------
searchEl?.addEventListener("input", () => {
  currentQuery = searchEl.value.trim().toLowerCase();
  renderList();
  updateSummary();
});

// ---------- Réinitialiser ----------
resetBtn?.addEventListener("click", () => {
  selected.clear();
  saveSelected();
  renderList();
  updateSummary();
});

// ---------- Accordéon ----------
ectsAccordion?.addEventListener("toggle", () => {
  try {
    localStorage.setItem(STORAGE_ACO, ectsAccordion.open ? "1" : "0");
  } catch {}
});
(() => {
  try {
    if (localStorage.getItem(STORAGE_ACO) === "1") ectsAccordion.open = true;
  } catch {}
})();

// ---------- Campus picker ----------
function setActiveCampusBtn(code) {
  document.querySelectorAll(".campus-btn").forEach((b) => {
    const isActive = b.dataset.campus === code;
    b.classList.toggle("is-active", isActive);
    b.setAttribute("aria-pressed", String(isActive));
  });
}

function resetTabsToAll() {
  const all = document.querySelector('.ects-tab[data-tab="ALL"]');
  tabs.forEach((x) => {
    x.classList.remove("is-active");
    x.setAttribute("aria-selected", "false");
  });
  if (all) {
    all.classList.add("is-active");
    all.setAttribute("aria-selected", "true");
  }
  currentTab = "ALL";
}

async function switchCampus(code) {
  currentCampus = code;
  localStorage.setItem(STORAGE_CAMPUS, code);

  let url = `/.netlify/functions/${code.toLowerCase()}`;
  const data = await loadFromServer(url);

  // Cas 1 : retour direct = liste de cours
  if (Array.isArray(data) && data.length > 0 && data[0].ects) {
    DATA_BY_CAMPUS[code] = data;
    B1_COURSES = data;
    selected = new Set(JSON.parse(localStorage.getItem(selKey()) || "[]"));
    resetTabsToAll();
    currentQuery = "";
    renderList();
    updateSummary();
    setActiveCampusBtn(code);
    bachelorPicker.classList.add("hidden");
    return;
  }

  // Cas 2 : retour = liste de bacheliers
  if (Array.isArray(data) && data.length > 0) {
    bachelorPicker.classList.remove("hidden");
    bachelorSelect.innerHTML = `<option value="">-- Sélectionne une option --</option>`;
    data.forEach((b) => {
      const opt = document.createElement("option");
      opt.value = b.id;
      opt.textContent = b.name;
      bachelorSelect.appendChild(opt);
    });

    bachelorSelect.onchange = async () => {
      if (!bachelorSelect.value) return;
      const res2 = await fetch(
        `/.netlify/functions/${code.toLowerCase()}?bachelor=${
          bachelorSelect.value
        }`
      );
      const courses = await res2.json();
      DATA_BY_CAMPUS[code] = courses;
      B1_COURSES = courses;
      selected = new Set(JSON.parse(localStorage.getItem(selKey()) || "[]"));
      resetTabsToAll();
      currentQuery = "";
      renderList();
      updateSummary();
      setActiveCampusBtn(code);
    };

    // ✅ Correction : sélectionner automatiquement le premier bachelier
    if (data.length > 0) {
      bachelorSelect.value = data[0].id;
      bachelorSelect.onchange();
    }
  }
}

// écouteurs
document.querySelectorAll(".campus-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const code = btn.dataset.campus;
    if (code) switchCampus(code);
  });
});
setActiveCampusBtn(currentCampus);

// ---------- Init ----------
(async function initECTS() {
  await switchCampus(currentCampus);
})();
