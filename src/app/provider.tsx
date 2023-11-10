'use client'

import React from 'react'
import GlobalStyle from 'style/global'
import { RecoilRoot } from 'recoil'
import { ToastContainer } from 'react-toastify'
import { QueryClient, QueryClientProvider } from 'react-query'

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GlobalStyle />
          {children}
          <ToastContainer />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  )
}
export default Providers
