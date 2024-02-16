"use client";

import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

import Providers from './providers'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { useEffect } from 'react';
import CookieConsent from "react-cookie-consent";

 


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
      </head>
      <body>
          <Providers>
            <Navbar/>
            <div className='container p-0 w-100'>
              {children}
              <Footer />  
            </div>      
          </Providers>
          <CookieConsent
             location="center"
             buttonText="Akzeptieren"
             cookieName="cookieConsent"
             style={{ background: "var(--background-color)",color:"var(--text-color)", borderTop: "1px solid var(--text-color)" }}
             buttonStyle={{ color: "var(--text-color)", backgroundColor:"#4bb74a" ,fontSize: "18px" }}
             expires={150}
             overlay={true}
             >Diese Webseite verwendet Cookies und verarbeitet Daten, um die Benutzererfahrung zu verbessern. Durch die Nutzung unserer Webseite stimmen Sie der Verwendung aller Cookies gemäß unserer Cookie-Richtlinie zu.</CookieConsent>

      </body>
    </html>
  )
}

export default RootLayout;