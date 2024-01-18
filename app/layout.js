"use client";

import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'

import Providers from './providers'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { useEffect } from 'react';




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
      </body>
    </html>
  )
}

export default RootLayout;