import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale: 'ru',
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/', '/(ru|en)/:path*']
};
