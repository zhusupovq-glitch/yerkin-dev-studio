'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Sparkles, Globe, MessageSquare, Smartphone, Brain, Wand2 } from 'lucide-react';

const items = [
  { icon: Sparkles, key: 'item1' },
  { icon: Globe, key: 'item2' },
  { icon: MessageSquare, key: 'item3' },
  { icon: Smartphone, key: 'item4' },
  { icon: Brain, key: 'item5' },
  { icon: Wand2, key: 'item6' },
];

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-700">{t('title')}</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            {t('title')}
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary-500/30">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 leading-snug">
                    {t(`items.${item.key}`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
