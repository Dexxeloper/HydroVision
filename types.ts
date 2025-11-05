
export type Language = 'ru' | 'en';

export type Page = 'home' | 'about' | 'services' | 'projects' | 'contact';

export interface Translations {
  [key: string]: {
    ru: string;
    en: string;
  };
}
