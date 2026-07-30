'use client';

import { useTranslations } from 'next-intl';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight, Send, Code, Sparkles, Brain, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const t = useTranslations('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-primary-200/40 to-accent-200/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-accent-200/40 to-primary-300/40 rounded-full blur-3xl"
        />

        {/* Floating Shapes */}
        <motion.div
          style={{
            x: useTransform(useMotionValue(mousePosition.x), [0, dimensions.width], [-20, 20]),
            y: useTransform(useMotionValue(mousePosition.y), [0, dimensions.height], [-20, 20]),
          }}
          className="absolute top-1/3 left-1/4"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-4 h-4 bg-primary-400/30 rounded-full"
          />
        </motion.div>

        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 right-1/3"
        >
          <div className="w-3 h-3 bg-accent-400/30 rounded-full" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 left-1/3"
        >
          <div className="w-2 h-2 bg-primary-500/30 rounded-full" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100/80 backdrop-blur-sm rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">YERKIN Dev Studio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight"
            >
              {t('title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={scrollToProjects}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-2xl font-semibold shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-primary-500/40 transition-all"
              >
                <span>{t('cta1')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="https://t.me/NOENEMY23"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:border-primary-300 transition-all"
              >
                <Send className="w-5 h-5" />
                <span>{t('cta2')}</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px]">
              {/* Central Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 opacity-20 blur-2xl" />
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-12 left-12 w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center"
              >
                <Code className="w-10 h-10 text-primary-500" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-12 right-12 w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center"
              >
                <Brain className="w-10 h-10 text-accent-500" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-12 left-20 w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center"
              >
                <Smartphone className="w-10 h-10 text-primary-600" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                className="absolute bottom-12 right-20 w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center"
              >
                <Sparkles className="w-10 h-10 text-accent-600" />
              </motion.div>

              {/* Center Logo Area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-48 h-48 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl shadow-2xl flex items-center justify-center"
                >
                  <span className="text-6xl font-display font-bold text-white">YD</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
