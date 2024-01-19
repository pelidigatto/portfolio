"use client";

import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

import Providers from './providers'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { useEffect } from 'react';
import CookieConsent from "react-cookie-consent";


 function RootLayout({ children }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <html lang="de">
      <body>
          <Providers>
            <Navbar/>
            <div className='container w-100'>
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