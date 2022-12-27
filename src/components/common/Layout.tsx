import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import Category from '@src/components/category/Category';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Category />
      <S.ChildrenWrap>{children}</S.ChildrenWrap>
      <Footer />
    </>
  );
};

export default Layout;

const S = {
  ChildrenWrap: styled('div')(({ theme }) => ({
    maxWidth: 1900,
    minHeight: '100vh',
    margin: '0 calc(25% - 150px)',
    marginTop: 120,

    [theme.breakpoints.down('sm')]: {
      marginTop: 60,
      margin: '0 20px',
    },
  })),
};
