"use client";

import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

import Providers from './providers'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { useEffect } from 'react';

import Script from 'next/script';

 


// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */


 function RootLayout({ children }) {



  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);


 
  return (
    <html lang="de">
      <head>
        <title>Florian Thönelt</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="PHm4IewC9ZmRYNOZMFg3JRODRRivkdmW3mBwiN4a7FM" />
        {/* <script type="text/javascript" src="//cdn.cookie-script.com/s/102ae36c00073d80e7b5b6dd4575b25b.js"></script> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="description" content="Florian Thönelt - Webentwickler aus Hannover" />
        <meta name="keywords" content="Webentwickler, Hannover, SEO, PHP, JavaScript, HTML, CSS, Laravel, React, Node.js" />
        <meta name="author" content="Florian Thönelt" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
             




        <Script id="matomo-script" strategy="afterInteractive">
            {`
              var _paq = window._paq = window._paq || [];
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u = '//matomo.thnlt.de/';
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '2']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
              })();
            `}
        </Script>
      </head>
      <body>
          <Providers>
            <Navbar/>
            <div className='container p-0 w-100 contentArea'>
              {children}
              <Footer />  
            </div>      
          </Providers>
        
      </body>
    </html>
  )
}

export default RootLayout;