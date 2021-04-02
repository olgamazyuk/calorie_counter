import en from '../locales/en.locale.json';
import ru from '../locales/ru.locale.json';
import { getLangCode } from './LocalStorageService';

export const translations = {
  en,
  ru,
};

const ENGLISH = 'en';

export let langCode = getLangCode() || ENGLISH;

if (!Object.keys(translations).includes(langCode)) {
  langCode = ENGLISH;
}

window.i18nData = translations[langCode];

window.changeLanguage = (language) => {
  window.i18nData = translations[language];
}

export const t = (string) => {
  return window.i18nData[string] || string;
};