'use client';
import { FC, Fragment } from 'react';
import { Card } from 'src/components/Card/Card';
import { TypeProduct } from 'src/types';

type ProductsListProps = {
  data: TypeProduct[];
};

const ProductsList: FC<ProductsListProps> = ({ data }) => {
  return (
    <div className="grid auto-rows-auto grid-cols-2 overflow-hidden border-l border-t sm:grid-cols-2 md:grid-cols-3 ">
      {data.map((item, index) => (
        <Card data={item} key={index} />
      ))}
    </div>
  );
};

export { ProductsList };
