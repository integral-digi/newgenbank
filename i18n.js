// i18n.js
import { createIntl, createIntlCache } from 'react-intl';

const messages = {
  en: require('./locales/en.json'), // English messages
  fr: require('./locales/fr.json'), // French messages
  // Add more languages as needed
};

export const languages = Object.keys(messages);

export const cache = createIntlCache();

export const getIntl = locale => createIntl({ locale, messages: messages[locale] }, cache);
