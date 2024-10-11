import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';



const HideNavbar = ({ children }) => {

    const location = useLocation();
    const hideDashboardUrl = location.pathname.includes('dashboard');

    const [showNavbar, setShowNavbar] = useState(false)

    useEffect(() => {
        console.log(`this is ${location}`);
        if (
            location.pathname === '/login' ||
            location.pathname === '/reset' ||
            location.pathname === '/register' ||
            location.pathname === '/loader'||
            hideDashboardUrl
        ) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true)
        }
    }, [location]);

    return (
        <div>{showNavbar && children}</div>
    );
}

export default HideNavbar;
