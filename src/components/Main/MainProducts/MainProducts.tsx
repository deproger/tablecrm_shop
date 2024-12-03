import dynamic from 'next/dynamic';
import { FC } from 'react';
import { TypeCategory, TypeProduct } from 'src/types';
import { Card } from 'src/components/Card/Card';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
const Link = dynamic(() => import('../../Link/Link'), { ssr: false });

type TypeMainProducts = {
  category: TypeCategory;
};

const MainProducts: FC<TypeMainProducts> = ({ category }) => {
  return (
    <div className="container">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-6 text-2xl font-bold tracking-tight sm:text-xl lg:py-8">
        <Link
          href={`/catalog/${category.id}`}
          className="mt-1 flex items-center gap-2 text-base font-semibold text-blue-500"
        >
          <p>{category.name}</p>
          <ArrowRightIcon className="h-7 w-7 w-fit rounded bg-[#179C49] p-1 font-bold text-white" />
        </Link>
      </div>
    </div>
  );
};

export { MainProducts };
