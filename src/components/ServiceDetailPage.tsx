'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Check, Clock, Send } from 'lucide-react';
import Link from 'next/link';
import { ServiceDetail } from '@/data/services-detail';
import Header from './Header';
import Footer from './Footer';

interface ServiceDetailPageProps {
  service: ServiceDetail;
  locale: 'ru' | 'en';
}

const iconMap: Record<string, any> = {
  Sparkles: require('lucide-react').Sparkles,
  Globe: require('lucide-react').Globe,
  MessageSquare: require('lucide-react').MessageSquare,
  Smartphone: require('lucide-react').Smartphone,
  Brain: require('lucide-react').Brain,
  Wand2: require('lucide-react').Wand2,
};

export default function ServiceDetailPage({ service, locale }: ServiceDetailPageProps) {
  const Icon = iconMap[service.icon];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
              className={`absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-3xl`}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/#services"
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors mb-8"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>{locale === 'ru' ? 'Все услуги' : 'All services'}</span>
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 shadow-xl`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
                  {service.title[locale]}
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {service.subtitle[locale]}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="/#projects"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all"
                  >
                    <span>{locale === 'ru' ? 'Смотреть проекты' : 'View Projects'}</span>
                  </motion.a>

                  <motion.a
                    href="https://t.me/NOENEMY23"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:border-primary-300 transition-all"
                  >
                    <Send className="w-5 h-5" />
                    <span>{locale === 'ru' ? 'Написать в Telegram' : 'Message on Telegram'}</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Right - Timeline */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-display font-bold text-gray-900">
                    {locale === 'ru' ? 'Срок выполнения' : 'Timeline'}
                  </h3>
                </div>
                <p className="text-3xl font-bold text-primary-600 mb-6">
                  {service.timeline[locale]}
                </p>
                <p className="text-gray-600">
                  {locale === 'ru' 
                    ? 'Точные сроки зависят от сложности проекта и ваших требований'
                    : 'Exact timeline depends on project complexity and your requirements'}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-6">
                {locale === 'ru' ? 'Что входит' : 'What\'s Included'}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.description[locale]}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-12"
            >
              {locale === 'ru' ? 'Возможности' : 'Features'}
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features[locale].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-start space-x-3 bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className={`flex-shrink-0 w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center`}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-12"
            >
              {locale === 'ru' ? 'Процесс работы' : 'Work Process'}
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process[locale].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className={`absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white font-bold shadow-lg`}>
                    {index + 1}
                  </div>
                  <p className="text-gray-700 font-medium pt-2">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-12"
            >
              {locale === 'ru' ? 'Что вы получите' : 'What You Get'}
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6">
              {service.deliverables[locale].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-md`}>
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-500 to-accent-500 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
              transition={{ duration: 25, repeat: Infinity }}
              className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
            >
              {locale === 'ru' ? 'Готовы начать проект?' : 'Ready to Start Your Project?'}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/90 mb-10"
            >
              {locale === 'ru' 
                ? 'Свяжитесь со мной в Telegram для обсуждения деталей и получения точной оценки'
                : 'Contact me on Telegram to discuss details and get an accurate estimate'}
            </motion.p>

            <motion.a
              href="https://t.me/NOENEMY23"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 px-10 py-5 bg-white text-primary-600 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
            >
              <Send className="w-6 h-6" />
              <span>{locale === 'ru' ? 'Написать в Telegram' : 'Message on Telegram'}</span>
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
