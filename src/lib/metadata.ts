import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale });

  return {
    title: 'YERKIN Dev Studio | Modern Web Development & AI Solutions',
    description: t('hero.subtitle'),
    keywords: ['web development', 'AI solutions', 'Telegram bots', 'mobile apps', 'logo animation', 'UI/UX design'],
    authors: [{ name: 'YERKIN Dev Studio' }],
    creator: 'YERKIN Dev Studio',
    publisher: 'YERKIN Dev Studio',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://yerkin.dev'),
    alternates: {
      canonical: '/',
      languages: {
        'ru': '/ru',
        'en': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      url: 'https://yerkin.dev',
      title: 'YERKIN Dev Studio | Modern Web Development & AI Solutions',
      description: t('hero.subtitle'),
      siteName: 'YERKIN Dev Studio',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'YERKIN Dev Studio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'YERKIN Dev Studio | Modern Web Development & AI Solutions',
      description: t('hero.subtitle'),
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    manifest: '/site.webmanifest',
  };
}
