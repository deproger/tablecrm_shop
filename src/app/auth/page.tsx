'use client';
import { useState } from 'react';

const Auth = () => {
  const [phone, setPhone] = useState('');
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-lg border border-gray-300 bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-semibold text-gray-800">
          Вход
        </h2>
        <form className="space-y-4">
          {/* Поле для ввода номера телефона */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-gray-600"
            >
              Номер телефона
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+7 (___) ___-__-__"
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-green-500 focus:ring-green-500"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          {/* Кнопка отправки */}
          <button
            type="submit"
            className="w-full rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
