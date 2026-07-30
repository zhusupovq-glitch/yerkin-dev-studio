'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navigation = ['home', 'services', 'projects', 'process', 'faq', 'contact'];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const switchLocale = (newLocale: string) => {
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}/${path}`);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <div className="relative w-32 h-10">
              <Image
                src="/logo.png"
                alt="YERKIN Dev Studio"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-gray-50"
              >
                {t(item)}
              </motion.button>
            ))}
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => switchLocale('ru')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                  locale === 'ru'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                🇷🇺 RU
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                  locale === 'en'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                🇺🇸 EN
              </button>
            </div>

            <motion.a
              href="https://t.me/NOENEMY23"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-medium shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Telegram</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
              {navigation.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  whileTap={{ scale: 0.95 }}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {t(item)}
                </motion.button>
              ))}

              <div className="pt-4 space-y-3">
                <div className="flex items-center justify-center space-x-2 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => switchLocale('ru')}
                    className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                      locale === 'ru'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600'
                    }`}
                  >
                    🇷🇺 RU
                  </button>
                  <button
                    onClick={() => switchLocale('en')}
                    className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                      locale === 'en'
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600'
                    }`}
                  >
                    🇺🇸 EN
                  </button>
                </div>

                <a
                  href="https://t.me/NOENEMY23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 w-full px-5 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-medium shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
