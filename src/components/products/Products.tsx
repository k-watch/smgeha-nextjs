import Image from 'next/image';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { green, grey, lightBlue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import { IProduct } from '@src/models/IProduct';

import useProducts from './hooks/useProducts';

const Products = () => {
  const { products, isLoading, slideRef, onMouseDown, onClick } = useProducts();

  return (
    <>
      <Wrap>
        {isLoading ? (
          Array.from(new Array(12)).map((item, index) => (
            <Grid key={index} item spacing={2} lg={3} md={4} sm={6} xs={12}>
              <Skeleton animation="wave" variant="rectangular" height={225} />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" height={23} />
              <Skeleton animation="wave" height={28} />
            </Grid>
          ))
        ) : (
          <Grid container spacing={2}>
            {products && products.length !== 0 ? (
              products.map((product: IProduct) => (
                <Grid key={product.id} item lg={3} md={4} sm={6} xs={6}>
                  <div className="imgWrap" onClick={() => onClick()}>
                    <Image
                      fill
                      sizes="30vw"
                      src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}/images/${product.image}`}
                      alt={product.name}
                    />
                  </div>
                  <div className="contentWrap">
                    <p className="manufacture">{product.manufacture}</p>
                    <p className="title">{product.name}</p>
                    <div
                      className="content"
                      ref={slideRef}
                      onMouseDown={onMouseDown}
                    >
                      <ChipStyle label={product.type} />
                      <ChipStyle label={product.size} />
                    </div>

                    <div className="blockWrap">
                      {product.recommend && <p className="recommend">추천</p>}
                      {product.url && <p className="blog">blog</p>}
                    </div>
                  </div>
                </Grid>
              ))
            ) : (
              <NoContentWrap>
                <Image width={170} height={40} src="/logo.png" alt="logo" />
                <p>찾으시는 결과가 없습니다.</p>
              </NoContentWrap>
            )}
          </Grid>
        )}
      </Wrap>
    </>
  );
};

export default Products;

const ChipStyle = styled(Chip)({
  marginBottom: 6,

  '&.MuiChip-root': {
    height: 22,
    marginRight: 8,
    borderRadius: 19,

    '& .MuiChip-label': {
      padding: '5px 10px',
      fontSize: '0.75rem',
      fontWeight: 600,
      color: `${grey[700]}`,
    },
  },
  '&.MuiChip-filled': {
    border: `1px solid ${grey[400]}`,
    backgroundColor: 'white',
  },
});

const Wrap = styled('div')(() => ({
  display: 'flex',
  position: 'relative',
  margin: '10px 2px',

  '& .imgWrap': {
    position: 'relative',
    marginBottom: 10,
    width: '100%',
    height: 0,
    paddingBottom: '80%',
    overflow: 'hidden',
    borderRadius: 4,

    '& img': {
      width: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      objectFit: 'cover',
      borderRadius: 4,
      transform: 'scale(1.0)',
      transition: '.3s',

      '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.2)',
        transition: '.3s',
      },
    },
  },

  '& .contentWrap': {
    padding: '0 7px',
    '& p': {
      paddingBottom: 7,
    },

    '& .manufacture': {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: `${grey[600]}`,
    },

    '& .title': {
      fontWeight: 500,
    },

    '& .content': {
      overflow: 'auto',
      whiteSpace: 'nowrap',
      overflowX: 'hidden',
    },

    '& .size': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.9375rem',
      color: `${grey[800]}`,
      '& .MuiSvgIcon-root': {
        fontSize: 16,
      },
    },

    '& .blockWrap': {
      display: 'flex',

      '& .recommend': {
        width: 33,
        marginRight: 5,
        padding: 5,
        borderRadius: 5,
        backgroundColor: `${lightBlue[400]}`,
        fontSize: 12,
        color: 'white',
      },

      '& .blog': {
        width: 33,
        padding: 5,
        borderRadius: 5,
        backgroundColor: `${green[500]}`,
        fontSize: 12,
        color: 'white',
      },
    },
  },
}));

const NoContentWrap = styled('div')(() => ({
  margin: '0 auto',
  padding: '85px 0',
  textAlign: 'center',

  '& p': {
    margin: '15px 0',
    fontSize: '1.125rem',
    color: `${grey[700]}`,
  },
}));
