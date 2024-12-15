import { FC } from 'react';
import dynamic from 'next/dynamic';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { MainProducts, BrandCard, Banner } from 'src/components/Main';
import { TypeBrand, TypeCategory, TypeProduct } from 'src/types';
const Link = dynamic(() => import('../../components/Link/Link'), {
  ssr: false,
});

type TypeMainPageProps = {
  products: TypeProduct[];
  categories: TypeCategory[];
  brands: TypeBrand[];
};

const MainPage: FC<TypeMainPageProps> = ({
  products = [],
  categories = [],
  brands = [],
}) => {
  return (
    <div>
      <Banner />
      {/* <div className="py-8">
        <Stories />
      </div> */}
      <div className="mx-auto mt-10 flex max-w-[1050px] flex-row justify-between">
        <div className="flex flex-row gap-1">
          <h2 className="text-2xl">Каталог продукции </h2>
          <span className="text-md mb-auto text-black">
            ({categories.length})
          </span>
        </div>
        <Link
          href={`/catalog/`}
          className="mt-1 flex items-center gap-2 text-base font-semibold text-blue-500"
        >
          Смотреть все категории
          <ArrowRightIcon className="h-7 w-7 w-fit rounded bg-[#179C49] p-1 font-bold text-white" />
        </Link>
      </div>
      <div className="mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => {
          const productsByCategory = products.filter(
            (product) => product.category === category.id,
          );

          if (!productsByCategory.length) {
            return null;
          }

          return (
            <section key={category.id} className="mt-4 lg:mt-10">
              <MainProducts category={category} images={category.images} />
            </section>
          );
        })}
      </div>

      {brands.map((brand) => {
        return (
          <section key={brand.id} className="mt-4 lg:mt-10">
            <BrandCard brand={brand} />
          </section>
        );
      })}
    </div>
  );
};

export default MainPage;
