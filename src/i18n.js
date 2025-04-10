
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import hi from "./locales/hi.json";
import mr from "./locales/mr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
    mr: { translation: mr }
  },
  lng: "mr", // Default language
  fallbackLng: "mr", // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
>>>>>>> d6d559572a42b37db008aad243eaf5cfee34e04d
