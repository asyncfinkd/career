import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Modal from "../ui/modal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://jsc-bank-of-georgia.hirehive.com/favicon.ico"
        />
        <link
          rel="stylesheet"
          href="https://jsc-bank-of-georgia.hirehive.com/prod/css/public-careers.min.css?v=yhPG1R9amMajeBFO0jtGzTv8qK1rDhsqF4Q1GaJbJn8"
        />
        <link
          rel="stylesheet"
          href="https://zartis.blob.core.windows.net/css/Company_8148/styles.css"
        />
        <title>
          &#x10D9;&#x10D0;&#x10E0;&#x10D8;&#x10D4;&#x10E0;&#x10D0; |
          &#x10E1;&#x10D0;&#x10DB;&#x10E3;&#x10E8;&#x10D0;&#x10DD;&#x10D4;&#x10D1;&#x10D8;
          JSC Bank of Georgia
        </title>
      </Head>
      <Component {...pageProps} />
      <Modal />
    </>
  );
}

export default MyApp;
