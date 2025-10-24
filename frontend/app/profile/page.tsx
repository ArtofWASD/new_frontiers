'use client';

import { useState } from 'react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Mock user data
  const userData = {
    name: 'Алекс Джонсон',
    email: 'alex.johnson@example.com',
    avatar: 'АД',
    memberSince: '2023-01-15',
    plan: 'Профессиональный',
    apiKey: 'sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    balance: 125.50,
  };

  const transactions = [
    { id: 1, date: '2023-05-10', description: 'Подписка на Профессиональный план', amount: -19.99, status: 'completed' },
    { id: 2, date: '2023-05-05', description: 'Покупка дополнения: Разделение спикеров', amount: -4.99, status: 'completed' },
    { id: 3, date: '2023-05-01', description: 'Бонус за реферала', amount: 10.00, status: 'completed' },
    { id: 4, date: '2023-04-10', description: 'Подписка на Профессиональный план', amount: -19.99, status: 'completed' },
  ];

  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [showApiKey, setShowApiKey] = useState(false);

  const handleSaveProfile = () => {
    // In a real app, you would save this to your backend
    console.log('Saving profile:', { name, email });
    alert('Профиль успешно обновлен!');
  };

  const handleGenerateNewApiKey = () => {
    // In a real app, you would generate a new API key on the backend
    alert('Новый API ключ сгенерирован!');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Настройки аккаунта</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Управление вашим профилем, подпиской и платежной информацией
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'profile'
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                Профиль
              </button>
              <button
                onClick={() => setActiveTab('api')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'api'
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                API ключи
              </button>
              <button
                onClick={() => setActiveTab('billing')}
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                  activeTab === 'billing'
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                Платежи и планы
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Информация профиля</h2>
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-800 dark:text-indigo-400 text-xl font-bold">
                    {userData.avatar}
                  </div>
                  <div className="ml-4">
                    <button className="px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/30 rounded-md hover:bg-indigo-200 dark:hover:bg-indigo-800/30">
                      Изменить аватар
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Полное имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Адрес электронной почты
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Участник с
                    </label>
                    <div className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white">
                      {new Date(userData.memberSince).toLocaleDateString('ru-RU')}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={handleSaveProfile}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
                  >
                    Сохранить изменения
                  </button>
                </div>
              </div>
            )}

            {/* API Keys Tab */}
            {activeTab === 'api' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">API ключи</h2>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Основной API ключ</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Используйте этот ключ для аутентификации с нашим API
                      </p>
                    </div>
                    <button
                      onClick={handleGenerateNewApiKey}
                      className="px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/30 rounded-md hover:bg-indigo-200 dark:hover:bg-indigo-800/30"
                    >
                      Перегенерировать
                    </button>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type={showApiKey ? 'text' : 'password'}
                      value={userData.apiKey}
                      readOnly
                      className="flex-1 rounded-l-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                    <button
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-r-lg hover:bg-gray-300 dark:hover:bg-gray-500"
                    >
                      {showApiKey ? 'Скрыть' : 'Показать'}
                    </button>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-4">Использование API</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">1,248</div>
                      <div className="text-gray-500 dark:text-gray-400">Запросов в этом месяце</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">92%</div>
                      <div className="text-gray-500 dark:text-gray-400">Лимита использовано</div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">2,000</div>
                      <div className="text-gray-500 dark:text-gray-400">Месячный лимит</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Billing & Plans Tab */}
            {activeTab === 'billing' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Платежи и планы</h2>
                
                <div className="mb-8">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-4">Текущий план</h3>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Профессиональный план</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          19,99$/месяц • До 2 часов на файл • Разделение спикеров
                        </p>
                      </div>
                      <button className="px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/30 rounded-md hover:bg-indigo-200 dark:hover:bg-indigo-800/30">
                        Изменить план
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-4">Баланс аккаунта</h3>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">${userData.balance.toFixed(2)}</div>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Баланс кредитов вашего аккаунта. Кредиты автоматически применяются к следующему счету.
                    </p>
                    <button className="mt-4 px-4 py-2 text-sm font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/30 rounded-md hover:bg-indigo-200 dark:hover:bg-indigo-800/30">
                      Пополнить счет
                    </button>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white mb-4">История платежей</h3>
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                      <thead className="bg-gray-50 dark:bg-gray-700">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Дата
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Описание
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Сумма
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Статус
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                        {transactions.map((transaction) => (
                          <tr key={transaction.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                              {new Date(transaction.date).toLocaleDateString('ru-RU')}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                              {transaction.description}
                            </td>
                            <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                              transaction.amount > 0 
                                ? 'text-green-600 dark:text-green-400' 
                                : 'text-gray-900 dark:text-white'
                            }`}>
                              ${transaction.amount.toFixed(2)}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                Завершено
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}