'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function Projects() {
  const t = useTranslations('projects');
  const locale = useLocale() as 'ru' | 'en';

  return (
    <section id="projects" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl" />

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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-56 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-display font-bold text-white/20">
                    {project.id}
                  </div>
                </div>
                {/* Placeholder for actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {project.title[locale]}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description[locale]}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-medium shadow-md hover:shadow-lg transition-all"
                  >
                    <Play className="w-4 h-4" />
                    <span className="text-sm">{t('watchOnYoutube')}</span>
                  </motion.a>

                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-11 h-11 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
