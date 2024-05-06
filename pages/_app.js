import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const montserrat = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
  <Component {...pageProps} />
  </QueryClientProvider>
  <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
    </>

  );
}
