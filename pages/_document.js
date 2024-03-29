import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html className="light" lang="en">
        <Head>
          {/* <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-touch-icon.png" /> */}
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
          {/* <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" /> */}
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
          <link rel="alternate" type="application/rss+xml" href="/index.xml" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Geomanist:wght@700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Geomanist:wght@700&display=swap"
            media="print"
            onLoad="this.media='all'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&family=Geomanist:wght@700&display=swap"
            />
          </noscript>
        </Head>
        <body className="antialiased font-sans text-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
