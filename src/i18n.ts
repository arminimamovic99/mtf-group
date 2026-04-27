import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import bsCommon from "@/locales/bs/common.json"
import deCommon from "@/locales/de/common.json"
import enCommon from "@/locales/en/common.json"

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      bs: { common: bsCommon },
      en: { common: enCommon },
      de: { common: deCommon },
    },
    lng: "bs",
    fallbackLng: "bs",
    supportedLngs: ["bs", "en", "de"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
  })

export default i18n
