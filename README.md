# YERKIN Dev Studio

Премиальный портфолио сайт для цифровой студии.

## 🚀 Технологии

- **Next.js 14** - App Router
- **TypeScript** - Типобезопасность
- **TailwindCSS** - Стилизация
- **Framer Motion** - Анимации
- **next-intl** - Интернационализация (RU/EN)
- **React Hook Form + Zod** - Формы и валидация
- **Lucide Icons** - Иконки

## 📦 Установка

```bash
# Установить зависимости
npm install

# Запустить dev сервер
npm run dev

# Или использовать батник
start.bat
```

## 🌐 Локальный запуск

После запуска сайт будет доступен по адресу: **http://localhost:3000**

## 🏗️ Структура проекта

```
yerkin-dev-studio/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── Projects.tsx
│   │   ├── Youtube.tsx
│   │   ├── WhyChoose.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   └── services.ts
│   ├── messages/
│   │   ├── ru.json
│   │   └── en.json
│   ├── lib/
│   │   └── metadata.ts
│   ├── i18n.ts
│   └── middleware.ts
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── start.bat
└── package.json
```

## ✨ Основные секции

1. **Hero** - Привлекательная вводная секция с анимациями
2. **About** - Представление студии
3. **Services** - 6 основных услуг
4. **Process** - Этапы работы (timeline)
5. **Projects** - Портфолио работ
6. **YouTube** - Канал с обзорами проектов
7. **Why Choose** - Преимущества студии
8. **FAQ** - Часто задаваемые вопросы
9. **Contact** - Форма обратной связи + Telegram
10. **Footer** - Навигация и контакты

## 🎨 Дизайн

- Светлая премиальная тема
- Мягкие градиенты (голубой + синий)
- Плавные анимации на Framer Motion
- Адаптивный дизайн (mobile-first)
- Премиальные тени и эффекты

## 🌍 Языки

- 🇷🇺 Русский (по умолчанию)
- 🇺🇸 English

## 📝 Добавление контента

### Добавить новый проект

Отредактируйте `src/data/projects.ts`:

```typescript
{
  id: '4',
  title: { ru: 'Название', en: 'Title' },
  description: { ru: 'Описание', en: 'Description' },
  image: '/projects/project-4.jpg',
  youtubeLink: 'https://youtube.com/...',
  githubLink: 'https://github.com/...',
  tags: ['React', 'TypeScript']
}
```

## 🔗 Контакты

- **Telegram**: [@NOENEMY23](https://t.me/NOENEMY23)
- **YouTube**: [@Shirovoid-p6m](https://www.youtube.com/@Shirovoid-p6m)

## 📄 Лицензия

© 2026 YERKIN Dev Studio. All rights reserved.
