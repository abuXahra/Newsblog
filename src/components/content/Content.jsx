import React from 'react';
import Button from '../clicks/button/Button';
import { ContentWrapper, ContentHeader, ContentIcons } from './Content.style';


import Links from '../clicks/links/Links';


const Content = ({
    contentLinkColor,
    contentLinkText,
    contentHeader,
    size,
    headerColor,
    linkUrl,
    IconColor,
    editIcon,
    editText,
    dateIcon,
    dateText,
    commentIcon,
    commentText,
    linkDisplay,
    editIconDisplay,
    w,
    IconTextColor
}) => {

    const linkFunc = () => {
        if (Array.isArray(contentLinkText)) {
            return (
                <span>
                    {contentLinkText.map((clt, index) => (
                        <Links key={index}
                            linkDisplay={linkDisplay}
                            linkColor={contentLinkColor}
                            linkText={clt}
                            linkUrl={linkUrl}
                        />
                    ))}
                </span>
            )
        } else {
            return <Links
                linkDisplay={linkDisplay}
                linkColor={contentLinkColor}
                linkText={contentLinkText}
                linkUrl={linkUrl}
            />
        }
    }


    return (
        <ContentWrapper w={w}>
            <div>
                {linkFunc()}
            </div>
            <ContentHeader
                size={size}
                headerColor={headerColor}>
                {contentHeader}
            </ContentHeader>
            <ContentIcons editIconDisplay={editIconDisplay} IconColor={IconColor} IconTextColor={IconTextColor}>
                <span>{editIcon}<p>{editText}</p> </span>
                <span>{dateIcon}<p>{dateText}</p> </span>
                <span>{commentIcon}<p>{commentText}</p> </span>
            </ContentIcons>

        </ContentWrapper>
    );
}
export default Content;
