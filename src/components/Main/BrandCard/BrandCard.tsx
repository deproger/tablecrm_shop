import dynamic from 'next/dynamic';
import { FC } from 'react';
import { TypeBrand } from 'src/types';

// Dynamically import the Link component with server-side rendering disabled
const Link = dynamic(() => import('../../Link/Link'), { ssr: false });

// Define the type for the props that this component will receive
type TypeBrandCard = {
  brand: TypeBrand; // The brand to display
};

// Create the MainBrands component
const BrandCard: FC<TypeBrandCard> = ({ brand }) => {
  return (
    <div className="container">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 py-6 text-2xl font-bold tracking-tight sm:text-xl lg:py-8">
        <Link
          href={`/catalog/brands/${brand.id}`} // Link to the brand's page
          className="mt-1 flex items-center gap-2 text-base font-semibold text-blue-500"
        >
          {brand.name} {/* Display the brand name */}
        </Link>
      </div>
    </div>
  );
};

// Export the MainBrands component for use in other parts of the application
export { BrandCard };
