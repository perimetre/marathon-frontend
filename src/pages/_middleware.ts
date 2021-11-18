import { NextRequest, NextResponse } from 'next/server';
import { dayjsLocaleMap, defaultLocale } from '../lib/locale';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  let LANG = request.cookies.NEXT_LOCALE || defaultLocale();
  const { pathname, href, locale } = request.nextUrl;

  // Check if we have the locale
  // Using dayjs locale map just so it's smaller and it serves the same purpose.
  // The real locales might load the entire locale json
  if (!Object.keys(dayjsLocaleMap).includes(LANG)) {
    LANG = defaultLocale();
  }

  // Ref: https://github.com/vercel/next.js/discussions/18419#discussioncomment-1663807
  const shouldHandleLocale = !PUBLIC_FILE.test(pathname) && !pathname.includes('/api/') && locale === 'default';

  return shouldHandleLocale ? NextResponse.redirect(`/${LANG}${pathname + href.split(pathname)[1]}`) : undefined;
}
