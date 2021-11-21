import Actions from 'actions/pages/_app';
import type { AppProps } from 'next/app';
import { PageComponent } from 'types/pages/_app';
import '../styles/globals.css';
import 'nprogress/nprogress.css';

Actions.Router.events.on('routeChangeStart', () => Actions.NProgress.start());
Actions.Router.events.on('routeChangeComplete', () => Actions.NProgress.done());
Actions.Router.events.on('routeChangeError', () => Actions.NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  if (
    Actions.isServer &&
    !Component.getInitialProps &&
    (Component as PageComponent<unknown>).ws
  ) {
    return null;
  }
  return (
    <>
      <Actions.Head>
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
      </Actions.Head>
      <Actions.QueryClientProvider client={Actions.client}>
        <Component {...pageProps} />
        {!Actions.readCookie('accept__cookie') && <Actions.Modal />}
        <Actions.ReactQueryDevtools initialIsOpen={false} />
      </Actions.QueryClientProvider>
    </>
  );
}

export default MyApp;
