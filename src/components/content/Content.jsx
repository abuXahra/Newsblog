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
    IconTextColor,
    fs,
    smfs,
    dps
}) => {

    const linkFunc = () => {
        if (Array.isArray(contentLinkText)) {
            return (
                <span>
                    {contentLinkText.map((clt) => (
                        <Links key={clt._id}
                            linkDisplay={linkDisplay}
                            linkColor={contentLinkColor}
                            linkText={clt.title}
                            linkUrl={`/category/${clt._id}`}
                        />
                    ))}
                </span>
            )
        } else {
            return <Links
                fs={fs}
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
                smfs={smfs}
                size={size}
                headerColor={headerColor}>
                {contentHeader}
            </ContentHeader>
            <ContentIcons 
            editIconDisplay={editIconDisplay} IconColor={IconColor} IconTextColor={IconTextColor} dps={dps}
            >
                <span>{editIcon}<p>{editText}</p> </span>
                <span>{dateIcon}<p>{dateText}</p> </span>
                <span>{commentIcon}<p>{commentText}</p> </span>
            </ContentIcons>

        </ContentWrapper>
    );
}
export default Content;
