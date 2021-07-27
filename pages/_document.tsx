import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        const GTAG_ID = process.env.GTAG_ID;

        return (
            <Html>
            <Head>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`}></script>
                <script dangerouslySetInnerHTML={{
                    __html: `                window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
    
                    gtag('config', '${GTAG_ID}');`
                }}/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        )
    }
}