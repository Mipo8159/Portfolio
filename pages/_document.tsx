import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <title>MyApp</title>
          <meta name='description' content='My portfolio app' />
          <meta
            name='keywords'
            content='Portfolio portfolio-app giga mipo next.js'
          />

          {/* Kaushan font */}
          <link
            href='https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap'
            rel='stylesheet'
          />

          {/* Font-awesome */}
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
          />
          {/* rubik */}
          <link
            href='https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />

          {/* Roboto */}
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='font-rubik bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
