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
  { label: "Путешествия", emoji: "✈️" },
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

const grid = document.getElementById("postsGrid");
const gridEmpty = document.getElementById("gridEmpty");
const storiesScroller = document.getElementById("storiesScroller");
const postsCount = document.getElementById("postsCount");
const goalsSection = document.getElementById("goalsSection");
const goalsList = document.getElementById("goalsList");

function renderStories() {
  storiesScroller.innerHTML = STORIES.map(s => `
    <div class="story">
      <div class="story__avatar"><span>${s.emoji}</span></div>
      <div class="story__label">${s.label}</div>
    </div>
  `).join("");
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

document.querySelectorAll(".tabs__item").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tabs__item").forEach(t => t.classList.remove("is-active"));
    tab.classList.add("is-active");

    const kind = tab.dataset.tab;

    grid.hidden = kind !== "posts";
    goalsSection.hidden = kind !== "goals";

    if (kind === "posts") {
      renderPosts();
      gridEmpty.hidden = POSTS.length > 0;
    } else if (kind === "goals") {
      renderGoals();
      gridEmpty.hidden = true;
    } else {
      grid.innerHTML = "";
      gridEmpty.textContent = EMPTY_MESSAGES[kind];
      gridEmpty.hidden = false;
    }
  });
});

renderStories();
renderPosts();
