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
    "identity.quote": "« Étudiant ingénieur en informatique. »",
    "identity.link": "Voir mon parcours →",
    "workshop.title": "Plus de détails →",
    "workshop.description": "Portfolio complet",
    "playground.title": "Mes projets",
    "playground.subtitle": "Expérimentations",
    "playground.yt.desc": "Jeu amélioré par l'IA",
    "playground.gt.title": "Mélangeur de fichiers",
    "playground.gt.desc": "Lecture aléatoire de fichiers audio",
    "tech.current": "Actuellement sur...",
    "social.contact": "Contact",
    "footer.rights": "© 2026",
    "footer.legal": "Mentions légales",
    "footer.contact": "Contact",
    "cv.download": "Télécharger CV",
    "status.label": "Statut",
    "status.open": "Disponible",
    "status.busy": "Occupé",
    "status.offline": "Absent",
    "clock.label": "Heure Locale",
    "clock.status": "En ligne",
  },
  en: {
    "flagship.badge": "Latest version",
    "flagship.title": "Polls & Events",
    "flagship.description":
      "Collaborative event management platform with integrated polling system",
    "flagship.details": "More details →",
    "flagship.visit": "Visit website",
    "cinema.status": "• Now Watching",
    "identity.quote": "“IT Engineering Student.”",
    "identity.link": "View my journey →",
    "workshop.title": "More details →",
    "workshop.description": "Full portfolio",
    "playground.title": "My projects",
    "playground.subtitle": "Experiments",
    "playground.yt.desc": "AI enhanced game",
    "playground.gt.title": "File mixer",
    "playground.gt.desc": "Random audio file player",
    "tech.current": "Currently on...",
    "social.contact": "Contact",
    "footer.rights": "© 2026",
    "footer.legal": "Legal",
    "footer.contact": "Contact",
    "cv.download": "Download CV",
    "status.label": "Status",
    "status.open": "Open to work",
    "status.busy": "Busy",
    "status.offline": "Offline",
    "clock.label": "Local Time",
    "clock.status": "Online",
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
