import { useQuery } from '@tanstack/react-query';

import { reqRecommendProducts } from '@src/api/products';
import { ONE_MINUTE } from '@src/types/enum';

const useRecommendProductsQuery = () => {
  const { data, isLoading } = useQuery(
    ['recommendProducts'],
    () => reqRecommendProducts(),
    { staleTime: 3 * ONE_MINUTE }
  );

  return {
    isLoading,
    recommendProducts: data,
  };
};

export default useRecommendProductsQuery;
