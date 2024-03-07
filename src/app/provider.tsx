'use client'

import React from 'react'
import GlobalStyle from 'style/global'
import { RecoilRoot } from 'recoil'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from 'react-query'
import Modal from 'components/common/molecules/Modal'

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GlobalStyle />
          {children}
          <Modal />
          <ToastContainer />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  )
}
export default Providers
