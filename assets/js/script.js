// Замени данные ниже своими: image может указывать на файл в assets/images/posts/
// Если image не задан (null) — рисуется цветная заглушка с подписью.
const POSTS = [
  { image: null, color: "#f09433", caption: "Первый пост на моём личном сайте ✨", likes: 128, date: "2 июля 2026", multi: false },
  { image: null, color: "#e6683c", caption: "Заходящее солнце над городом 🌇", likes: 342, date: "28 июня 2026", multi: true },
  { image: null, color: "#dc2743", caption: "Кофе и код ☕️💻", likes: 87, date: "20 июня 2026", multi: false },
  { image: null, color: "#cc2366", caption: "Путешествие в горы 🏔️", likes: 501, date: "10 июня 2026", multi: true },
  { image: null, color: "#bc1888", caption: "Новый проект в разработке", likes: 76, date: "1 июня 2026", multi: false },
  { image: null, color: "#4c68d7", caption: "Вечерняя прогулка", likes: 219, date: "22 мая 2026", multi: false },
  { image: null, color: "#20c997", caption: "Команда после релиза 🚀", likes: 164, date: "15 мая 2026", multi: true },
  { image: null, color: "#f77737", caption: "Выходные на природе", likes: 290, date: "3 мая 2026", multi: false },
  { image: null, color: "#833ab4", caption: "Ночной город", likes: 355, date: "20 апреля 2026", multi: false },
];

const STORIES = [
  { label: "Работа", emoji: "💻" },
  { label: "Путешествия", emoji: "✈️", tab: "travel" },
  { label: "Кофе", emoji: "☕" },
  { label: "Друзья", emoji: "👥" },
  { label: "Спорт", emoji: "🏃" },
];

// progress: 0-100. Отредактируй список под свои цели.
const GOALS = [
  { emoji: "💻", title: "Запустить личный сайт", progress: 100, deadline: "Июль 2026" },
  { emoji: "📚", title: "Прочитать 12 книг за год", progress: 40, deadline: "Декабрь 2026" },
  { emoji: "🏃", title: "Пробежать полумарафон", progress: 25, deadline: "Октябрь 2026" },
  { emoji: "🌍", title: "Съездить в 3 новые страны", progress: 60, deadline: "2026" },
  { emoji: "💰", title: "Собрать финансовую подушку", progress: 70, deadline: "Ноябрь 2026" },
  { emoji: "🏔️", title: "Покорить треккинг в Гималаях", progress: 10, deadline: "2027" },
];

// score: 1-10 для каждой сферы жизни. Отредактируй под себя.
const LIFE_AREAS = [
  { label: "Здоровье", score: 7 },
  { label: "Карьера", score: 8 },
  { label: "Финансы", score: 6 },
  { label: "Отношения", score: 7 },
  { label: "Рост", score: 8 },
  { label: "Отдых", score: 5 },
  { label: "Семья", score: 9 },
  { label: "Окружение", score: 7 },
];

// Цветовая схема в стиле приложений-трекеров путешествий.
const TRAVEL_STATUSES = {
  lived:    { label: "Проживал",         color: "#4caf50" },
  visited:  { label: "Посещал",          color: "#9ccc12" },
  planning: { label: "Планирую посетить", color: "#a55fce" },
  want:     { label: "Хочу посетить",     color: "#6f6fe6" },
  transit:  { label: "Был проездом",      color: "#ffa726" },
  avoid:    { label: "Держусь подальше",  color: "#ff5252" },
  none:     { label: "Не посещал",        color: "#a3a3a3" },
};

// Код страны (ISO 3166-1 alpha-2) → статус. Отредактируй под свою карту.
const TRAVEL_DATA = {
  ru: "lived",
  tr: "visited", ae: "visited", th: "visited", ge: "visited", am: "visited", kz: "visited",
  it: "planning", es: "planning", pt: "planning",
  np: "want", jp: "want", is: "want", nz: "want", pe: "want",
  de: "transit", qa: "transit",
};

const WORLD_COUNTRY_COUNT = 195;

const grid = document.getElementById("postsGrid");
const gridEmpty = document.getElementById("gridEmpty");
const storiesScroller = document.getElementById("storiesScroller");
const postsCount = document.getElementById("postsCount");
const goalsSection = document.getElementById("goalsSection");
const goalsList = document.getElementById("goalsList");
const mylifeSection = document.getElementById("mylifeSection");
const mylifeChart = document.getElementById("mylifeChart");
const mylifeList = document.getElementById("mylifeList");
const travelSection = document.getElementById("travelSection");
const travelStats = document.getElementById("travelStats");
const travelMap = document.getElementById("travelMap");
const travelLegend = document.getElementById("travelLegend");
const travelTooltip = document.getElementById("travelTooltip");
const travelPopover = document.getElementById("travelPopover");

const TRAVEL_STORAGE_KEY = "personalgram-travel-data";

function loadTravelData() {
  try {
    const saved = JSON.parse(localStorage.getItem(TRAVEL_STORAGE_KEY));
    if (saved && typeof saved === "object") return { ...TRAVEL_DATA, ...saved };
  } catch (e) { /* localStorage недоступен или данные повреждены — используем дефолт */ }
  return { ...TRAVEL_DATA };
}

function saveTravelData() {
  try { localStorage.setItem(TRAVEL_STORAGE_KEY, JSON.stringify(travelData)); } catch (e) { /* игнорируем */ }
}

let travelData = loadTravelData();

function renderStories() {
  storiesScroller.innerHTML = STORIES.map(s => `
    <div class="story${s.tab ? " story--clickable" : ""}" ${s.tab ? `data-tab="${s.tab}"` : ""}>
      <div class="story__avatar"><span>${s.emoji}</span></div>
      <div class="story__label">${s.label}</div>
    </div>
  `).join("");

  storiesScroller.querySelectorAll(".story--clickable").forEach(el => {
    el.addEventListener("click", () => activateSection(el.dataset.tab));
  });
}

function multiIcon() {
  return `<svg class="post__multi" viewBox="0 0 24 24" width="18" height="18">
    <path fill="currentColor" d="M20 2H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM4 8H3a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2h11a1 1 0 0 0 1-1v-1H4z"/>
  </svg>`;
}

function heartIcon() {
  return `<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 21s-6.7-4.35-9.33-8.2C.86 10.1 1.4 6.6 4.2 5.1c2.2-1.2 4.6-.5 6 1.3l1.8 2.3 1.8-2.3c1.4-1.8 3.8-2.5 6-1.3 2.8 1.5 3.34 5 1.53 7.7C18.7 16.65 12 21 12 21z"/></svg>`;
}
function commentIcon() {
  return `<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 3C6.48 3 2 6.58 2 11c0 2.28 1.15 4.34 3 5.8V21l4.1-2.05c.93.2 1.9.3 2.9.3 5.52 0 10-3.58 10-8s-4.48-8.25-10-8.25z"/></svg>`;
}

function renderPosts() {
  postsCount.textContent = POSTS.length;

  if (POSTS.length === 0) {
    gridEmpty.hidden = false;
    return;
  }

  grid.innerHTML = POSTS.map((post, i) => `
    <div class="post" data-index="${i}">
      ${post.multi ? multiIcon() : ""}
      ${post.image
        ? `<img class="post__image" src="${post.image}" alt="${post.caption}">`
        : `<div class="post__placeholder" style="background:${post.color}">${post.caption}</div>`
      }
      <div class="post__overlay">
        <span>${heartIcon()} ${post.likes}</span>
        <span>${commentIcon()} ${Math.max(1, Math.round(post.likes / 20))}</span>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".post").forEach(el => {
    el.addEventListener("click", () => openModal(Number(el.dataset.index)));
  });
}

function renderGoals() {
  goalsList.innerHTML = GOALS.map(goal => {
    const done = goal.progress >= 100;
    return `
      <div class="goal-card">
        <div class="goal-card__top">
          <div class="goal-card__title"><span class="goal-card__emoji">${goal.emoji}</span>${goal.title}</div>
          <span class="goal-card__status ${done ? "goal-card__status--done" : "goal-card__status--progress"}">
            ${done ? "Готово" : goal.progress + "%"}
          </span>
        </div>
        <div class="goal-card__bar">
          <div class="goal-card__bar-fill" style="width:${goal.progress}%"></div>
        </div>
        <div class="goal-card__meta">
          <span>${done ? "Достигнуто" : "В процессе"}</span>
          <span>${goal.deadline}</span>
        </div>
      </div>
    `;
  }).join("");
}

function renderLifeWheel() {
  const n = LIFE_AREAS.length;
  const size = 440;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = 140;
  const maxScore = 10;
  const ringSteps = [0.25, 0.5, 0.75, 1];

  const angleAt = i => -Math.PI / 2 + i * (2 * Math.PI / n);
  const pointAt = (i, r) => {
    const a = angleAt(i);
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  };

  const rings = ringSteps.map(step =>
    `<circle class="mylife__ring" cx="${cx}" cy="${cy}" r="${maxR * step}"></circle>`
  ).join("");

  const spokes = LIFE_AREAS.map((_, i) => {
    const p = pointAt(i, maxR);
    return `<line class="mylife__spoke" x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}"></line>`;
  }).join("");

  const areaPoints = LIFE_AREAS.map((area, i) => {
    const p = pointAt(i, (area.score / maxScore) * maxR);
    return `${p.x},${p.y}`;
  }).join(" ");

  const dots = LIFE_AREAS.map((area, i) => {
    const p = pointAt(i, (area.score / maxScore) * maxR);
    return `<circle class="mylife__dot" cx="${p.x}" cy="${p.y}" r="4"></circle>`;
  }).join("");

  const valueLabels = LIFE_AREAS.map((area, i) => {
    const p = pointAt(i, (area.score / maxScore) * maxR + 16);
    return `<text class="mylife__value-label" x="${p.x}" y="${p.y}" dy="4">${area.score}</text>`;
  }).join("");

  const axisLabels = LIFE_AREAS.map((area, i) => {
    const p = pointAt(i, maxR + 34);
    const sinA = Math.sin(angleAt(i));
    const dy = sinA < -0.5 ? -4 : sinA > 0.5 ? 12 : 4;
    return `<text class="mylife__axis-label" x="${p.x}" y="${p.y}" dy="${dy}">${area.label}</text>`;
  }).join("");

  mylifeChart.innerHTML = `
    <svg viewBox="0 0 ${size} ${size}" role="img" aria-label="Колесо баланса">
      ${rings}
      ${spokes}
      <polygon class="mylife__area" points="${areaPoints}"></polygon>
      ${dots}
      ${valueLabels}
      ${axisLabels}
    </svg>
  `;

  mylifeList.innerHTML = LIFE_AREAS.map(area => `
    <li>
      <span>${area.label}</span>
      <span class="mylife__list-score">${area.score}/10</span>
    </li>
  `).join("");
}

let travelInitialized = false;

function renderTravel() {
  if (travelInitialized) return;
  travelInitialized = true;

  travelMap.innerHTML = `<svg viewBox="0 0 1010 666" xmlns="http://www.w3.org/2000/svg">${WORLD_MAP_PATHS}</svg>`;

  travelMap.querySelectorAll("path").forEach(path => {
    path.addEventListener("mouseenter", () => showTravelTooltip(path));
    path.addEventListener("mouseleave", () => { travelTooltip.hidden = true; });
    path.addEventListener("click", e => {
      e.stopPropagation();
      travelTooltip.hidden = true;
      openTravelPopover(path);
    });
  });

  document.addEventListener("click", () => { travelPopover.hidden = true; });
  travelPopover.addEventListener("click", e => e.stopPropagation());

  travelLegend.innerHTML = Object.values(TRAVEL_STATUSES).map(s => `
    <li><span class="travel__legend-dot" style="background:${s.color}"></span>${s.label}</li>
  `).join("");

  updateTravelColors();
  updateTravelStats();
}

function statusOf(code) {
  return travelData[code] || "none";
}

function updateTravelColors() {
  travelMap.querySelectorAll("path").forEach(path => {
    Object.keys(TRAVEL_STATUSES).forEach(key => path.classList.remove(`travel-status--${key}`));
    path.classList.add(`travel-status--${statusOf(path.id)}`);
  });
}

function updateTravelStats() {
  const codes = Object.keys(travelData);
  const visitedCount = codes.filter(c => travelData[c] === "lived" || travelData[c] === "visited").length;
  const wantCount = codes.filter(c => travelData[c] === "want").length;
  const percent = Math.round((visitedCount / WORLD_COUNTRY_COUNT) * 100);

  travelStats.innerHTML = `
    <div class="travel__stat"><strong>${visitedCount}</strong><span>стран посещено</span></div>
    <div class="travel__stat"><strong>${percent}%</strong><span>от всего мира</span></div>
    <div class="travel__stat"><strong>${wantCount}</strong><span>хочу посетить</span></div>
  `;
}

function positionFloatingEl(el, path) {
  const wrapRect = travelMap.parentElement.getBoundingClientRect();
  const pathRect = path.getBoundingClientRect();
  el.style.left = (pathRect.left + pathRect.width / 2 - wrapRect.left) + "px";
  el.style.top = (pathRect.top - wrapRect.top) + "px";
}

function showTravelTooltip(path) {
  const name = path.getAttribute("aria-label") || path.id.toUpperCase();
  travelTooltip.textContent = name;
  positionFloatingEl(travelTooltip, path);
  travelTooltip.hidden = false;
}

function openTravelPopover(path) {
  const name = path.getAttribute("aria-label") || path.id.toUpperCase();
  const current = statusOf(path.id);

  travelPopover.innerHTML = `
    <div class="travel__popover-title">${name}</div>
    <ul class="travel__popover-list">
      ${Object.entries(TRAVEL_STATUSES).map(([key, s]) => `
        <li>
          <button type="button" class="travel__popover-option${key === current ? " is-selected" : ""}" data-status="${key}">
            <span class="travel__legend-dot" style="background:${s.color}"></span>
            ${s.label}
          </button>
        </li>
      `).join("")}
    </ul>
  `;

  travelPopover.querySelectorAll(".travel__popover-option").forEach(btn => {
    btn.addEventListener("click", () => {
      const status = btn.dataset.status;
      if (status === "none") {
        delete travelData[path.id];
      } else {
        travelData[path.id] = status;
      }
      saveTravelData();
      updateTravelColors();
      updateTravelStats();
      travelPopover.hidden = true;
    });
  });

  positionFloatingEl(travelPopover, path);
  travelPopover.hidden = false;
}

// Modal
const modal = document.getElementById("postModal");
const modalMedia = document.getElementById("modalMedia");
const modalCaption = document.getElementById("modalCaption");
const modalLikes = document.getElementById("modalLikes");
const modalDate = document.getElementById("modalDate");

function openModal(index) {
  const post = POSTS[index];
  modalMedia.innerHTML = post.image
    ? `<img src="${post.image}" alt="${post.caption}">`
    : `<div class="post__placeholder" style="background:${post.color}">${post.caption}</div>`;
  modalCaption.innerHTML = `<strong>denis.cloudepro</strong> ${post.caption}`;
  modalLikes.textContent = post.likes;
  modalDate.textContent = post.date;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !modal.hidden) closeModal();
});

// Tabs
const EMPTY_MESSAGES = {
  posts: "Здесь пока ничего нет",
  reels: "Пока нет Reels",
  tagged: "Пока нет отметок",
};

function activateSection(kind) {
  document.querySelectorAll(".tabs__item").forEach(t => t.classList.remove("is-active"));
  const tabButton = document.querySelector(`.tabs__item[data-tab="${kind}"]`);
  if (tabButton) tabButton.classList.add("is-active");

  grid.hidden = kind !== "posts";
  goalsSection.hidden = kind !== "goals";
  mylifeSection.hidden = kind !== "mylife";
  travelSection.hidden = kind !== "travel";

  if (kind === "posts") {
    renderPosts();
    gridEmpty.hidden = POSTS.length > 0;
  } else if (kind === "goals") {
    renderGoals();
    gridEmpty.hidden = true;
  } else if (kind === "mylife") {
    renderLifeWheel();
    gridEmpty.hidden = true;
  } else if (kind === "travel") {
    renderTravel();
    gridEmpty.hidden = true;
  } else {
    grid.innerHTML = "";
    gridEmpty.textContent = EMPTY_MESSAGES[kind];
    gridEmpty.hidden = false;
  }
}

document.querySelectorAll(".tabs__item").forEach(tab => {
  tab.addEventListener("click", () => activateSection(tab.dataset.tab));
});

renderStories();
renderPosts();
