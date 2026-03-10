export const languages = {
  fr: "Français",
  en: "English",
};

export const defaultLang = "fr";

export const ui = {
  fr: {
    "flagship.badge": "Dernière version",
    "flagship.title": "Sondages & Événements",
    "flagship.description":
      "Plateforme collaborative de gestion d'événements avec système de sondages intégré",
    "flagship.details": "Plus de détails →",
    "flagship.visit": "Visiter le site",
    "cinema.status": "• En cours",
    "identity.quote": "« Développeur d'idées, curieux par nature. »",
    "identity.trait": "Sociable",
    "workshop.title": "Plus de détails →",
    "workshop.description": "Portfolio complet",
    "playground.title": "Mes projets",
    "playground.subtitle": "Expérimentations",
    "playground.yt.desc": "Jeu amélioré par l'IA",
    "playground.gt.title": "Mélangeur de fichiers",
    "playground.gt.desc": "Lecture aléatoire de fichiers audio",
    "tech.title": "Stack Tech",
    "social.contact": "Contact",
    "footer.rights": "© 2026",
    "footer.legal": "Mentions légales",
    "footer.contact": "Contact",
    "cv.download": "Télécharger CV",
    "status.label": "Statut",
    "status.open": "Disponible",
    "status.busy": "Occupé",
    "status.offline": "Absent",
    "visitors.label": "Visiteurs (30j)",
  },
  en: {
    "flagship.badge": "Latest version",
    "flagship.title": "Polls & Events",
    "flagship.description":
      "Collaborative event management platform with integrated polling system",
    "flagship.details": "More details →",
    "flagship.visit": "Visit website",
    "cinema.status": "• Now Watching",
    "identity.quote": "“Developer of ideas, curious by nature.”",
    "identity.trait": "Sociable",
    "workshop.title": "More details →",
    "workshop.description": "Full portfolio",
    "playground.title": "My projects",
    "playground.subtitle": "Experiments",
    "playground.yt.desc": "AI enhanced game",
    "playground.gt.title": "File mixer",
    "playground.gt.desc": "Random audio file player",
    "tech.title": "Tech Stack",
    "social.contact": "Contact",
    "footer.rights": "© 2026",
    "footer.legal": "Legal",
    "footer.contact": "Contact",
    "cv.download": "Download CV",
    "status.label": "Status",
    "status.open": "Open to work",
    "status.busy": "Busy",
    "status.offline": "Offline",
    "visitors.label": "Visitors (30d)",
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
