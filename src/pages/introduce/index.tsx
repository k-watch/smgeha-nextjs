import Head from 'next/head';
import { ReactElement } from 'react';

import Introduce from '@src/components/introduce/Introduce';

const IntroducePage = () => {
  return (
    <>
      <Head>
        <title>매장소개</title>
      </Head>
      <Introduce />
    </>
  );
};

IntroducePage.getLayout = (page: ReactElement) => page;

export default IntroducePage;
