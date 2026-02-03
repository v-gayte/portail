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
    "cinema.status": "• En cours",
    "identity.quote": "« Développeur d'idées, curieux par nature. »",
    "identity.trait": "Sociable",
    "workshop.title": "Plus de détails →",
    "workshop.description": "Portfolio complet",
    "playground.title": "Mes projets",
    "playground.subtitle": "Expérimentations",
    "playground.yt.desc": "Jeu améliorer par IA",
    "playground.gt.title": "Mélangeur de fichiers",
    "playground.gt.desc": "La lecture aléatoire de fichiers audio",
    "tech.title": "Stack Tech",
    "social.contact": "Contact",
    "footer.rights": "© 2026",
    "footer.legal": "Mentions légales",
    "footer.contact": "Contact",
  },
  en: {
    "flagship.badge": "Latest version",
    "flagship.title": "Polls & Events",
    "flagship.description":
      "Collaborative event management platform with integrated polling system",
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
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
