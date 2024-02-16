"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from 'react';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'


export default function Providers({children}){
    const [mounted,setMounted] = useState(false);

    const instance = createInstance({
        urlBase: 'https://matomo.thnlt.de/',
        siteId: 2,
        trackerUrl: 'https://matomo.thnlt.de/tracking.php', // optional, default value: `${urlBase}matomo.php`
        disabled: false, // optional, false by default. Makes all tracking calls no-ops if set to true.
        heartBeat: { // optional, enabled by default
          active: true, // optional, default value: true
          seconds: 10 // optional, default value: `15
        },
        configurations: { // optional, default value: {}
          // any valid matomo configuration, all below are optional
          disableCookies: true,
          setSecureCookie: true,
          setRequestMethod: 'POST'
        }
      })

    useEffect(() =>{
        setMounted(true);
    },[]);
    
    if(!mounted){
        return <MatomoProvider value={instance}>{children}</MatomoProvider>;
    }

    return <MatomoProvider value={instance}><ThemeProvider>{children}</ThemeProvider></MatomoProvider>
}