import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='vi'>
        <Head>
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='black-translucent'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <link
            rel='icon'
            type='image/png'
            sizes='196x196'
            href='/favicon-196.png'
          />
          <link rel='apple-touch-icon' href='/apple-icon-180.png' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2048-2732.jpg'
            media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2732-2048.jpg'
            media='(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1668-2388.jpg'
            media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2388-1668.jpg'
            media='(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1536-2048.jpg'
            media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2048-1536.jpg'
            media='(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1668-2224.jpg'
            media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2224-1668.jpg'
            media='(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1620-2160.jpg'
            media='(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2160-1620.jpg'
            media='(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1284-2778.jpg'
            media='(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2778-1284.jpg'
            media='(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1170-2532.jpg'
            media='(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2532-1170.jpg'
            media='(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1125-2436.jpg'
            media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2436-1125.jpg'
            media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1242-2688.jpg'
            media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2688-1242.jpg'
            media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-828-1792.jpg'
            media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1792-828.jpg'
            media='(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1242-2208.jpg'
            media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-2208-1242.jpg'
            media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-750-1334.jpg'
            media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1334-750.jpg'
            media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-640-1136.jpg'
            media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
          />
          <link
            rel='apple-touch-startup-image'
            href='/apple-splash-1136-640.jpg'
            media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)'
          />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
            integrity='sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=='
            crossOrigin='true'
            referrerPolicy='no-referrer'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
