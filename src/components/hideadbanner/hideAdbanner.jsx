import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


const HideAdbanner = ({ children }) => {

    const location = useLocation();

    const [hideAdbaner, setHideAdbaner] = useState(false)

    useEffect(() => {
        console.log(`this is ${location}`);
        if (location.pathname !== '/') {
            setHideAdbaner(false);
        } else {
            setHideAdbaner(true)
        }
    }, [location]);

    return (
        <div>{hideAdbaner && children}</div>
    );


}

export default HideAdbanner;
