'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    timeline: string;
    gradient: string;
  };
}

export default function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden pointer-events-auto relative"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Content */}
              <div className="overflow-y-auto max-h-[90vh] p-8 md:p-10">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-8 mb-8 text-white`}>
                  <h2 className="text-3xl font-display font-bold mb-3">
                    {service.title}
                  </h2>
                  <p className="text-white/90 text-lg">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Что входит:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start space-x-3"
                      >
                        <span className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-green-600 text-sm font-bold">✓</span>
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Timeline */}
                <div className="mb-8 bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium">Срок выполнения:</span>
                    <span className="text-xl font-bold text-gray-900">{service.timeline}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#projects"
                    onClick={onClose}
                    className={`flex-1 bg-gradient-to-r ${service.gradient} text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2 group`}
                  >
                    <span>Смотреть проекты</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="https://t.me/yerkindev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 text-white px-6 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-1.945 9.176-2.747 12.174-.34 1.27-.994 1.697-1.633 1.739-.925.084-1.627-.61-2.525-1.198-1.404-.919-2.197-1.492-3.56-2.388-1.576-1.035-.555-1.604.344-2.533.236-.243 4.345-3.984 4.425-4.326.01-.043.02-.201-.075-.285-.096-.084-.237-.055-.339-.032-.144.032-2.443 1.553-6.897 4.564-.653.449-1.244.668-1.773.656-.584-.013-1.707-.33-2.542-.602-.976-.313-1.751-.479-1.683-.948.035-.245.415-.496.76-.739 2.969-1.296 4.947-2.149 5.932-2.56 3.93-1.64 4.746-1.924 5.279-1.932.117-.002.378.027.547.165.143.116.182.272.201.382.018.11.04.36.022.555z"/>
                    </svg>
                    <span>Написать в Telegram</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
