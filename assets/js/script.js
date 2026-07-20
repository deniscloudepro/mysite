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
  { label: "Обо мне", emoji: "🙂", page: "about" },
  {
    label: "Бизнес", emoji: "💻", context: "business",
    subTabs: [
      { key: "projects", label: "Проекты", icon: '<path fill="currentColor" d="M20 6h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z"/>' },
      { key: "history", label: "История", icon: '<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3.5 2" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' },
      { key: "achievements", label: "Достижения", icon: '<path fill="currentColor" d="M12 2l2.2 6.8H21l-5.6 4.2 2.1 6.8-5.5-4.1-5.5 4.1 2.1-6.8L3 8.8h6.8z"/>' },
    ],
  },
  {
    label: "Путешествия", emoji: "✈️", context: "travel",
    subTabs: [
      { key: "countries", label: "Страны", icon: '<path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" stroke="currentColor" stroke-width="1.4" fill="none"/>' },
      { key: "cities", label: "Города", icon: '<path fill="currentColor" d="M3 21V9h6v12H3zm8 0V5h6v16h-6z"/>' },
      { key: "want", label: "Хочу посетить", icon: '<path fill="currentColor" d="M12 21s-6.7-4.35-9.33-8.2C.86 10.1 1.4 6.6 4.2 5.1c2.2-1.2 4.6-.5 6 1.3l1.8 2.3 1.8-2.3c1.4-1.8 3.8-2.5 6-1.3 2.8 1.5 3.34 5 1.53 7.7C18.7 16.65 12 21 12 21z"/>' },
    ],
  },
  { label: "Интересы", emoji: "🏃", context: "interests" },
  { label: "Друзья", emoji: "👥", context: "friends" },
];

// Интересы — вкладка «Интересы», плитка как на главной. Отредактируй под себя.
const INTERESTS = [
  { color: "#4c68d7", emoji: "⛷️", label: "Горные лыжи" },
  { color: "#20c997", emoji: "🧘", label: "Медитация" },
];

// Друзья — вкладка «Друзья», сетка кружочков. Отредактируй под себя.
const FRIENDS = [
  { name: "Алексей", initial: "А" },
  { name: "Мария", initial: "М" },
  { name: "Игорь", initial: "И" },
  { name: "Ольга", initial: "О" },
];

// Мои проекты — бренды, с которыми велась работа. Отредактируй под себя.
// logoClass задаёт стилизованный wordmark (см. .brand-logo--* в style.css);
// вместо него можно указать logoImage: "assets/images/logos/имя.png" — тогда
// будет использована реальная картинка логотипа.
const BUSINESS_PROJECTS = [
  { name: "Parker", logoImage: "assets/images/logos/parker.png", businessType: "Письменные принадлежности", projectType: "Дистрибуция" },
  { name: "Zippo", logoClass: "brand-logo--zippo", businessType: "Зажигалки", projectType: "Локализация бренда" },
  { name: "Waterman", logoClass: "brand-logo--waterman", businessType: "Письменные принадлежности", projectType: "Маркетинг" },
  { name: "Montblanc", logoImage: "assets/images/logos/montblanc.png", businessType: "Премиум-аксессуары", projectType: "Retail" },
  { name: "Moleskine", logoClass: "brand-logo--moleskine", businessType: "Блокноты и канцелярия", projectType: "E-commerce" },
];

// Города — вкладка «Путешествия → Города». Отредактируй под себя.
const CITIES = [
  { name: "Москва", country: "Россия" },
  { name: "Стамбул", country: "Турция" },
  { name: "Тбилиси", country: "Грузия" },
  { name: "Дубай", country: "ОАЭ" },
  { name: "Бангкок", country: "Таиланд" },
  { name: "Алматы", country: "Казахстан" },
];

// Хочу посетить — вкладка «Путешествия → Хочу посетить». Совпадает со
// странами статуса "want" на карте (TRAVEL_DATA); отредактируй под себя.
const WANT_TO_VISIT = [
  { name: "Непал", note: "Треккинг в Гималаях" },
  { name: "Япония", note: "" },
  { name: "Исландия", note: "" },
  { name: "Новая Зеландия", note: "" },
  { name: "Перу", note: "" },
];

// История — вкладка «Бизнес → История». Отредактируй под себя.
const BUSINESS_HISTORY = [
  { year: "2015", text: "Начал первый бизнес-проект" },
  { year: "2018", text: "Запустил сотрудничество с крупным брендом" },
  { year: "2021", text: "Расширил портфель партнёров" },
  { year: "2026", text: "Запустил личный сайт-визитку" },
];

// Достижения — вкладка «Бизнес → Достижения». Отредактируй под себя.
const ACHIEVEMENTS = [
  { emoji: "🏆", text: "Реализовал 10+ проектов с международными брендами" },
  { emoji: "📈", text: "Вывел партнёрский бренд в топ продаж категории" },
  { emoji: "🤝", text: "Построил долгосрочные партнёрства с производителями" },
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

// Пункты бокового меню и их содержимое. Отредактируй текст под себя.
const DRAWER_PAGES = [
  {
    key: "about",
    label: "Обо мне",
    body: "Привет! Меня зовут Денис Иштуганов — разработчик, предприниматель, люблю путешествия и хороший кофе.\n\nЭтот сайт — личная страница-визитка в стиле Instagram, где я собираю всё в одном месте: цели, колесо баланса и карту поездок.",
  },
  {
    key: "path",
    label: "Мой путь",
    body: "Коротко о профессиональном и личном пути — учёба, первые проекты, ключевые решения и то, что привело меня туда, где я сейчас.\n\nОтредактируй этот раздел в DRAWER_PAGES в script.js.",
  },
  {
    key: "timeline",
    label: "Хронология",
    body: "2023 — начал новый проект\n2024 — переехал в другой город\n2025 — первое большое путешествие\n2026 — запустил личный сайт\n\nДобавь свои даты и события.",
  },
  {
    key: "hobbies",
    label: "Хобби",
    body: "💻 Программирование в свободное время\n🏔️ Треккинг и горы\n☕ Кофе и рецепты альтернативной заварки\n📚 Чтение нон-фикшна",
  },
  {
    key: "music",
    label: "Музыка",
    body: "Плейлист для работы, плейлист для дороги и пара любимых альбомов — сюда можно добавить ссылки на Spotify/Яндекс.Музыку.",
  },
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
const businessSection = document.getElementById("businessSection");
const businessGrid = document.getElementById("businessGrid");
const citiesSection = document.getElementById("citiesSection");
const citiesList = document.getElementById("citiesList");
const wantSection = document.getElementById("wantSection");
const wantList = document.getElementById("wantList");
const businessHistorySection = document.getElementById("businessHistorySection");
const businessHistoryList = document.getElementById("businessHistoryList");
const businessAchievementsSection = document.getElementById("businessAchievementsSection");
const businessAchievementsList = document.getElementById("businessAchievementsList");
const interestsSection = document.getElementById("interestsSection");
const interestsGrid = document.getElementById("interestsGrid");
const friendsSection = document.getElementById("friendsSection");
const friendsGrid = document.getElementById("friendsGrid");
const mainTabsNav = document.getElementById("mainTabs");
const subTabsNav = document.getElementById("subTabs");

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
  storiesScroller.innerHTML = STORIES.map((s, i) => {
    const clickable = Boolean(s.context || s.page);
    const attrs = [
      s.context ? `data-story-index="${i}"` : "",
      s.page ? `data-page="${s.page}"` : "",
    ].join(" ");
    return `
      <div class="story${clickable ? " story--clickable" : ""}" ${attrs}>
        <div class="story__avatar"><span>${s.emoji}</span></div>
        <div class="story__label">${s.label}</div>
      </div>
    `;
  }).join("");

  storiesScroller.querySelectorAll(".story--clickable").forEach(el => {
    el.addEventListener("click", () => {
      if (el.dataset.storyIndex !== undefined) {
        const story = STORIES[Number(el.dataset.storyIndex)];
        if (el.classList.contains("is-active")) {
          resetToDefault();
        } else {
          activateContext(story, el);
        }
      } else if (el.dataset.page) {
        openPage(el.dataset.page);
      }
    });
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

function renderBusiness() {
  businessGrid.innerHTML = BUSINESS_PROJECTS.map(project => `
    <div class="business-card">
      <div class="business-card__logo">
        ${project.logoImage
          ? `<img src="${project.logoImage}" alt="${project.name}">`
          : `<span class="brand-logo ${project.logoClass || ""}">${project.name}</span>`
        }
      </div>
      <div class="business-card__name">${project.name}</div>
      <div class="business-card__tags">
        <span class="business-card__tag">${project.businessType}</span>
        <span class="business-card__tag">${project.projectType}</span>
      </div>
    </div>
  `).join("");
}

function renderInterests() {
  interestsGrid.innerHTML = INTERESTS.map(item => `
    <div class="interest-tile" style="background:${item.color}">
      <span class="interest-tile__emoji">${item.emoji}</span>
      <span>${item.label}</span>
    </div>
  `).join("");
}

function renderFriends() {
  friendsGrid.innerHTML = FRIENDS.map(friend => `
    <div class="friend-card">
      <div class="friend-card__avatar"><span>${friend.initial}</span></div>
      <div class="friend-card__name">${friend.name}</div>
    </div>
  `).join("");
}

function renderCities() {
  citiesList.innerHTML = CITIES.map(city => `
    <li>
      <span class="cities__name">${city.name}</span>
      <span class="cities__country">${city.country}</span>
    </li>
  `).join("");
}

function renderWantToVisit() {
  wantList.innerHTML = WANT_TO_VISIT.map(place => `
    <li>
      <span class="cities__name">${place.name}</span>
      <span class="cities__country">${place.note || ""}</span>
    </li>
  `).join("");
}

function renderBusinessHistory() {
  businessHistoryList.innerHTML = BUSINESS_HISTORY.map(item => `
    <li>
      <span class="history__year">${item.year}</span>
      <span class="history__text">${item.text}</span>
    </li>
  `).join("");
}

function renderAchievements() {
  businessAchievementsList.innerHTML = ACHIEVEMENTS.map(item => `
    <li>
      <span class="achievements__emoji">${item.emoji}</span>
      <span class="achievements__text">${item.text}</span>
    </li>
  `).join("");
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
  modalCaption.innerHTML = `<strong>Денис Иштуганов</strong> ${post.caption}`;
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

// Drawer (side menu)
const drawer = document.getElementById("drawer");
const drawerList = document.getElementById("drawerList");
const menuToggle = document.getElementById("menuToggle");

drawerList.innerHTML = DRAWER_PAGES.map(page => `
  <li><button type="button" data-page="${page.key}">${page.label}</button></li>
`).join("");

function openDrawer() {
  drawer.hidden = false;
  requestAnimationFrame(() => drawer.classList.add("is-open"));
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  drawer.classList.remove("is-open");
  document.body.style.overflow = "";
  setTimeout(() => { drawer.hidden = true; }, 250);
}

menuToggle.addEventListener("click", openDrawer);
document.getElementById("drawerClose").addEventListener("click", closeDrawer);
document.getElementById("drawerBackdrop").addEventListener("click", closeDrawer);
drawerList.querySelectorAll("button[data-page]").forEach(btn => {
  btn.addEventListener("click", () => {
    closeDrawer();
    openPage(btn.dataset.page);
  });
});

// Page modal (drawer section content)
const pageModal = document.getElementById("pageModal");
const pageModalTitle = document.getElementById("pageModalTitle");
const pageModalBody = document.getElementById("pageModalBody");

function openPage(key) {
  const page = DRAWER_PAGES.find(p => p.key === key);
  if (!page) return;
  pageModalTitle.textContent = page.label;
  pageModalBody.textContent = page.body;
  pageModal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closePageModal() {
  pageModal.hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("pageModalClose").addEventListener("click", closePageModal);
document.getElementById("pageModalBackdrop").addEventListener("click", closePageModal);

document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (!modal.hidden) closeModal();
  if (!pageModal.hidden) closePageModal();
  if (drawer.classList.contains("is-open")) closeDrawer();
});

// Tabs
const EMPTY_MESSAGES = {
  posts: "Здесь пока ничего нет",
  reels: "Пока нет Reels",
  tagged: "Пока нет отметок",
};

const ALL_SECTIONS = [
  grid, goalsSection, mylifeSection, travelSection, businessSection,
  citiesSection, wantSection, businessHistorySection, businessAchievementsSection,
  interestsSection, friendsSection,
];

function hideAllSections() {
  ALL_SECTIONS.forEach(s => { s.hidden = true; });
  gridEmpty.hidden = true;
}

// Контексты сторис: story.context → ключ под-вкладки → секция + функция рендера.
const CONTEXTS = {
  business: {
    projects: { section: businessSection, render: renderBusiness },
    history: { section: businessHistorySection, render: renderBusinessHistory },
    achievements: { section: businessAchievementsSection, render: renderAchievements },
  },
  travel: {
    countries: { section: travelSection, render: renderTravel },
    cities: { section: citiesSection, render: renderCities },
    want: { section: wantSection, render: renderWantToVisit },
  },
  interests: {
    default: { section: interestsSection, render: renderInterests },
  },
  friends: {
    default: { section: friendsSection, render: renderFriends },
  },
};

function activateSection(kind) {
  document.querySelectorAll("#mainTabs .tabs__item").forEach(t => t.classList.remove("is-active"));
  const tabButton = document.querySelector(`#mainTabs .tabs__item[data-tab="${kind}"]`);
  if (tabButton) tabButton.classList.add("is-active");

  hideAllSections();

  if (kind === "posts") {
    grid.hidden = false;
    renderPosts();
    gridEmpty.hidden = POSTS.length > 0;
  } else if (kind === "goals") {
    goalsSection.hidden = false;
    renderGoals();
  } else if (kind === "mylife") {
    mylifeSection.hidden = false;
    renderLifeWheel();
  } else {
    gridEmpty.textContent = EMPTY_MESSAGES[kind];
    gridEmpty.hidden = false;
  }
}

function activateContext(story, storyEl) {
  document.querySelectorAll(".story").forEach(el => el.classList.remove("is-active"));
  storyEl.classList.add("is-active");

  mainTabsNav.hidden = true;

  if (!story.subTabs || story.subTabs.length === 0) {
    subTabsNav.hidden = true;
    subTabsNav.innerHTML = "";
    activateSubTab(story.context, "default");
    return;
  }

  subTabsNav.hidden = false;
  subTabsNav.innerHTML = story.subTabs.map((t, i) => `
    <button class="tabs__item${i === 0 ? " is-active" : ""}" data-subtab="${t.key}">
      <svg viewBox="0 0 24 24" width="14" height="14">${t.icon}</svg>
      ${t.label}
    </button>
  `).join("");

  subTabsNav.querySelectorAll(".tabs__item").forEach(btn => {
    btn.addEventListener("click", () => activateSubTab(story.context, btn.dataset.subtab));
  });

  activateSubTab(story.context, story.subTabs[0].key);
}

function activateSubTab(context, key) {
  subTabsNav.querySelectorAll(".tabs__item").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.subtab === key);
  });

  hideAllSections();
  const target = CONTEXTS[context] && CONTEXTS[context][key];
  if (!target) return;
  target.section.hidden = false;
  target.render();
}

function resetToDefault() {
  document.querySelectorAll(".story").forEach(el => el.classList.remove("is-active"));
  subTabsNav.hidden = true;
  subTabsNav.innerHTML = "";
  mainTabsNav.hidden = false;
  activateSection("posts");
}

document.querySelectorAll("#mainTabs .tabs__item").forEach(tab => {
  tab.addEventListener("click", () => activateSection(tab.dataset.tab));
});

renderStories();
renderPosts();

// Дата рождения — отредактируй под себя, возраст пересчитывается сам.
const BIRTH_DATE = new Date(1987, 9, 30);

function pluralizeYears(n) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "год";
  if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return "года";
  return "лет";
}

function renderAge() {
  const ageEl = document.getElementById("age");
  if (!ageEl) return;
  const today = new Date();
  let age = today.getFullYear() - BIRTH_DATE.getFullYear();
  const hadBirthdayThisYear =
    today.getMonth() > BIRTH_DATE.getMonth() ||
    (today.getMonth() === BIRTH_DATE.getMonth() && today.getDate() >= BIRTH_DATE.getDate());
  if (!hadBirthdayThisYear) age--;
  ageEl.textContent = `, ${age} ${pluralizeYears(age)}`;
}

renderAge();
