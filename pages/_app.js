import App from 'next/app';
// import GlobalContext from "src/helper/GlobalContext";
import Script from 'next/script';
import Head from 'next/head';
import { GlobalStore } from '../src/GlobalStore';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

export default class MyApp extends App {
    state = {
      pageProps: this.props.pageProps,
    };

    updatePageProps = (pageProps) => {
      this.setState({ pageProps });
    };

    static async getInitialProps({ Component, ctx }) {
      const pageProps = {};
      const isMobile = false;
      pageProps.pageCommonProps = {
        isMobile,
        lang: 'english',
      };

      return { pageProps };
    }

    render() {
      const { Component } = this.props;
      const { pageProps } = this.state;
      return (
        <>
          <Head><meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" /></Head>
          <GlobalStore>
            <Component {...pageProps} />
          </GlobalStore>
          <Script strategy="afterInteractive" id="page">
            {`
                console.log('page... ');            
            `}
          </Script>
        </>

      );
    }
}
