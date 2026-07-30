export interface Project {
  id: string;
  title: {
    ru: string;
    en: string;
  };
  description: {
    ru: string;
    en: string;
  };
  image: string;
  youtubeLink: string;
  githubLink?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: {
      ru: 'AI Чат-бот для бизнеса',
      en: 'AI Chatbot for Business'
    },
    description: {
      ru: 'Интеллектуальный Telegram-бот с интеграцией GPT для автоматизации клиентской поддержки',
      en: 'Intelligent Telegram bot with GPT integration for customer support automation'
    },
    image: '/projects/project-1.jpg',
    youtubeLink: 'https://www.youtube.com/@Shirovoid-p6m',
    githubLink: 'https://github.com',
    tags: ['AI', 'Telegram Bot', 'TypeScript', 'OpenAI']
  },
  {
    id: '2',
    title: {
      ru: 'Корпоративный сайт с анимацией',
      en: 'Corporate Website with Animation'
    },
    description: {
      ru: 'Современный корпоративный сайт с премиальными анимациями и адаптивным дизайном',
      en: 'Modern corporate website with premium animations and responsive design'
    },
    image: '/projects/project-2.jpg',
    youtubeLink: 'https://www.youtube.com/@Shirovoid-p6m',
    githubLink: 'https://github.com',
    tags: ['Next.js', 'React', 'Framer Motion', 'TailwindCSS']
  },
  {
    id: '3',
    title: {
      ru: 'Мобильное приложение для доставки',
      en: 'Delivery Mobile App'
    },
    description: {
      ru: 'Кроссплатформенное приложение для сервиса доставки с real-time трекингом',
      en: 'Cross-platform delivery service app with real-time tracking'
    },
    image: '/projects/project-3.jpg',
    youtubeLink: 'https://www.youtube.com/@Shirovoid-p6m',
    tags: ['React Native', 'TypeScript', 'Firebase', 'Maps API']
  }
];
