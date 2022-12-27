import { useRouter } from 'next/router';

import { useRef, useMemo } from 'react';

import useDraggableScroll from 'use-draggable-scroll';
import useProductsQuery from '../api/useProductsQuery';

const useProducts = () => {
  const router = useRouter();
  const type: string | undefined = useMemo(() => {
    if (router.query) {
      return router.query.type as string;
    }
  }, [router.query]);

  const { isLoading, products } = useProductsQuery(type as string);

  const onClick = () => {
    // navigate(`/product/${id}`);
  };

  // 제품 칩 데이터 가로 스크롤
  const slideRef = useRef(null);
  const { onMouseDown } = useDraggableScroll(slideRef, {
    direction: 'horizontal',
  });

  return {
    isLoading,
    products,
    slideRef,
    onMouseDown,
    onClick,
  };
};

export default useProducts;
