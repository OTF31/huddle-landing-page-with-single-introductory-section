import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Poppins, Open_Sans } from "next/font/google";

const fontPoppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
const fontOpenSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

const theme = createTheme({
  palette: {
    violet: { main: "hsl(257, 40%, 49%)" },
    softMagenta: { main: "hsl(300, 69%, 71%)" },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="favicon-32x32.png" />
        <title>Huddle landing page with a single introductory section</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
