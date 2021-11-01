import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  // Ref: https://github.com/vercel/next.js/discussions/18419#discussioncomment-1561577
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes('/api/') &&
    request.nextUrl.locale === 'default';

  return shouldHandleLocale ? NextResponse.redirect(`/en${request.nextUrl.href}`) : undefined;
}
