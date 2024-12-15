import dynamic from 'next/dynamic';
import { FC } from 'react';
import { TypeCategory } from 'src/types';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Link = dynamic(() => import('../../Link/Link'), { ssr: false });

type TypeMainProducts = {
  category: TypeCategory;
  images: { default: string; hover: string }; // Объект для хранения картинок
};

const MainProducts: FC<TypeMainProducts> = ({ category, images }) => {
  return (
    <div className="aspect-square max-w-sm">
      <div className="group relative flex flex-col items-center rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg">
        <div className="relative w-full h-40 overflow-hidden rounded-lg">
          {/* Картинка по умолчанию */}
          <img
            src=''
            // src={images.default}
            alt={`${category.name} default`}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          {/* Картинка при наведении */}
          <img
            src=""
            // src={images.hover}
            alt={`${category.name} hover`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
        <div className="mt-4 flex w-full items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">{category.name}</h3>
            <p className="text-sm text-gray-500">{category.description || '3 вида'}</p>
          </div>
          <Link
            href={`/catalog/${category.id}`}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#179C49] text-white transition hover:bg-green-600"
          >
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { MainProducts };
