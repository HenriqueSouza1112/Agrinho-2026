/* =============================================
   HIDROAGRO — script.js
   Cursor | Dark Mode | Menu | News | Minigame
   ============================================= */
'use strict';

/* ---- CUSTOM CURSOR ---- */
const cursor = document.getElementById('cursor');
const trail  = document.getElementById('cursor-trail');
let mx = -100, my = -100;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
  setTimeout(() => {
    trail.style.left = mx + 'px';
    trail.style.top  = my + 'px';
  }, 120);
});

document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
document.addEventListener('mouseup',   () => cursor.classList.remove('clicking'));

/* ---- DARK MODE ---- */
const themeBtn = document.getElementById('themeToggle');
const html     = document.documentElement;

function applyTheme(t) {
  html.setAttribute('data-theme', t);
  localStorage.setItem('hidroagro-theme', t);
}

(function initTheme() {
  const saved = localStorage.getItem('hidroagro-theme');
  const sys   = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(saved || sys);
})();

themeBtn.addEventListener('click', () => {
  applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* ---- HAMBURGER ---- */
const hamBtn   = document.getElementById('hamburgerBtn');
const mobileNav= document.getElementById('mobileNav');

hamBtn.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  hamBtn.classList.toggle('open', open);
  hamBtn.setAttribute('aria-expanded', String(open));
  mobileNav.setAttribute('aria-hidden', String(!open));
});
document.addEventListener('click', e => {
  if (!hamBtn.contains(e.target) && !mobileNav.contains(e.target)) {
    mobileNav.classList.remove('open');
    hamBtn.classList.remove('open');
    hamBtn.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
  }
});

/* ---- HERO METER ANIMATION ---- */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('heroMeter').style.width = '38%';
  }, 600);
});

/* ---- NEWS DATA ---- */
const newsData = [
  {
    id: 1, feat: true,
    cat: 'tecnologia', catLabel: 'Tecnologia',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&auto=format&fit=crop',
    alt: 'Sistema de tratamento de água industrial',
    title: 'Biorreatores de Membrana Revolucionam o Reuso Industrial de Água',
    excerpt: 'Tecnologia MBR (Membrane Bioreactor) permite que efluentes do processamento de cana-de-açúcar atinjam padrão de qualidade superior ao de rios classe 1, sendo reinseridos diretamente no processo produtivo e reduzindo a captação em 82%.',
    author: 'Eng. Luís Carvalho',
    date: '04 Jun 2026',
    readTime: '7 min'
  },
  {
    id: 2, feat: false,
    cat: 'politica', catLabel: 'Política',
    img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=700&auto=format&fit=crop',
    alt: 'Reunião de executivos e legisladores em ambiente corporativo',
    title: 'Marco Regulatório do Reuso de Água: O Que Muda para o Agronegócio em 2026',
    excerpt: 'A Resolução CONAMA 541/2025 estabelece parâmetros obrigatórios para reuso de efluentes tratados na irrigação de culturas alimentares, com prazo de adequação de 18 meses e incentivos fiscais para quem antecipar a implementação.',
    author: 'Dra. Renata Borges',
    date: '02 Jun 2026',
    readTime: '6 min'
  },
  {
    id: 3, feat: false,
    cat: 'cases', catLabel: 'Cases',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&auto=format&fit=crop',
    alt: 'Irrigação em lavoura agrícola ao pôr do sol',
    title: 'Grupo JBS Economiza 2,8 Bilhões de Litros por Ano com Circuito Fechado',
    excerpt: 'Frigorífico de Barretos implementou sistema de recirculação total das águas de processo. O investimento de R$ 34 milhões foi recuperado em 26 meses, e o grupo projeta expansão do modelo para todas as unidades até 2027.',
    author: 'Rafael Mendonça',
    date: '30 Mai 2026',
    readTime: '5 min'
  },
  {
    id: 4, feat: false,
    cat: 'tecnologia', catLabel: 'Tecnologia',
    img: 'https://images.unsplash.com/photo-1604172808131-ba87ab41474c?w=700&auto=format&fit=crop',
    alt: 'Sensores e automação industrial em planta de processamento',
    title: 'Sensores IoT Monitoram Qualidade da Água em Tempo Real nas Lavouras',
    excerpt: 'Startup brasileira desenvolveu rede de sensores de baixo custo que analisa pH, turbidez, condutividade e patógenos em 4 segundos, integrando-se a sistemas SCADA e gerando alertas automáticos quando parâmetros de reuso são violados.',
    author: 'Ana Lima',
    date: '27 Mai 2026',
    readTime: '6 min'
  },
  {
    id: 5, feat: false,
    cat: 'cases', catLabel: 'Cases',
    img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=700&auto=format&fit=crop',
    alt: 'Solo fértil com plantação saudável e água',
    title: 'Vinícola Miolo Zera Descarte de Efluentes com Fitorremediação',
    excerpt: 'Vinhos Miolo (RS) implantou wetlands construídas para tratar o bagaço e as águas de lavagem das instalações. O sistema, inspirado em ecologia natural, usa macrófitas para depurar 100% dos efluentes, que retornam para irrigação dos próprios vinhedos.',
    author: 'Dra. Camila Torres',
    date: '24 Mai 2026',
    readTime: '8 min'
  },
  {
    id: 6, feat: false,
    cat: 'politica', catLabel: 'Política',
    img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=700&auto=format&fit=crop',
    alt: 'Rio limpo em meio a paisagem natural',
    title: 'Cobrança pelo Uso da Água Incentiva Eficiência em 12 Bacias Hidrográficas',
    excerpt: 'Agências de bacia que adotaram cobrança progressiva pelo volume de captação registraram redução média de 31% no consumo industrial em 5 anos, com migração espontânea das empresas para tecnologias de reuso como resposta econômica ao aumento de custos.',
    author: 'Prof. Henrique Neves',
    date: '20 Mai 2026',
    readTime: '5 min'
  },
  {
    id: 7, feat: false,
    cat: 'tecnologia', catLabel: 'Tecnologia',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=700&auto=format&fit=crop',
    alt: 'Laboratório de pesquisa com tubos e equipamentos',
    title: 'Nanofiltração com Grafeno Promete Custo 60% Menor no Tratamento de Efluentes',
    excerpt: 'Pesquisadores da UNICAMP desenvolveram membranas de óxido de grafeno que apresentam fluxo de permeação 4x superior às membranas poliméricas convencionais, com menor fouling e vida útil de 8 anos, viabilizando economicamente o reuso até em pequenas agroindústrias.',
    author: 'Dr. Fábio Queiroz',
    date: '17 Mai 2026',
    readTime: '9 min'
  }
];

/* ---- RENDER NEWS ---- */
function buildCard(n, i) {
  const el = document.createElement('article');
  el.className = `card${n.feat ? ' feat' : ''}`;
  el.setAttribute('data-cat', n.cat);
  el.innerHTML = `
    <div class="card-img">
      <img src="${n.img}" alt="${n.alt}" loading="lazy"/>
      <span class="card-tag">${n.catLabel}</span>
    </div>
    <div class="card-body">
      <div class="card-meta">
        <time>${n.date}</time>
        <span>·</span>
        <span>${n.author}</span>
      </div>
      <h2 class="card-title">${n.title}</h2>
      <p class="card-excerpt">${n.excerpt}</p>
      <div class="card-foot">
        <span class="card-author">Por ${n.author}</span>
        <span class="card-rt">⏱ ${n.readTime}</span>
      </div>
    </div>`;
  return el;
}

function renderNews(filter = 'all') {
  const grid = document.getElementById('newsGrid');
  grid.innerHTML = '';
  const list = filter === 'all' ? newsData : newsData.filter(n => n.cat === filter);
  list.forEach((n, i) => {
    const d = { ...n, feat: i === 0 && filter === 'all' };
    grid.appendChild(buildCard(d, i));
  });
}
renderNews();

document.querySelectorAll('.fbtn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.fbtn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderNews(btn.dataset.filter);
  });
});

/* ---- NEWSLETTER ---- */
function handleSub(e) {
  e.preventDefault();
  const inp = e.target.querySelector('input');
  const btn = e.target.querySelector('button');
  btn.textContent = '✓ Inscrito!';
  btn.style.background = '#22c55e';
  inp.value = ''; inp.disabled = true; btn.disabled = true;
  inp.placeholder = 'Você receberá novidades em breve!';
  setTimeout(() => {
    btn.textContent = 'Assinar'; btn.style.background = '';
    inp.disabled = false; btn.disabled = false;
    inp.placeholder = 'seu@email.com.br';
  }, 4000);
}

/* =====================
   MINIGAME: GESTOR DE ÁGUA
   ===================== */
const arena    = document.getElementById('gameArena');
const gameIdle = document.getElementById('gameIdle');
const gameOver = document.getElementById('gameOver');
const btnStart = document.getElementById('btnStart');
const btnRestart = document.getElementById('btnRestart');
const elScore  = document.getElementById('gsScore');
const elReuso  = document.getElementById('gsReuso');
const elTime   = document.getElementById('gsTime');

let score = 0, collected = 0, missed = 0;
let gameRunning = false;
let dropInterval = null, timerInterval = null;
let timeLeft = 30;
let drops = [];
let dropIdCounter = 0;

const DROP_TYPES = [
  { type: 'clean',   color: '#38bdf8', points: 2,  label: 'clean',   chance: 0.45 },
  { type: 'treated', color: '#22d3ee', points: 3,  label: 'treated', chance: 0.30 },
  { type: 'premium', color: '#f59e0b', points: 5,  label: 'premium', chance: 0.10 },
  { type: 'waste',   color: '#ef4444', points: -1, label: 'waste',   chance: 0.15 },
];

function pickType() {
  const r = Math.random();
  let cum = 0;
  for (const t of DROP_TYPES) { cum += t.chance; if (r < cum) return t; }
  return DROP_TYPES[0];
}

function spawnDrop() {
  const t    = pickType();
  const id   = ++dropIdCounter;
  const x    = 6 + Math.random() * 88; // %
  const y    = 5 + Math.random() * 82;

  const el = document.createElement('div');
  el.className = `drop${t.type === 'waste' ? ' waste' : ''}${t.type === 'premium' ? ' premium' : ''}`;
  el.id = 'drop-' + id;
  el.style.left = x + '%';
  el.style.top  = y + '%';

  const svgColor = t.color;
  el.innerHTML = `<svg viewBox="0 0 34 40" fill="none">
    <path d="M17 2C17 2 3 18 3 26C3 33.2 9.3 38 17 38C24.7 38 31 33.2 31 26C31 18 17 2 17 2Z" fill="${svgColor}" opacity="0.92"/>
    <ellipse cx="12" cy="23" rx="3" ry="4.5" fill="rgba(255,255,255,0.22)" transform="rotate(-20 12 23)"/>
  </svg>`;

  // auto-remove if not clicked
  const autoRemove = setTimeout(() => {
    if (document.getElementById('drop-' + id)) {
      el.remove();
      drops = drops.filter(d => d.id !== id);
      if (t.type !== 'waste') missed++;
    }
  }, 2200 + Math.random() * 1000);

  el.addEventListener('click', e => {
    if (!gameRunning) return;
    clearTimeout(autoRemove);

    // ripple
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = e.clientX - arena.getBoundingClientRect().left + 'px';
    ripple.style.top  = e.clientY - arena.getBoundingClientRect().top + 'px';
    ripple.style.borderColor = t.color;
    arena.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());

    // score
    score += t.points;
    if (score < 0) score = 0;
    if (t.type !== 'waste') collected++;
    updateHUD();

    // pop
    el.classList.add('pop');
    el.addEventListener('animationend', () => {
      el.remove();
      drops = drops.filter(d => d.id !== id);
    }, { once: true });
  });

  arena.appendChild(el);
  drops.push({ id, el, autoRemove });
}

function updateHUD() {
  elScore.textContent = score;
  const total = collected + missed;
  const pct = total > 0 ? Math.round((collected / total) * 100) : 0;
  elReuso.textContent = pct + '%';
}

function startGame() {
  score = 0; collected = 0; missed = 0; timeLeft = 30;
  drops.forEach(d => { clearTimeout(d.autoRemove); d.el.remove(); });
  drops = [];
  updateHUD();
  elTime.textContent = 30;

  gameIdle.style.display = 'none';
  gameOver.style.display = 'none';
  gameRunning = true;

  // spawn drops
  dropInterval = setInterval(() => {
    if (!gameRunning) return;
    const count = timeLeft > 20 ? 1 : timeLeft > 10 ? 2 : 2;
    for (let i = 0; i < count; i++) spawnDrop();
  }, 900);

  // countdown
  timerInterval = setInterval(() => {
    timeLeft--;
    elTime.textContent = timeLeft;
    if (timeLeft <= 0) endGame();
  }, 1000);
}

function endGame() {
  gameRunning = false;
  clearInterval(dropInterval);
  clearInterval(timerInterval);

  // clear remaining drops
  drops.forEach(d => { clearTimeout(d.autoRemove); d.el.remove(); });
  drops = [];

  const total = collected + missed;
  const pct = total > 0 ? Math.round((collected / total) * 100) : 0;

  document.getElementById('goScore').textContent = score + ' pontos';
  document.getElementById('goReuso').textContent = 'Taxa de Reuso: ' + pct + '%';

  let msg = '';
  if (pct >= 80) msg = '🏆 Excelente! Sua gestão é de classe mundial. A agroindústria precisa de gestores como você!';
  else if (pct >= 60) msg = '✅ Boa performance! Com ajustes pontuais, você pode atingir padrões sustentáveis.';
  else if (pct >= 40) msg = '⚠️ Resultado mediano. Considere investir em tecnologias de reuso para melhorar o índice.';
  else msg = '🚨 Taxa de reuso baixa. É hora de repensar a gestão hídrica na sua operação.';

  document.getElementById('goMsg').textContent = msg;
  gameOver.style.display = 'flex';
}

btnStart.addEventListener('click', startGame);
btnRestart.addEventListener('click', startGame);

// hide cursor trail inside arena (game is on)
arena.addEventListener('mouseenter', () => trail.style.opacity = '0');
arena.addEventListener('mouseleave', () => trail.style.opacity = '1');
