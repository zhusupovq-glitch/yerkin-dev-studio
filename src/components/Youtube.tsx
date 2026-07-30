'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Youtube as YoutubeIcon, Play } from 'lucide-react';

export default function Youtube() {
  const t = useTranslations('youtube');

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-red-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-red-50 to-primary-50 rounded-[2.5rem] p-8 lg:p-16 border border-gray-100 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-red-100 rounded-full mb-6"
              >
                <YoutubeIcon className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-red-700">{t('title')}</span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                {t('title')}
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {t('subtitle')}
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                {t('description')}
              </p>

              <motion.a
                href="https://www.youtube.com/@Shirovoid-p6m"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-semibold shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 transition-all"
              >
                <YoutubeIcon className="w-6 h-6" />
                <span>{t('cta')}</span>
              </motion.a>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-video bg-gradient-to-br from-red-400 to-red-600 rounded-3xl shadow-2xl overflow-hidden">
                {/* Play Button */}
                <motion.a
                  href="https://www.youtube.com/@Shirovoid-p6m"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm group cursor-pointer"
                >
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-red-600 ml-1" fill="currentColor" />
                  </div>
                </motion.a>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900">
                    YERKIN Dev Studio
                  </div>
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <YoutubeIcon className="w-5 h-5 text-red-600" />
                  </div>
                </div>

                {/* Bottom stats */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-xl font-bold text-gray-900">20+</div>
                        <div className="text-xs text-gray-600">Videos</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">500+</div>
                        <div className="text-xs text-gray-600">Subscribers</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">10k+</div>
                        <div className="text-xs text-gray-600">Views</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center"
              >
                <YoutubeIcon className="w-8 h-8 text-red-600" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
