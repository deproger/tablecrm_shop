import { API_URL, token } from 'src/config/config';

import type { TypeBrand } from 'src/types';
import type { TypeDefaultResData } from '../utils';

/**
 * Fetches a list of brands from the API.
 * @returns A promise that resolves to an object containing the result and count of brands.
 */

export const getBrands = async (): Promise<TypeDefaultResData<TypeBrand>> => {
  try {
    const response = await fetch(`${API_URL}/manufacturers/?token=${token}`);

    // Check if the response is OK (status in the range 200-299)
    if (!response.ok) {
      throw new Error(`Error fetching brands: ${response.statusText}`);
    }

    const data: TypeDefaultResData<TypeBrand> = await response.json();

    return {
      result: data?.result ?? [],
      count: data?.count ?? 0,
    };
  } catch (error) {
    console.error('Error fetching brands:', error);
    return {
      result: [],
      count: 0,
    };
  }
};
