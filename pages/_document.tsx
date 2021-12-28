import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className='bg-default-900'>
        <Head>
            {/* <link rel="preconnect" href="https://fonts.googleapis.com"/>  */}
            {/* <link rel="preconnect" href="https://fonts.gstatic.com"/>  */}
            <link href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Poppins:wght@300;400;700&display=swap" rel="stylesheet"/>
            <title>Matthew Berger</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument