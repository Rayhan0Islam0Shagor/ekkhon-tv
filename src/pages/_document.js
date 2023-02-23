import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="bn">
      <Head>
        <meta name="msvalidate.01" content="msvalidate.01=0" />
        <meta name="yandex-verification" content="yandex-verification=0" />
        <meta name="p:domain_verify" content="p:domain_verify=0" />
        <meta name="alexaVerifyID" content="alexaVerifyID=0" />
        <meta
          name="norton-safeweb-site-verification"
          content="norton-safeweb-site-verification=0"
        />
        <meta name="apple-itunes-app" content="app-id=0" />
        <meta name="google-play-app" content="app-id=0" />
        <meta
          name="google-site-verification"
          content="google-site-verification=0"
        />
        <meta
          name="facebook-domain-verification"
          content="facebook-domain-verification=0"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Ekhon TV :: এখন টিভি" />
        <meta name="twitter:creator" content="@Ekhon TV :: এখন টিভি" />
        <meta name="twitter:title" content="Ekhon TV :: এখন টিভি" />

        {/* this tags for pwa */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
