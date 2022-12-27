import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { dehydrate, QueryClient } from '@tanstack/react-query';

import RecommendProducts from '@src/components/products/RecommendProducts';
import { reqProducts, reqRecommendProducts } from '@src/api/products';
import Products from '@src/components/products/Products';
import { getHeaderCategory } from '@src/api/category';
import { ONE_MINUTE } from '@src/types/enum';

const ProductsPage = () => {
  return (
    <>
      <Head>
        <title>상품목록</title>
      </Head>
      <RecommendProducts />
      <Products />
    </>
  );
};

export default ProductsPage;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const queryClient = new QueryClient();

  const { type } = context.query;

  await Promise.all([
    queryClient.prefetchQuery(
      ['category', 'header'],
      async () => {
        return await getHeaderCategory();
      },
      { staleTime: Infinity }
    ),
    queryClient.prefetchQuery(
      ['recommendProducts'],
      async () => {
        return await reqRecommendProducts();
      },
      { staleTime: 3 * ONE_MINUTE }
    ),
    queryClient.prefetchQuery(['products', type], async () => {
      return await reqProducts(type as string);
    }),
  ]);

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
