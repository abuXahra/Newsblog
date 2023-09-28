import React from 'react';
import { Linkstyled, Overlay, PostcardContent, PostcardStyled } from './Postcard.style';
import Content from '../content/Content';
import { AiFillEdit } from 'react-icons/ai';
import { FaRegClock, FaRegComment } from 'react-icons/fa';

const Postcard = ({ pl, pb, w, imgUrl, content, size, text, linkColor, headingColor, iconColor, linkUrl, editIcon, postAuthor, dateIcon, dateText, commentIcon, commentCounter, linkDisplay, editIconDisplay }) => {
    return (<Linkstyled to={linkUrl}>
        <PostcardStyled imgW={'100%'} imgH={"100%"} w={w}>
            <img src={imgUrl} alt="" />
            <Overlay></Overlay>
            <PostcardContent pl={pl} pb={pb}>
                <Content
                    size={size}
                    contentLinkColor={linkColor}
                    contentLinkText={text}
                    contentHeader={content}
                    headerColor={headingColor}
                    IconColor={iconColor}
                    linkUrl={linkUrl}
                    editIcon={editIcon}
                    editText={postAuthor}
                    dateIcon={dateIcon}
                    dateText={dateText}
                    commentIcon={commentIcon}
                    commentText={commentCounter}
                    linkDisplay={linkDisplay}
                    editIconDisplay={editIconDisplay}
                />
            </PostcardContent>
        </PostcardStyled>
    </Linkstyled>
    );
}

export default Postcard;
