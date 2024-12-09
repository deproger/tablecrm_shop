'use client';

import { FC, Fragment } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useState } from 'react';
import {
  MagnifyingGlassIcon,
  PhoneIcon,
  UserIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline';

const Link = dynamic(() => import('../../components/Link/Link'), {
  ssr: false,
});

const HeaderCart = dynamic(
  () => import('src/components/HeaderCart/HeaderCart'),
  {
    ssr: false,
  },
);

type MenuCategory = {
  title: string;
  imageSrc: string;
};

const categories: MenuCategory[] = [
  { title: 'Мёд 100%', imageSrc: '/images/honey.png' },
  { title: 'Продукты пчеловодства', imageSrc: '/images/beekeeping.png' },
  { title: 'Сладости Кавказа', imageSrc: '/images/sweets.png' },
  { title: 'Балхам (Бронхо)', imageSrc: '/images/balkham.png' },
  { title: 'Урбеч - паста', imageSrc: '/images/urbech.png' },
  { title: 'Бальзамы (пищевые)', imageSrc: '/images/balsams.png' },
  { title: 'Специи и приправы', imageSrc: '/images/spices.png' },
  { title: 'Сухофрукты, орехи и семена', imageSrc: '/images/dryfruits.png' },
  { title: 'Масло (холодный отжим)', imageSrc: '/images/oil.png' },
  { title: 'Чай и кофе', imageSrc: '/images/tea.png' },
  { title: 'Травы', imageSrc: '/images/herbs.png' },
  { title: 'БАДы', imageSrc: '/images/supplements.png' },
  { title: 'Косметика', imageSrc: '/images/cosmetics.png' },
  { title: 'Наборы', imageSrc: '/images/sets.png' },
  { title: 'Сувениры', imageSrc: '/images/souvenirs.png' },
  { title: 'Шерстяные изделия', imageSrc: '/images/wool.png' },
  { title: 'Без сахара', imageSrc: '/images/nosugar.png' },
  { title: 'Распродажа', imageSrc: '/images/sale.png' },
];

const brands = [
  '/images/brand1.png',
  '/images/brand2.png',
  '/images/brand3.png',
  '/images/brand4.png',
  '/images/brand5.png',
  '/images/brand6.png',
  '/images/brand7.png',
  '/images/brand8.png',
  '/images/brand9.png',
  '/images/brand10.png',
];

const Header: FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Fragment>
      <header className="border-b border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Top Header */}
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="relative flex h-10 w-32 items-center lg:w-40"
              >
                <Image
                  src="/images/Logo.svg"
                  alt="Кавказ Маркет"
                  className="object-contain"
                  fill
                />
              </Link>
              <button
                onClick={() => setMenuIsOpen(!menuIsOpen)}
                className="hidden items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 lg:flex"
              >
                <Bars3Icon className="h-5 w-5" />
                <span className="text-sm font-medium">Каталог</span>
              </button>
            </div>

            {/* Search Bar */}
            <div className="mx-8 flex flex-grow">
              <div className="relative w-full max-w-xl">
                <input
                  type="text"
                  placeholder="Я ищу ..."
                  className="w-full rounded-md border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <MagnifyingGlassIcon className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
              </div>
            </div>

            {/* Contacts and User Info */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-6 w-6 text-green-500" />
                <div>
                  <a
                    href="tel:+79614601241"
                    className="text-nowrap text-sm font-medium"
                  >
                    +7 (961) 460-12-41
                  </a>
                  <p className="text-xs text-gray-500">
                    ежедневно с 09:00 до 18:00
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <UserIcon className="h-6 w-6 text-gray-600" />
                <Link href="/profile" className="text-sm font-medium">
                  Профиль
                </Link>
              </div>
              <div className="flex flex-row items-center gap-2">
                <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
                <div className="flex flex-col gap-1">
                  <Link
                    href="/cart"
                    className="text-nowrap text-sm font-medium"
                  >
                    Корзина (3)
                  </Link>
                  <span className="text-xs text-gray-500">
                    на сумму <span className="text-nowrap">5 200 ₽</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        <div
          className={`container mx-auto px-4 py-6 ${!menuIsOpen && 'hidden'}`}
        >
          <div className="grid grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 rounded-md border border-gray-200 p-4 hover:shadow-md"
              >
                <Image
                  src={category.imageSrc}
                  alt={category.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
                <span className="text-center text-sm font-medium">
                  {category.title}
                </span>
              </div>
            ))}
          </div>
          <h3 className="mb-4 mt-8 text-lg font-bold">Популярные бренды</h3>
          <div className="grid grid-cols-5 gap-4">
            {brands.map((brand, index) => (
              <Image
                key={index}
                src={brand}
                alt={`Brand ${index + 1}`}
                width={80}
                height={40}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export { Header };
