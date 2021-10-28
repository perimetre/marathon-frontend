import flatten from 'flat';
import en from '../../../locales/en.json';
import fr from '../../../locales/fr.json';
import env from '../../env';

export type LocaleEnum = 'en' | 'fr';

export type Translation = {
  [key in LocaleEnum]: { [key: string]: string };
};

// A map that converts our locale code to the respective dayjs locale code
export const dayjsLocaleMap = {
  en: 'en-ca',
  fr: 'fr-ca'
};

export const unflattennedLocales = {
  en,
  fr
};

export const defaultLocale = () => (env().NEXT_PUBLIC_DEFAULT_LOCALE || 'en') as LocaleEnum;

const locales: Translation = {
  en: flatten(en),
  fr: flatten(fr)
};

export default locales;