import React from 'react';
import { TitleWrapper } from './Title.style';

const Title = (props) => {
    return (
        <TitleWrapper mb={props.mb} hrLB={props.hrLB} tColor={props.tColor}>
            <h3>{props.title}</h3>
            <hr />
        </TitleWrapper>
    );
}

export default Title;

