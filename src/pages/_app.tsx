import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import HeaderComponent from "@/components/HeaderComponent";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <HeaderComponent />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
