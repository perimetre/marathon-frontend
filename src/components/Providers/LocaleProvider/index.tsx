import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';
import locales, { defaultLocale, LocaleEnum, dayjsLocaleMap, localePolyfill } from '../../../lib/locale';
import { LOCALE_NAME } from '../../../constraints';
import { setCookie } from '../../../lib/cookie';

type LocaleContext = {
  /**
   * The current locale the user is at
   */
  locale: LocaleEnum;
  /**
   * The current locale for the dayjs
   */
  dayjsLocale: string;
  hasProvider: boolean;
};

const initialState: LocaleContext = {
  locale: defaultLocale(),
  dayjsLocale: dayjsLocaleMap[defaultLocale()],
  hasProvider: false
};

const LocaleContext = React.createContext<LocaleContext>(initialState);

/**
 * The Locale provider for its react context
 */
export const LocaleProvider: React.FC = ({ children }) => {
  // Get the locale
  const { locale: routerLocale } = useRouter();
  const locale = useMemo(
    () => (routerLocale && locales[routerLocale] ? routerLocale : initialState.locale) as LocaleEnum,
    [routerLocale]
  );

  const [dayjsLocale, setDayjsLocale] = useState<LocaleContext['dayjsLocale']>(dayjsLocaleMap[locale]);

  useEffect(() => {
    if (locale) {
      setCookie(LOCALE_NAME, locale);
    }

    const updateDayJsLocale = async () => {
      const newDayjsLocale = dayjsLocaleMap[locale];

      if (locale && newDayjsLocale && newDayjsLocale !== dayjsLocale) {
        // Just requires the locale which will add it to the available locale list.
        // Which then will update all usages of "useLocalizedDayjs"
        // We do it here instead of the dayjs local
        await import(`dayjs/locale/${newDayjsLocale}.js`);

        // This will update the locale globally, and the hook will update all instances by returning a new instance
        dayjs.locale(newDayjsLocale);

        setDayjsLocale(newDayjsLocale);
      }
    };

    updateDayJsLocale();
  }, [dayjsLocale, locale]);

  useEffect(() => {
    localePolyfill(locale);
  }, [locale]);

  const messages = useMemo(() => locales[locale], [locale]);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <LocaleContext.Provider
        value={{
          hasProvider: true,
          locale,
          dayjsLocale
        }}
      >
        {children}
      </LocaleContext.Provider>
    </IntlProvider>
  );
};

export const useLocaleContext = () => useContext(LocaleContext);

/**
 * A hook that returns the current locale
 */
export const useLocale = () => {
  const { locale } = useLocaleContext();
  return useMemo(() => locale, [locale]);
};

/**
 * A hook that returns the current locale for dayjs
 */
export const useDayjsLocale = () => {
  const { dayjsLocale } = useLocaleContext();
  return useMemo(() => dayjsLocale, [dayjsLocale]);
};
