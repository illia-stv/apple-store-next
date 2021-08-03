import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {resources} from  './resources/resources'
// import LanguageDetector from 'i18next-browser-languagedetector'
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)



i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  // .use(LanguageDetector) // passes i18n down to react-i18next
  .init({
    resources,
    debug: true,
    fallbackLng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  // function changeLng(lng) {
  //   i18n.changeLanguage(lng);
  // }
  
  // i18n.on('languageChanged', () => {
  //   changeLng();
  // });

  export default i18n;