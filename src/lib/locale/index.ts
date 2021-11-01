import flatten from 'flat';
import en from '../../../locales/en.json';
// import fr from '../../../locales/fr.json';
import env from '../../env';
import { shouldPolyfill } from '@formatjs/intl-pluralrules/should-polyfill';

export type LocaleEnum = 'en' /*| 'fr'*/;

export type Translation = {
  [key in LocaleEnum]: { [key: string]: string };
};

// A map that converts our locale code to the respective dayjs locale code
export const dayjsLocaleMap = {
  en: 'en-ca'
  // fr: 'fr-ca'
};

export const unflattennedLocales = {
  en
  // fr
};

export const defaultLocale = () => (env().NEXT_PUBLIC_DEFAULT_LOCALE || 'en') as LocaleEnum;

const locales: Translation = {
  en: flatten(en)
  // fr: flatten(fr)
};

export const localePolyfill = async (locale: LocaleEnum) => {
  if (!shouldPolyfill(locale)) {
    return;
  }
  // Load the polyfill 1st BEFORE loading data
  await import('@formatjs/intl-pluralrules/polyfill');

  switch (locale) {
    default:
      await import('@formatjs/intl-pluralrules/locale-data/en');
      break;
    // case 'fr':
    //   await import('@formatjs/intl-pluralrules/locale-data/fr');
    //   break;
  }
};

export default locales;
