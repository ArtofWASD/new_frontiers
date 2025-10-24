'use client';

import Link from 'next/link';
import { useState } from 'react';

// Mock data for a specific task
const mockTask = {
  id: '1',
  filename: 'interview-recording.mp4',
  status: 'completed',
  duration: '15:32',
  createdAt: '2023-05-15T10:30:00Z',
  completedAt: '2023-05-15T10:45:00Z',
  transcript: `Интервьюер: Доброе утро, спасибо что присоединились к нам сегодня. Можете начать с рассказа немного о себе и вашем опыте?

Гость: Доброе утро, и спасибо что пригласили меня. Я работаю в IT-индустрии более 15 лет, в основном сосредотачиваясь на искусственном интеллекте и машинном обучении. Я начал свою карьеру в небольшой стартап компании и в конечном итоге перешел в более крупные компании, где возглавлял команды, разрабатывающие инновационные решения ИИ.

Интервьюер: Это увлекательно. Какой проект вы считаете наиболее сложным, над которым работали?

Гость: Определенно разработка нашей системы обработки естественного языка. Это требовало координации нескольких команд из разных отделов и интеграции передовых исследований с практическими приложениями. Были моменты, когда мы не были уверены, сможем ли мы преодолеть определенные технические препятствия, но настойчивость окупилась.

Интервьюер: Как вы видите развитие ИИ в ближайшие пять лет?

Гость: Я считаю, что мы увидим значительные достижения в способности ИИ понимать и генерировать человеческий язык. Мы уже видим впечатляющие результаты с большими языковыми моделями, но я думаю, что следующий рубеж будет в том, чтобы сделать системы ИИ более надежными, интерпретируемыми и согласованными с человеческими ценностями.

Интервьюер: Большое спасибо за ваши идеи сегодня. Есть ли что-нибудь еще, что вы хотели бы поделиться с нашей аудиторией?

Гость: Просто то, что область ИИ развивается невероятно быстро, и есть возможности для людей из всех сфер внести свой вклад. Независимо от того, являетесь ли вы разработчиком, исследователем, этиком или дизайнером, у вас есть место в формировании будущего этой технологии.`,
};

export default function TaskDetailPage({ params }: { params: { id: string } }) {
  const [transcript, setTranscript] = useState(mockTask.transcript);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTranscript, setEditedTranscript] = useState(mockTask.transcript);

  const handleSave = () => {
    setTranscript(editedTranscript);
    setIsEditing(false);
    // In a real app, you would save this to your backend
    console.log('Saved transcript:', editedTranscript);
  };

  const exportTranscript = (format: string) => {
    // In a real app, this would trigger a backend export
    alert(`Экспорт транскрипта в формате ${format.toUpperCase()}...`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/tasks"
            className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 mb-4"
          >
            ← Назад к задачам
          </Link>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{mockTask.filename}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  Завершено
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  Длительность: {mockTask.duration}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  Создано: {new Date(mockTask.createdAt).toLocaleDateString('ru-RU')}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => exportTranscript('txt')}
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Экспорт TXT
              </button>
              <button
                onClick={() => exportTranscript('docx')}
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Экспорт DOCX
              </button>
              <button
                onClick={() => exportTranscript('pdf')}
                className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Экспорт PDF
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Media Player */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Медиа плеер</h2>
            <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">▶️</div>
                <p className="text-gray-500 dark:text-gray-400">Аудио/Видео плеер</p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                  Здесь будут элементы управления воспроизведением в реальной реализации
                </p>
              </div>
            </div>
            <div className="mt-4">
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 dark:bg-indigo-500 w-1/3"></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-2">
                <span>00:00</span>
                <span>{mockTask.duration}</span>
              </div>
            </div>
          </div>

          {/* Transcript Editor */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Транскрипт</h2>
              {isEditing ? (
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  >
                    Отмена
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                  >
                    Сохранить изменения
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setEditedTranscript(transcript);
                    setIsEditing(true);
                  }}
                  className="px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/30 rounded-md hover:bg-indigo-200 dark:hover:bg-indigo-800/30"
                >
                  Редактировать транскрипт
                </button>
              )}
            </div>
            
            <div className="p-6">
              {isEditing ? (
                <textarea
                  value={editedTranscript}
                  onChange={(e) => setEditedTranscript(e.target.value)}
                  className="w-full h-96 p-4 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Редактируйте ваш транскрипт здесь..."
                />
              ) : (
                <div className="prose prose-gray dark:prose-invert max-w-none bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg">
                  <pre className="whitespace-pre-wrap font-sans text-gray-900 dark:text-gray-100">
                    {transcript}
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Additional Actions */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Дополнительные действия</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <div className="text-2xl mb-2">🔁</div>
              <span className="font-medium text-gray-900 dark:text-white">Переобработать</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">Запустить транскрибацию снова</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <div className="text-2xl mb-2">🤖</div>
              <span className="font-medium text-gray-900 dark:text-white">Улучшить ИИ</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">Повысить качество транскрипта</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <div className="text-2xl mb-2">🗑️</div>
              <span className="font-medium text-gray-900 dark:text-white">Удалить</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">Удалить эту задачу</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}