import useRecommendProductsQuery from '../api/useRecommendProductsQuery';

const useRecommendProducts = () => {
  // MUI 반응형에 맞춤
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    initialSlide: 3,
    adaptiveHeight: true,
    className: 'slides',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const onClick = () => {
    // navigate(`product/${id}`);
  };

  const { isLoading, recommendProducts } = useRecommendProductsQuery();

  return { isLoading, recommendProducts, settings, onClick };
};

export default useRecommendProducts;
