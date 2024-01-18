"use client";
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun,faMoon } from '@fortawesome/free-solid-svg-icons'


const ThemeSwitcher = () => {
    const [mounted,setMounted] = useState(false);
    const {theme,setTheme} = useTheme();
    useEffect(() =>{
        setMounted(true);
    },[]);

    if(!mounted){
        return null;
    }

    if(theme == 'dark'){
        var isDarkMode = true;
    }else{
        var isDarkMode = false;
    }
    
    return (


        <div>         
            {
                isDarkMode ? (
                    <span className='btn themeSwitcher' onClick={() => setTheme("light")}>
                        <FontAwesomeIcon icon={faSun} />
                    </span>
                ) : (
                    <span className='btn themeSwitcher' onClick={() => setTheme("dark")}>
                        <FontAwesomeIcon icon={faMoon} />
                    </span>
                )
            }
        </div>
    );
};
export default ThemeSwitcher;