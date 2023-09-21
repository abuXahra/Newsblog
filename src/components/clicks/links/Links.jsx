import React from 'react';
import { LinkWrapper } from './Links.style';

const Links = ({ linkColor, linkText, linkUrl, linkDisplay }) => {

    return (
        <LinkWrapper linkDisplay={linkDisplay} to={linkUrl} linkColor={linkColor}>
            {linkText}
        </LinkWrapper>
    )
}

export default Links;
