/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable filenames/match-regex */
import App from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../styles/global';
import config from 'react-reveal/globals';
import Router from 'next/router';
import NProgress from 'nprogress';
import * as gTag from '../lib/gTag';
// @ts-ignore
import { default as gTagConfig } from '../config/gTag.json';
// import { Workbox } from "workbox-window";
import React from 'react';
import 'nprogress/nprogress.css';

//! TODO: use Hooks and add lazy loading to Workbox someway
//Binding events
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', (url) => {
  NProgress.done();
  gTag.pageView(url);
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

config({ ssrFadeout: true });
export default class MyApp extends App {
  /*readonly*/ state = {
    loading: true,
  };

  async componentDidMount() {
    this.setState(() => ({
      loading: false,
    }));
    if ('serviceWorker' in navigator || process.env.NODE_ENV === 'production') {
      const { Workbox } = await import('workbox-window');
      const wb = new Workbox('sw.js', { scope: '/' });
      wb.register();
    } else {
      console.warn('Progressive Web App support is disabled');
    }
  }
  // pageLoadStart = url => {
  //   const currentUrl = window.location.pathname + window.location.search
  //   if (url !== currentUrl) {
  //     this.setState(() => ({ loading: true }))
  //   }
  // }
  // pageLoadEnd = url => {
  //   this.setState(() => ({ loading: false }))
  // }
  render() {
    // eslint-disable-next-line no-unused-vars
    // const { loading } = this.state;
    const { Component, pageProps } = this.props;

    const page = (
      // @ts-ignore
      <>
        {/* @ts-ignore*/}
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {/* @ts-ignore*/}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gTagConfig.id}`}
          />
          {/* @ts-ignore*/}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gTagConfig.id}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          {/* @ts-ignore*/}
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.min.js"
            defer
          ></script>
          {/* @ts-ignore*/}
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.min.js"
            defer
          ></script>
          {/* @ts-ignore*/}
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          {/* @ts-ignore*/}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          {/* @ts-ignore*/}
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          {/* @ts-ignore*/}
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/android-icon-512x512.png"
          />
          {/* @ts-ignore*/}
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          {/* @ts-ignore*/}
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          {/* @ts-ignore*/}
          <link rel="manifest" href="/manifest.json" />
          {/* @ts-ignore*/}
          <link rel="shortcut icon" href="/favicon.ico" />
          {/* <link
          rel="preload"
          href="/fonts/EdelSans-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Metrophobic-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Acid/acid.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/FuturaND/FuturaNDLight.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/ITCAvantGardeGothic/ITCAvantGardeStdXLt.otf"
          as="font"
          crossOrigin=""
        /> */}
          {/* @ts-ignore*/}
          <link
            rel="preload"
            href="/fonts/Spartan/Spartan-Thin.ttf"
            as="font"
            crossOrigin=""
          />
          {/* @ts-ignore*/}
          <link
            rel="preload"
            href="/fonts/Spartan/Spartan-ExtraLight.ttf"
            as="font"
            crossOrigin=""
          />
          {/* @ts-ignore*/}
          <link
            rel="preload"
            href="/fonts/Spartan/Spartan-Light.ttf"
            as="font"
            crossOrigin=""
          />
          {/* <link
          rel="preload"
          href="/fonts/Spartan/Spartan-Regular.ttf"
          as="font"
          crossOrigin=""
        /> */}

          {/* @ts-ignore*/}
          <meta name="msapplication-TileColor" content="#fff" />
          {/* @ts-ignore*/}
          <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
          {/* @ts-ignore*/}
          <meta name="theme-color" content="#fff" />
          {/* @ts-ignore*/}
          <meta
            name="keywords"
            content="jl, consulting, jl consulting, consultoria, jl business, it consulting, consultoria de ti, tecnologia, consultoria em tecnologia, consultoria em governança, cobit, itil, cmmi, devops, devsecops, gestão, gerenciamento, governança, tecnologia, technology, ti, it"
          />
          {/* @ts-ignore*/}
          <meta
            name="description"
            content="JL CONSULTING is a company focused on business improvement, growth and problem solving. Our customer's satisfaction with the results is just a consequence. Do you want to unleash your company truly potential?"
          />
          {/* @ts-ignore*/}
          <meta name="language" content="Portuguese" />
          {/* @ts-ignore*/}
          <meta name="revisit-after" content="30 days" />
          {/* @ts-ignore*/}
          <meta name="author" content="JL CONSULTING" />
          {/* @ts-ignore*/}
          <meta name="robots" content="index, follow" />
          {/* @ts-ignore*/}
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          {/* @ts-ignore*/}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {/* @ts-ignore*/}
        <Component {...pageProps} />
        {/* @ts-ignore*/}
        <GlobalStyle />
      </>
    );
    return page;
  }
}
