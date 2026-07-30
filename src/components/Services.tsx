'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Sparkles, Globe, MessageSquare, Smartphone, Brain, Wand2, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ServiceModal from './ServiceModal';
import { servicesDetail } from '@/data/services-detail';

const iconMap: Record<string, any> = {
  Sparkles,
  Globe,
  MessageSquare,
  Smartphone,
  Brain,
  Wand2,
};

const services = [
  { id: 'logoAnimation', slug: 'logo-animation', icon: 'Sparkles', gradient: 'from-orange-400 to-pink-400' },
  { id: 'webDev', slug: 'web-development', icon: 'Globe', gradient: 'from-blue-400 to-cyan-400' },
  { id: 'telegramBots', slug: 'telegram-bots', icon: 'MessageSquare', gradient: 'from-primary-400 to-accent-400' },
  { id: 'mobileApps', slug: 'mobile-apps', icon: 'Smartphone', gradient: 'from-purple-400 to-indigo-400' },
  { id: 'aiSolutions', slug: 'ai-solutions', icon: 'Brain', gradient: 'from-green-400 to-emerald-400' },
  { id: 'uiAnimation', slug: 'ui-animation', icon: 'Wand2', gradient: 'from-pink-400 to-rose-400' },
];

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -z-10" />

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

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                    {t(`${service.id}.title`)}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t(`${service.id}.description`)}
                  </p>

                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-semibold text-primary-600">✓</span> {t(`${service.id}.benefits`)}
                    </p>
                  </div>

                  {/* CTA */}
                  <motion.div
                    onClick={() => setSelectedService(service.slug)}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-primary-600 font-semibold group-hover:text-primary-700 transition-colors cursor-pointer"
                  >
                    <span>{t('cta')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (() => {
        const serviceDetail = servicesDetail.find(s => s.slug === selectedService);
        if (!serviceDetail) return null;

        return (
          <ServiceModal
            isOpen={true}
            onClose={() => setSelectedService(null)}
            service={{
              title: locale === 'ru' ? serviceDetail.title.ru : serviceDetail.title.en,
              subtitle: locale === 'ru' ? serviceDetail.subtitle.ru : serviceDetail.subtitle.en,
              description: locale === 'ru' ? serviceDetail.description.ru : serviceDetail.description.en,
              features: locale === 'ru' ? serviceDetail.features.ru : serviceDetail.features.en,
              timeline: locale === 'ru' ? serviceDetail.timeline.ru : serviceDetail.timeline.en,
              gradient: serviceDetail.gradient,
            }}
          />
        );
      })()}
    </section>
  );
}
