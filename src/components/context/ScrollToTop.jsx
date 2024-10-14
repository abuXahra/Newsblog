// src/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
    }, [location]);

    return <>{props.children}</>
};

export default ScrollToTop;