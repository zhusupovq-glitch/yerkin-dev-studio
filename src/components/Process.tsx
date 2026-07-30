'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, Palette, Code2, TestTube, Rocket } from 'lucide-react';

const steps = [
  { id: 'discussion', icon: MessageCircle, color: 'from-blue-400 to-cyan-400' },
  { id: 'planning', icon: FileText, color: 'from-purple-400 to-indigo-400' },
  { id: 'design', icon: Palette, color: 'from-pink-400 to-rose-400' },
  { id: 'development', icon: Code2, color: 'from-primary-400 to-accent-400' },
  { id: 'testing', icon: TestTube, color: 'from-green-400 to-emerald-400' },
  { id: 'delivery', icon: Rocket, color: 'from-orange-400 to-red-400' },
];

export default function Process() {
  const t = useTranslations('process');

  return (
    <section id="process" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-100/20 rounded-full blur-3xl" />
      </div>

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

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (mobile) */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-accent-200 to-primary-200 lg:hidden" />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  {/* Desktop Layout */}
                  <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content (left on even, right on odd) */}
                    {isEven ? (
                      <>
                        <motion.div
                          whileHover={{ x: -10 }}
                          className="text-right"
                        >
                          <div className="inline-block bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                              {t(`steps.${step.id}.title`)}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {t(`steps.${step.id}.description`)}
                            </p>
                          </div>
                        </motion.div>

                        {/* Icon */}
                        <div className="flex justify-start">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                          >
                            <Icon className="w-10 h-10 text-white" />
                          </motion.div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Icon */}
                        <div className="flex justify-end">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                          >
                            <Icon className="w-10 h-10 text-white" />
                          </motion.div>
                        </div>

                        <motion.div
                          whileHover={{ x: 10 }}
                          className="text-left"
                        >
                          <div className="inline-block bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                              {t(`steps.${step.id}.title`)}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {t(`steps.${step.id}.description`)}
                            </p>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="flex items-start space-x-6 lg:hidden">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-xl z-10`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                        {t(`steps.${step.id}.title`)}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {t(`steps.${step.id}.description`)}
                      </p>
                    </div>
                  </div>

                  {/* Step Number */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                    className="absolute -top-4 left-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-20"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Center Line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-accent-200 to-primary-200 transform -translate-x-1/2" />
        </div>
      </div>
    </section>
  );
}
