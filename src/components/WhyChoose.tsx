'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Zap, MessageCircle, FileCode, Smartphone as SmartphoneIcon, Brain, Sparkles, HeadphonesIcon } from 'lucide-react';

const features = [
  { id: 'modernTech', icon: Zap, gradient: 'from-blue-400 to-cyan-400' },
  { id: 'fastCommunication', icon: MessageCircle, gradient: 'from-green-400 to-emerald-400' },
  { id: 'cleanCode', icon: FileCode, gradient: 'from-purple-400 to-indigo-400' },
  { id: 'responsive', icon: SmartphoneIcon, gradient: 'from-pink-400 to-rose-400' },
  { id: 'aiIntegration', icon: Brain, gradient: 'from-orange-400 to-red-400' },
  { id: 'qualityAnimation', icon: Sparkles, gradient: 'from-primary-400 to-accent-400' },
  { id: 'longTermSupport', icon: HeadphonesIcon, gradient: 'from-indigo-400 to-purple-400' },
];

export default function WhyChoose() {
  const t = useTranslations('whyChoose');

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-100/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                  {t(`${feature.id}.title`)}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`${feature.id}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
