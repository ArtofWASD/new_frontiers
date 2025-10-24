'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">TranscribeAI</div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/upload" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium">
              Загрузить
            </Link>
            <Link href="/tasks" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium">
              Задачи
            </Link>
            <Link href="/profile" className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium">
              Профиль
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="/auth/login" className="px-4 py-2 text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 font-medium">
              Вход
            </Link>
            <Link 
              href="/auth/register"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              Регистрация
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Транскрибация аудио и видео с помощью ИИ
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Преобразуйте ваш аудио и видео контент в точные текстовые транскрипты с помощью нашего передового ИИ. 
            Идеально подходит для интервью, лекций, подкастов и многого другого.
          </p>
          <Link 
            href="/upload"
            className={`inline-block px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 ${
              isHovered 
                ? 'bg-indigo-700 transform scale-105 shadow-lg' 
                : 'bg-indigo-600 hover:bg-indigo-700'
            } text-white`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Начать транскрибацию
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Мощные возможности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm">
              <div className="text-indigo-600 dark:text-indigo-400 text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Поддержка множества форматов</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Загружайте аудио и видео файлы в различных форматах, включая MP3, WAV, MP4, MOV и другие.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm">
              <div className="text-indigo-600 dark:text-indigo-400 text-4xl mb-4">🗣️</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Разделение спикеров</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Автоматически определяйте и разделяйте разных спикеров в ваших записях.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm">
              <div className="text-indigo-600 dark:text-indigo-400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Быстрая обработка</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Получайте транскрипты за минуты, а не часы, с помощью нашего высокопроизводительного ИИ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Простые цены</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Стартовый</h3>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Бесплатно</div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600 dark:text-gray-300">До 10 минут на файл</li>
                <li className="text-gray-600 dark:text-gray-300">Базовая транскрибация</li>
                <li className="text-gray-600 dark:text-gray-300">Поддержка сообщества</li>
              </ul>
              <button className="w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium">
                Начать
              </button>
            </div>
            <div className="border-2 border-indigo-600 dark:border-indigo-400 rounded-xl p-8 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 dark:bg-indigo-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                Самый популярный
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Профессиональный</h3>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">9$<span className="text-lg">/месяц</span></div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600 dark:text-gray-300">До 2 часов на файл</li>
                <li className="text-gray-600 dark:text-gray-300">Разделение спикеров</li>
                <li className="text-gray-600 dark:text-gray-300">Приоритетная обработка</li>
                <li className="text-gray-600 dark:text-gray-300">Поддержка по email</li>
              </ul>
              <button className="w-full py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600">
                Начать пробный период
              </button>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Корпоративный</h3>
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-6">Индивидуально</div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-600 dark:text-gray-300">Неограниченный размер файлов</li>
                <li className="text-gray-600 dark:text-gray-300">Расширенная аналитика</li>
                <li className="text-gray-600 dark:text-gray-300">Выделенная поддержка</li>
                <li className="text-gray-600 dark:text-gray-300">Пользовательские интеграции</li>
              </ul>
              <button className="w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium">
                Связаться с отделом продаж
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-indigo-400 mb-4">TranscribeAI</div>
              <p className="text-gray-400">
                Передовая ИИ транскрибация для всех ваших аудио и видео нужд.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features" className="hover:text-white">Возможности</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Цены</Link></li>
                <li><Link href="/use-cases" className="hover:text-white">Примеры использования</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/docs" className="hover:text-white">Документация</Link></li>
                <li><Link href="/api" className="hover:text-white">API</Link></li>
                <li><Link href="/support" className="hover:text-white">Поддержка</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">О нас</Link></li>
                <li><Link href="/blog" className="hover:text-white">Блог</Link></li>
                <li><Link href="/contact" className="hover:text-white">Контакты</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2023 TranscribeAI. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}