const GET_LANG_CODE = localStorage.getItem('langCode');
const SET_LANG_CODE = (langCode) => localStorage.setItem('langCode', langCode);

export const getLangCode = () => {
  return GET_LANG_CODE;
};

export const setLangCode = (langCode) => {
  SET_LANG_CODE(langCode);
};
