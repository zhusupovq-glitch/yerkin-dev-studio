'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Send, Youtube, Github, Mail } from 'lucide-react';
import Image from 'next/image';

const navigation = ['home', 'services', 'projects', 'process', 'faq', 'contact'];

export default function Footer() {
  const t = useTranslations();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-40 h-12 mb-6 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <Image
                src="/logo.png"
                alt="YERKIN Dev Studio"
                fill
                className="object-contain"
              />
            </motion.div>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://t.me/NOENEMY23"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors shadow-md"
              >
                <Send className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@Shirovoid-p6m"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-red-600 hover:bg-red-50 transition-colors shadow-md"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              {t('footer.navigation')}
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                  >
                    {t(`nav.${item}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              {t('footer.social')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://t.me/NOENEMY23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors text-sm flex items-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@Shirovoid-p6m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600 transition-colors text-sm flex items-center space-x-2"
                >
                  <Youtube className="w-4 h-4" />
                  <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>Made with ❤️ by YERKIN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
