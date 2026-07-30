export interface ServiceDetail {
  id: string;
  slug: string;
  icon: string;
  gradient: string;
  title: {
    ru: string;
    en: string;
  };
  subtitle: {
    ru: string;
    en: string;
  };
  description: {
    ru: string;
    en: string;
  };
  features: {
    ru: string[];
    en: string[];
  };
  deliverables: {
    ru: string[];
    en: string[];
  };
  timeline: {
    ru: string;
    en: string;
  };
  process: {
    ru: string[];
    en: string[];
  };
}

export const servicesDetail: ServiceDetail[] = [
  {
    id: 'logo-animation',
    slug: 'logo-animation',
    icon: 'Sparkles',
    gradient: 'from-orange-400 to-pink-400',
    title: {
      ru: 'Анимация логотипов',
      en: 'Logo Animation'
    },
    subtitle: {
      ru: 'Создаю современные анимации логотипов для компаний, YouTube-каналов и личных брендов',
      en: 'Creating modern logo animations for companies, YouTube channels and personal brands'
    },
    description: {
      ru: 'Профессиональная анимация вашего логотипа оживит бренд и сделает его запоминающимся. Идеально подходит для видео-контента, презентаций и социальных сетей.',
      en: 'Professional animation of your logo will bring your brand to life and make it memorable. Perfect for video content, presentations and social media.'
    },
    features: {
      ru: [
        '2D Motion Design',
        'Logo Reveal',
        'Intro/Outro для видео',
        'Прозрачный фон (Alpha channel)',
        'Full HD / 4K качество',
        'Несколько вариантов анимации'
      ],
      en: [
        '2D Motion Design',
        'Logo Reveal',
        'Intro/Outro for videos',
        'Transparent background (Alpha channel)',
        'Full HD / 4K quality',
        'Multiple animation variants'
      ]
    },
    deliverables: {
      ru: [
        'Видео файлы в форматах MP4, MOV',
        'Версия с прозрачным фоном',
        'Исходные файлы проекта',
        'Превью в разных разрешениях'
      ],
      en: [
        'Video files in MP4, MOV formats',
        'Version with transparent background',
        'Source project files',
        'Previews in different resolutions'
      ]
    },
    timeline: {
      ru: '1–3 дня',
      en: '1–3 days'
    },
    process: {
      ru: [
        'Обсуждение концепции и стиля',
        'Создание раскадровки',
        'Анимация и эффекты',
        'Рендеринг и финальная доработка'
      ],
      en: [
        'Concept and style discussion',
        'Storyboard creation',
        'Animation and effects',
        'Rendering and final adjustments'
      ]
    }
  },
  {
    id: 'web-development',
    slug: 'web-development',
    icon: 'Globe',
    gradient: 'from-blue-400 to-cyan-400',
    title: {
      ru: 'Разработка сайтов',
      en: 'Website Development'
    },
    subtitle: {
      ru: 'Создаю современные, быстрые и адаптивные веб-сайты для вашего бизнеса',
      en: 'Creating modern, fast and responsive websites for your business'
    },
    description: {
      ru: 'Разрабатываю веб-сайты на современных технологиях с акцентом на производительность, SEO и пользовательский опыт. От лендингов до сложных веб-приложений.',
      en: 'Developing websites on modern technologies with focus on performance, SEO and user experience. From landing pages to complex web applications.'
    },
    features: {
      ru: [
        'Современный стек (Next.js, React, TypeScript)',
        'Адаптивный дизайн',
        'SEO оптимизация',
        'Высокая производительность (Lighthouse 95+)',
        'Премиальные анимации',
        'Интеграция с API и CMS'
      ],
      en: [
        'Modern stack (Next.js, React, TypeScript)',
        'Responsive design',
        'SEO optimization',
        'High performance (Lighthouse 95+)',
        'Premium animations',
        'API and CMS integration'
      ]
    },
    deliverables: {
      ru: [
        'Готовый сайт с исходным кодом',
        'Документация по проекту',
        'Настройка хостинга и домена',
        'Обучение администрированию',
        'Техническая поддержка 1 месяц'
      ],
      en: [
        'Ready website with source code',
        'Project documentation',
        'Hosting and domain setup',
        'Administration training',
        'Technical support for 1 month'
      ]
    },
    timeline: {
      ru: '1–4 недели',
      en: '1–4 weeks'
    },
    process: {
      ru: [
        'Анализ требований и конкурентов',
        'Прототипирование и дизайн',
        'Frontend разработка',
        'Backend и интеграции',
        'Тестирование и деплой'
      ],
      en: [
        'Requirements and competitors analysis',
        'Prototyping and design',
        'Frontend development',
        'Backend and integrations',
        'Testing and deployment'
      ]
    }
  },
  {
    id: 'telegram-bots',
    slug: 'telegram-bots',
    icon: 'MessageSquare',
    gradient: 'from-primary-400 to-accent-400',
    title: {
      ru: 'Telegram-боты',
      en: 'Telegram Bots'
    },
    subtitle: {
      ru: 'Автоматизирую бизнес-процессы через умных Telegram-ботов',
      en: 'Automating business processes through smart Telegram bots'
    },
    description: {
      ru: 'Создаю функциональных Telegram-ботов для автоматизации продаж, поддержки клиентов, управления контентом и внутренних бизнес-процессов.',
      en: 'Creating functional Telegram bots for sales automation, customer support, content management and internal business processes.'
    },
    features: {
      ru: [
        'Прием платежей (Stripe, ЮKassa)',
        'Интеграция с CRM и базами данных',
        'Умные сценарии диалогов',
        'Админ-панель управления',
        'Аналитика и статистика',
        'Рассылки и уведомления'
      ],
      en: [
        'Payment processing (Stripe, YooKassa)',
        'CRM and database integration',
        'Smart dialogue scenarios',
        'Admin control panel',
        'Analytics and statistics',
        'Broadcasts and notifications'
      ]
    },
    deliverables: {
      ru: [
        'Готовый бот с исходным кодом',
        'Админ-панель для управления',
        'База данных и настройка сервера',
        'Документация по использованию',
        'Техническая поддержка'
      ],
      en: [
        'Ready bot with source code',
        'Admin panel for management',
        'Database and server setup',
        'Usage documentation',
        'Technical support'
      ]
    },
    timeline: {
      ru: '5–14 дней',
      en: '5–14 days'
    },
    process: {
      ru: [
        'Определение сценариев и функций',
        'Разработка логики бота',
        'Интеграция с API и базами данных',
        'Тестирование сценариев',
        'Запуск и настройка'
      ],
      en: [
        'Defining scenarios and functions',
        'Bot logic development',
        'API and database integration',
        'Scenario testing',
        'Launch and configuration'
      ]
    }
  },
  {
    id: 'mobile-apps',
    slug: 'mobile-apps',
    icon: 'Smartphone',
    gradient: 'from-purple-400 to-indigo-400',
    title: {
      ru: 'Мобильные приложения',
      en: 'Mobile Applications'
    },
    subtitle: {
      ru: 'Разрабатываю нативные и кроссплатформенные приложения для iOS и Android',
      en: 'Developing native and cross-platform applications for iOS and Android'
    },
    description: {
      ru: 'Создаю мобильные приложения с современным дизайном и высокой производительностью. Использую React Native для кроссплатформенной разработки или нативные технологии для максимальной оптимизации.',
      en: 'Creating mobile applications with modern design and high performance. Using React Native for cross-platform development or native technologies for maximum optimization.'
    },
    features: {
      ru: [
        'iOS и Android приложения',
        'Нативный UX/UI',
        'Push-уведомления',
        'Офлайн режим',
        'Интеграция с API',
        'Аналитика и метрики'
      ],
      en: [
        'iOS and Android apps',
        'Native UX/UI',
        'Push notifications',
        'Offline mode',
        'API integration',
        'Analytics and metrics'
      ]
    },
    deliverables: {
      ru: [
        'Приложения для iOS и Android',
        'Исходный код проекта',
        'Публикация в App Store и Google Play',
        'Документация',
        'Поддержка после запуска'
      ],
      en: [
        'iOS and Android applications',
        'Project source code',
        'App Store and Google Play publishing',
        'Documentation',
        'Post-launch support'
      ]
    },
    timeline: {
      ru: '3–8 недель',
      en: '3–8 weeks'
    },
    process: {
      ru: [
        'Проектирование архитектуры',
        'UI/UX дизайн',
        'Разработка функционала',
        'Тестирование на устройствах',
        'Публикация в сторах'
      ],
      en: [
        'Architecture design',
        'UI/UX design',
        'Feature development',
        'Device testing',
        'Store publishing'
      ]
    }
  },
  {
    id: 'ai-solutions',
    slug: 'ai-solutions',
    icon: 'Brain',
    gradient: 'from-green-400 to-emerald-400',
    title: {
      ru: 'AI-решения',
      en: 'AI Solutions'
    },
    subtitle: {
      ru: 'Интегрирую искусственный интеллект в ваши бизнес-процессы',
      en: 'Integrating artificial intelligence into your business processes'
    },
    description: {
      ru: 'Внедряю AI-технологии для автоматизации рутинных задач, анализа данных, обработки естественного языка и создания умных помощников на базе GPT-4, Claude и других моделей.',
      en: 'Implementing AI technologies for automating routine tasks, data analysis, natural language processing and creating smart assistants based on GPT-4, Claude and other models.'
    },
    features: {
      ru: [
        'Чат-боты на базе GPT-4/Claude',
        'Анализ текста и данных',
        'Генерация контента',
        'Распознавание изображений',
        'Персонализация и рекомендации',
        'Автоматизация процессов'
      ],
      en: [
        'GPT-4/Claude based chatbots',
        'Text and data analysis',
        'Content generation',
        'Image recognition',
        'Personalization and recommendations',
        'Process automation'
      ]
    },
    deliverables: {
      ru: [
        'AI-решение под ключ',
        'Интеграция с вашей системой',
        'Обучение модели на ваших данных',
        'API для интеграции',
        'Документация и обучение'
      ],
      en: [
        'Turnkey AI solution',
        'Integration with your system',
        'Model training on your data',
        'Integration API',
        'Documentation and training'
      ]
    },
    timeline: {
      ru: '1–4 недели',
      en: '1–4 weeks'
    },
    process: {
      ru: [
        'Анализ задачи и выбор модели',
        'Подготовка данных для обучения',
        'Разработка и тестирование',
        'Интеграция с системами',
        'Оптимизация и запуск'
      ],
      en: [
        'Task analysis and model selection',
        'Training data preparation',
        'Development and testing',
        'System integration',
        'Optimization and launch'
      ]
    }
  },
  {
    id: 'ui-animation',
    slug: 'ui-animation',
    icon: 'Wand2',
    gradient: 'from-pink-400 to-rose-400',
    title: {
      ru: 'Анимация интерфейсов',
      en: 'UI Animation'
    },
    subtitle: {
      ru: 'Создаю плавные и привлекательные анимации для улучшения пользовательского опыта',
      en: 'Creating smooth and engaging animations to enhance user experience'
    },
    description: {
      ru: 'Разрабатываю премиальные микро-анимации, переходы и интерактивные элементы, которые делают интерфейс живым и приятным в использовании.',
      en: 'Developing premium micro-animations, transitions and interactive elements that make the interface alive and pleasant to use.'
    },
    features: {
      ru: [
        'Микро-анимации элементов',
        'Переходы между страницами',
        'Hover и click эффекты',
        'Loading анимации',
        'Parallax эффекты',
        'SVG анимации'
      ],
      en: [
        'Element micro-animations',
        'Page transitions',
        'Hover and click effects',
        'Loading animations',
        'Parallax effects',
        'SVG animations'
      ]
    },
    deliverables: {
      ru: [
        'Готовый код анимаций',
        'Библиотека компонентов',
        'Документация по использованию',
        'Примеры интеграции',
        'Исходные файлы'
      ],
      en: [
        'Ready animation code',
        'Component library',
        'Usage documentation',
        'Integration examples',
        'Source files'
      ]
    },
    timeline: {
      ru: '3–10 дней',
      en: '3–10 days'
    },
    process: {
      ru: [
        'Анализ интерфейса и UX',
        'Разработка концепции анимаций',
        'Реализация на Framer Motion/GSAP',
        'Оптимизация производительности',
        'Интеграция и тестирование'
      ],
      en: [
        'Interface and UX analysis',
        'Animation concept development',
        'Implementation in Framer Motion/GSAP',
        'Performance optimization',
        'Integration and testing'
      ]
    }
  }
];
