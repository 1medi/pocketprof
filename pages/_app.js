import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from '../utils/UserContext';

const queryClient = new QueryClient();
const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
      </QueryClientProvider>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
    </>

  );
}
