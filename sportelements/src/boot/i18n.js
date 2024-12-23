import { createI18n } from "vue-i18n";
import messages from "src/i18n";

const i18n = createI18n({
  locale: "en-US",
  globalInjection: true,
  warnHtmlMessage: false,
  messages,
});
export default ({ app }) => {
  const availibleLocales = i18n.global.availableLocales;
  const usersLanguage = window.navigator.language;
  console.log("i18n init", usersLanguage, availibleLocales);
  if (availibleLocales.includes(usersLanguage)) {
    i18n.global.locale.value = usersLanguage;
  } else {
    i18n.global.locale.value = "en-US";
  }
  app.use(i18n);
};

export { i18n };
