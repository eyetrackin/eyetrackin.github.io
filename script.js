/* ==========================================================================
   EyeTrackIn – site configuration, translations and behaviour
   1. CONFIG (edit this)   2. I18N   3. Icons   4. Rendering   5. Behaviour
   ========================================================================== */

/* 1. CONFIG ---------------------------------------------------------------- */
const CONFIG = {
  projectName: "EyeTrackIn",
  domain: "https://eyetrackin.com",
  status: { en: "Currently in Development", es: "Actualmente en desarrollo" },

  contactEmail: "admin.eyetrackin@gmail.com",

  defaultLang: "en",

  /* Social networks, displayed in this order.
     enabled: false  -> never rendered (use for unconfirmed accounts)
     soon: true      -> rendered as a non-clickable "Coming soon" card
     footer: false   -> hidden from the footer icon row */
  social: [
    { id: "github",    name: "GitHub",    handle: "eyetrackin",      url: "https://github.com/eyetrackin",                          enabled: true },
    { id: "youtube",   name: "YouTube",   handle: "@EyeTrackIn",     url: "https://www.youtube.com/@EyeTrackIn",                    enabled: true },
    { id: "linkedin",  name: "LinkedIn",  handle: "EyeTrackIn",      url: "https://www.linkedin.com/company/146726952/",            enabled: true },
    { id: "x",         name: "X",         handle: "@EyeTrackIn",     url: "https://x.com/EyeTrackIn",                               enabled: true },
    { id: "instagram", name: "Instagram", handle: "@eyetrack_in",    url: "https://www.instagram.com/eyetrack_in/",                 enabled: true },
    { id: "reddit",    name: "Reddit",    handle: "r/eyetrackin",    url: "https://www.reddit.com/r/eyetrackin/",                   enabled: true },
    { id: "reddit",    name: "Reddit",    handle: "u/eyetrackin",    url: "https://www.reddit.com/user/eyetrackin/",                enabled: true, footer: false },
    { id: "facebook",  name: "Facebook",  handle: "EyeTrackIn",      url: "https://www.facebook.com/profile.php?id=61595061999948", enabled: true },
    { id: "tiktok",    name: "TikTok",    handle: "",                url: "",                                                       enabled: true, soon: true },
  ],
};

/* 2. I18N ------------------------------------------------------------------
   English is also the default text written in index.html (used without JS).
   To add a language: add a block below and a button in index.html (data-lang). */
const I18N = {
  en: {
    "meta.title": "EyeTrackIn | From Gaze to Insights",
    "meta.desc": "EyeTrackIn is desktop eye-tracking software for gaze recording, visualization, and analysis, designed to streamline research workflows. Currently in development.",
    skip: "Skip to content",
    "brand.aria": "EyeTrackIn – back to top",
    "nav.primary": "Primary", "nav.footer": "Footer",
    "nav.home": "Home", "nav.features": "Features", "nav.about": "About", "nav.community": "Community", "nav.contact": "Contact",
    "lang.label": "Language",
    "menu.open": "Open menu", "menu.close": "Close menu",
    "hero.lead": "Eye-tracking software for gaze recording, visualization, and analysis.",
    "hero.sub": "EyeTrackIn aims to streamline the workflows of acquiring, organizing, and analyzing gaze data, so researchers can spend less time on tooling and more time on questions.",
    "hero.cta1": "Explore Features", "hero.cta2": "Follow Our Progress",
    "viz.title": "Conceptual gaze visualization",
    "viz.desc": "A schematic stimulus layout overlaid with a heat map, fixation circles of different sizes, and lines connecting them in sequence.",
    "viz.caption": "Conceptual illustration with simulated data. Not real research results.",
    "features.title": "Designed for Eye-Tracking Workflows",
    "features.intro": "These are the areas EyeTrackIn is being built around. The software is under active development, and capabilities will be announced as they are completed.",
    "f1.title": "Gaze Recording", "f1.text": "Eye-tracking data acquisition and recording, aimed at capturing gaze data reliably during sessions.",
    "f2.title": "Session Management", "f2.text": "Organization and management of recording sessions, keeping your data structured and easy to find.",
    "f3.title": "Data Visualization", "f3.text": "Exploration of gaze data through visual representations such as fixations, scanpaths, and heat maps.",
    "f4.title": "Gaze Analysis", "f4.text": "Tools and workflows for examining eye-tracking data and turning it into meaningful findings.",
    "f5.title": "Research-Oriented Workflow", "f5.text": "A unified environment designed with research needs in mind, from acquisition to analysis.",
    "about.title": "About EyeTrackIn",
    "about.p1": "EyeTrackIn is a desktop software project focused on simplifying the acquisition, organization, visualization, and analysis of eye-tracking data.",
    "about.p2": "It is built with research in mind: the goal is to transform raw gaze data into useful information, within a single, coherent environment.",
    "about.p3": "The project is intended for researchers, professionals, developers, and anyone interested in visual attention and human-computer interaction.",
    "about.audience": "Who EyeTrackIn is for",
    "aud.1": "Researchers", "aud.2": "Professionals", "aud.3": "Developers", "aud.4": "Curious minds",
    "community.title": "Connect with EyeTrackIn",
    "community.intro": "Follow EyeTrackIn for development updates, software demonstrations, tutorials, and eye-tracking insights.",
    "social.on": "{name} on {network} (opens in a new tab)",
    "social.soon": "Coming soon",
    "footer.social": "EyeTrackIn on social media",
    "contact.title": "Get in Touch",
    "contact.intro": "Have a question about the project, or interested in eye-tracking research and tooling? We would be glad to hear from you.",
    "contact.email": "Send us an email",
    "footer.rights": "All rights reserved.",
  },
  es: {
    "meta.title": "EyeTrackIn | From Gaze to Insights",
    "meta.desc": "EyeTrackIn es un software de escritorio de eye tracking para el registro, la visualización y el análisis de la mirada, pensado para agilizar los flujos de trabajo de investigación. Actualmente en desarrollo.",
    skip: "Saltar al contenido",
    "brand.aria": "EyeTrackIn – volver al inicio",
    "nav.primary": "Principal", "nav.footer": "Pie de página",
    "nav.home": "Inicio", "nav.features": "Características", "nav.about": "Acerca de", "nav.community": "Comunidad", "nav.contact": "Contacto",
    "lang.label": "Idioma",
    "menu.open": "Abrir menú", "menu.close": "Cerrar menú",
    "hero.lead": "Software de eye tracking para el registro, la visualización y el análisis de la mirada.",
    "hero.sub": "EyeTrackIn busca facilitar los flujos de trabajo de adquisición, organización y análisis de datos de la mirada, para que los investigadores dediquen menos tiempo a las herramientas y más a sus preguntas.",
    "hero.cta1": "Descubre las características", "hero.cta2": "Sigue nuestro progreso",
    "viz.title": "Visualización conceptual de la mirada",
    "viz.desc": "Un esquema de estímulo con un mapa de calor superpuesto, círculos de fijación de distintos tamaños y líneas que los unen en secuencia.",
    "viz.caption": "Ilustración conceptual con datos simulados. No son resultados de investigación reales.",
    "features.title": "Diseñado para flujos de trabajo de eye tracking",
    "features.intro": "Estas son las áreas en torno a las que se está construyendo EyeTrackIn. El software está en pleno desarrollo y las funcionalidades se irán anunciando a medida que se completen.",
    "f1.title": "Registro de la mirada", "f1.text": "Adquisición y registro de datos de eye tracking, orientado a capturar la mirada de forma fiable durante las sesiones.",
    "f2.title": "Gestión de sesiones", "f2.text": "Organización y gestión de las sesiones de registro, manteniendo tus datos estructurados y fáciles de encontrar.",
    "f3.title": "Visualización de datos", "f3.text": "Exploración de los datos de la mirada mediante representaciones visuales como fijaciones, trayectorias y mapas de calor.",
    "f4.title": "Análisis de la mirada", "f4.text": "Herramientas y flujos de trabajo para examinar datos de eye tracking y convertirlos en hallazgos con significado.",
    "f5.title": "Flujo orientado a la investigación", "f5.text": "Un entorno unificado diseñado pensando en las necesidades de la investigación, desde la adquisición hasta el análisis.",
    "about.title": "Acerca de EyeTrackIn",
    "about.p1": "EyeTrackIn es un proyecto de software de escritorio centrado en simplificar la adquisición, organización, visualización y análisis de datos de eye tracking.",
    "about.p2": "Está pensado para la investigación: el objetivo es transformar datos de mirada en bruto en información útil, dentro de un entorno único y coherente.",
    "about.p3": "El proyecto está dirigido a investigadores, profesionales, desarrolladores y a cualquier persona interesada en la atención visual y la interacción persona-ordenador.",
    "about.audience": "A quién va dirigido EyeTrackIn",
    "aud.1": "Investigadores", "aud.2": "Profesionales", "aud.3": "Desarrolladores", "aud.4": "Mentes curiosas",
    "community.title": "Conecta con EyeTrackIn",
    "community.intro": "Sigue a EyeTrackIn para conocer novedades del desarrollo, demostraciones del software, tutoriales y contenido sobre eye tracking.",
    "social.on": "{name} en {network} (se abre en una pestaña nueva)",
    "social.soon": "Próximamente",
    "footer.social": "EyeTrackIn en redes sociales",
    "contact.title": "Ponte en contacto",
    "contact.intro": "¿Tienes alguna pregunta sobre el proyecto o te interesa la investigación y las herramientas de eye tracking? Nos encantará saber de ti.",
    "contact.email": "Escríbenos un correo",
    "footer.rights": "Todos los derechos reservados.",
  },
};

let currentLang = CONFIG.defaultLang;

function t(key, params) {
  let text = (I18N[currentLang] && I18N[currentLang][key]) ?? I18N.en[key] ?? key;
  if (params) Object.keys(params).forEach((k) => (text = text.replace(`{${k}}`, params[k])));
  return text;
}

function detectLang() {
  let saved = null;
  try { saved = localStorage.getItem("eyetrackin-lang"); } catch (e) { /* storage unavailable */ }
  if (saved && I18N[saved]) return saved;
  const nav = (navigator.language || "").slice(0, 2).toLowerCase();
  return I18N[nav] ? nav : CONFIG.defaultLang;
}

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.title = t("meta.title");
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", t("meta.desc"));

  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":");
      el.setAttribute(attr.trim(), t(key.trim()));
    });
  });
  document.querySelectorAll('[data-config="status"]').forEach((el) => {
    el.textContent = CONFIG.status[currentLang] || CONFIG.status.en;
  });
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === currentLang));
  });
  syncMenuLabel();
}

function setLang(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  try { localStorage.setItem("eyetrackin-lang", lang); } catch (e) { /* storage unavailable */ }
  applyTranslations();
  renderSocial();
  renderContact();
}

/* 3. Icons ----------------------------------------------------------------- */
/* Simplified, recognisable platform glyphs (24x24 viewBox, currentColor). */
const ICONS = {
  github: '<path fill="currentColor" d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/>',
  youtube: '<rect x="2" y="5" width="20" height="14" rx="4.5" fill="currentColor"/><path d="M10 9.2v5.6l5-2.8z" fill="#07122b"/>',
  reddit: '<ellipse cx="12" cy="14" rx="8" ry="5.5" fill="currentColor"/><circle cx="4.6" cy="11.2" r="2" fill="currentColor"/><circle cx="19.4" cy="11.2" r="2" fill="currentColor"/><circle cx="17.5" cy="4.5" r="1.5" fill="currentColor"/><path d="M12 8.5 13 3l4.5 1.2" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.2" cy="13" r="1.3" fill="#07122b"/><circle cx="14.8" cy="13" r="1.3" fill="#07122b"/><path d="M9.3 16.2c1.5 1 4 1 5.4 0" fill="none" stroke="#07122b" stroke-width="1.2" stroke-linecap="round"/>',
  facebook: '<circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M13.2 21.9v-7.6h2.5l.4-3h-2.9V9.4c0-.9.3-1.4 1.5-1.4h1.5V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.3H8v3h2.3v7.6z" fill="#07122b"/>',
  linkedin: '<rect x="2.5" y="2.5" width="19" height="19" rx="3" fill="currentColor"/><path d="M7 10v7M7 7v.1M11 17v-7M11 13c0-2 1.2-3 2.7-3s2.3 1 2.3 2.8V17" fill="none" stroke="#07122b" stroke-width="2" stroke-linecap="round"/>',
  x: '<path d="M4 4l16 16M20 4 4 20" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>',
  tiktok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.3 2.6 2 4.3 4.5 4.5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
};

const NS = "http://www.w3.org/2000/svg";

/* 4. Rendering ------------------------------------------------------------- */
function visibleNetworks() {
  return CONFIG.social.filter((s) => s.enabled && (s.url || s.soon));
}

function iconSvg(id) {
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.innerHTML = ICONS[id] || "";
  return svg;
}

function externalLink(href, className) {
  const a = document.createElement("a");
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  if (className) a.className = className;
  return a;
}

function networkLabel(s) {
  return t("social.on", { name: CONFIG.projectName, network: s.handle ? `${s.name}, ${s.handle}` : s.name });
}

function socialCard(s) {
  const li = document.createElement("li");
  const card = s.soon ? document.createElement("div") : externalLink(s.url, "social-card");
  if (s.soon) card.className = "social-card is-soon";
  else card.setAttribute("aria-label", networkLabel(s));
  card.dataset.network = s.id;

  const ico = document.createElement("span");
  ico.className = "social-icon";
  ico.appendChild(iconSvg(s.id));

  const text = document.createElement("span");
  text.className = "social-text";
  const name = document.createElement("strong");
  name.textContent = s.name;
  text.appendChild(name);
  if (s.soon || s.handle) {
    const sub = document.createElement("small");
    sub.textContent = s.soon ? t("social.soon") : s.handle;
    text.appendChild(sub);
  }

  card.append(ico, text);
  li.appendChild(card);
  return li;
}

function renderSocial() {
  const networks = visibleNetworks();

  document.querySelectorAll('[data-social-list="community"]').forEach((list) => {
    list.replaceChildren(...networks.map(socialCard));
  });

  document.querySelectorAll('[data-social-list="footer"]').forEach((list) => {
    const items = networks.filter((s) => !s.soon && s.footer !== false).map((s) => {
      const li = document.createElement("li");
      const a = externalLink(s.url, "footer-social-link");
      a.setAttribute("aria-label", networkLabel(s));
      a.title = s.handle ? `${s.name} (${s.handle})` : s.name;
      a.appendChild(iconSvg(s.id));
      li.appendChild(a);
      return li;
    });
    list.replaceChildren(...items);
  });
}

function renderContact() {
  const box = document.getElementById("contact-actions");
  if (!box) return;
  const items = [];

  if (CONFIG.contactEmail) {
    const mail = document.createElement("a");
    mail.className = "btn btn-primary";
    mail.href = `mailto:${CONFIG.contactEmail}`;
    mail.textContent = t("contact.email");
    const addr = document.createElement("span");
    addr.className = "btn-sub";
    addr.textContent = CONFIG.contactEmail;
    mail.appendChild(addr);
    items.push(mail);
  }

  box.replaceChildren(...items);
}

function applyConfig() {
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
  document.querySelectorAll("[data-domain]").forEach((el) => {
    el.href = CONFIG.domain;
    el.textContent = CONFIG.domain.replace(/^https?:\/\//, "");
  });
}

/* 5. Behaviour ------------------------------------------------------------- */
const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.getElementById("primary-nav");

function syncMenuLabel() {
  if (!menuToggle || !primaryNav) return;
  menuToggle.setAttribute("aria-label", t(primaryNav.classList.contains("open") ? "menu.close" : "menu.open"));
}

function setupMenu() {
  if (!menuToggle || !primaryNav) return;

  const setOpen = (open) => {
    menuToggle.setAttribute("aria-expanded", String(open));
    primaryNav.classList.toggle("open", open);
    syncMenuLabel();
  };

  menuToggle.addEventListener("click", () => setOpen(menuToggle.getAttribute("aria-expanded") !== "true"));
  primaryNav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && primaryNav.classList.contains("open")) { setOpen(false); menuToggle.focus(); }
  });
  window.matchMedia("(min-width: 860px)").addEventListener("change", (e) => { if (e.matches) setOpen(false); });
}

function setupLangSwitch() {
  const group = document.querySelector(".lang-switch");
  if (!group) return;
  group.hidden = false;
  group.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-lang]");
    if (btn) setLang(btn.dataset.lang);
  });
}

function setupActiveNav() {
  if (!("IntersectionObserver" in window)) return;
  const links = new Map();
  document.querySelectorAll("#primary-nav a").forEach((a) => links.set(a.getAttribute("href").slice(1), a));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.removeAttribute("aria-current"));
      const link = links.get(entry.target.id);
      if (link) link.setAttribute("aria-current", "true");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  links.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

document.documentElement.classList.add("js");
currentLang = detectLang();
applyConfig();
applyTranslations();
renderSocial();
renderContact();
setupMenu();
setupLangSwitch();
setupActiveNav();
