import { useQuery } from '@tanstack/react-query';

import { reqProducts } from '@src/api/products';
import { ONE_MINUTE } from '@src/types/enum';

const useProductsQuery = (type: string) => {
  const { data, isLoading } = useQuery(
    ['products', type],
    () => reqProducts(type),

    {
      select: (data) => {
        return [...data, ...data, ...data];
      },
      staleTime: 3 * ONE_MINUTE,
      enabled: !!type,
    }
  );

  return {
    isLoading,
    products: data,
  };
};

export default useProductsQuery;
