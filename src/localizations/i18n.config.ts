import i18n from "i18next";
import "intl-pluralrules"
import { initReactI18next } from "react-i18next";
import en from "./en";
import hi from "./hi";

const resources = {
  en: {
    translation: en,
  },
  hi: {
    translation: hi,
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
});

export default i18n;