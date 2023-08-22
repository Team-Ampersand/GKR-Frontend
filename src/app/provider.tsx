'use client';

import React from 'react';
import GlobalStyle from '@/style/global';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        {children}
        <ToastContainer />
      </RecoilRoot>
    </>
  );
};
export default Providers;
