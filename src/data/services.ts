import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
  benefitsKey: string;
}

export const services: Service[] = [
  {
    id: 'logo-animation',
    icon: 'Sparkles',
    titleKey: 'services.logoAnimation.title',
    descriptionKey: 'services.logoAnimation.description',
    benefitsKey: 'services.logoAnimation.benefits'
  },
  {
    id: 'web-dev',
    icon: 'Globe',
    titleKey: 'services.webDev.title',
    descriptionKey: 'services.webDev.description',
    benefitsKey: 'services.webDev.benefits'
  },
  {
    id: 'telegram-bots',
    icon: 'MessageSquare',
    titleKey: 'services.telegramBots.title',
    descriptionKey: 'services.telegramBots.description',
    benefitsKey: 'services.telegramBots.benefits'
  },
  {
    id: 'mobile-apps',
    icon: 'Smartphone',
    titleKey: 'services.mobileApps.title',
    descriptionKey: 'services.mobileApps.description',
    benefitsKey: 'services.mobileApps.benefits'
  },
  {
    id: 'ai-solutions',
    icon: 'Brain',
    titleKey: 'services.aiSolutions.title',
    descriptionKey: 'services.aiSolutions.description',
    benefitsKey: 'services.aiSolutions.benefits'
  },
  {
    id: 'ui-animation',
    icon: 'Wand2',
    titleKey: 'services.uiAnimation.title',
    descriptionKey: 'services.uiAnimation.description',
    benefitsKey: 'services.uiAnimation.benefits'
  }
];
