'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [language, setLanguage] = useState('ru');
  const [speakerDiarization, setSpeakerDiarization] = useState(false);
  const [sttProvider, setSttProvider] = useState('openai');

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle file upload and settings submission
    console.log('File:', file);
    console.log('Language:', language);
    console.log('Speaker Diarization:', speakerDiarization);
    console.log('STT Provider:', sttProvider);
    
    // In a real app, you would send this data to your backend
    alert('Файл успешно загружен! Перенаправление на страницу задач...');
    // Redirect to tasks page would happen here
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Загрузить медиа файл</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Загрузите ваш аудио или видео файл и настройте параметры транскрибации
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 mb-8">
          <form onSubmit={handleSubmit}>
            {/* File Upload Area */}
            <div className="mb-8">
              <label className="block text-lg font-medium text-gray-900 dark:text-white mb-4">
                Выберите файл
              </label>
              
              <div 
                className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
                  isDragging 
                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' 
                    : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => document.getElementById('fileInput')?.click()}
              >
                <input
                  id="fileInput"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept="audio/*,video/*"
                />
                
                {file ? (
                  <div className="flex flex-col items-center">
                    <div className="text-4xl mb-4">📄</div>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">{file.name}</p>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">
                      {(file.size / 1024 / 1024).toFixed(2)} МБ
                    </p>
                    <button
                      type="button"
                      className="mt-4 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFile(null);
                      }}
                    >
                      Удалить файл
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="text-4xl mb-4">📁</div>
                    <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Перетащите файл сюда
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      или нажмите для выбора файла
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Поддерживает MP3, WAV, MP4, MOV, AVI и другие аудио/видео форматы
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Transcription Settings */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Настройки транскрибации</h2>
              
              <div className="space-y-6">
                {/* Language Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Язык
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="ru">Русский</option>
                    <option value="en">Английский</option>
                    <option value="es">Испанский</option>
                    <option value="fr">Французский</option>
                    <option value="de">Немецкий</option>
                    <option value="it">Итальянский</option>
                    <option value="pt">Португальский</option>
                    <option value="zh">Китайский</option>
                    <option value="ja">Японский</option>
                    <option value="ko">Корейский</option>
                  </select>
                </div>

                {/* Speaker Diarization */}
                <div className="flex items-center">
                  <input
                    id="speaker-diarization"
                    type="checkbox"
                    checked={speakerDiarization}
                    onChange={(e) => setSpeakerDiarization(e.target.checked)}
                    className="h-5 w-5 text-indigo-600 dark:text-indigo-400 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="speaker-diarization" className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Включить разделение спикеров (Определение разных говорящих)
                  </label>
                </div>

                {/* STT Provider */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Провайдер речи в текст
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        sttProvider === 'openai' 
                          ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' 
                          : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500'
                      }`}
                      onClick={() => setSttProvider('openai')}
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                          <span className="text-green-800 dark:text-green-400 font-bold">O</span>
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-900 dark:text-white">OpenAI Whisper</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Высокая точность</p>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        sttProvider === 'google' 
                          ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' 
                          : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500'
                      }`}
                      onClick={() => setSttProvider('google')}
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <span className="text-blue-800 dark:text-blue-400 font-bold">G</span>
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-900 dark:text-white">Google Speech</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Быстрая обработка</p>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        sttProvider === 'azure' 
                          ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' 
                          : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500'
                      }`}
                      onClick={() => setSttProvider('azure')}
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                          <span className="text-orange-800 dark:text-orange-400 font-bold">A</span>
                        </div>
                        <div className="ml-3">
                          <p className="font-medium text-gray-900 dark:text-white">Azure Speech</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Корпоративный уровень</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-between">
              <Link 
                href="/"
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium"
              >
                Назад
              </Link>
              <button
                type="submit"
                disabled={!file}
                className={`px-6 py-3 rounded-lg font-medium ${
                  file
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
              >
                Начать транскрибацию
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}