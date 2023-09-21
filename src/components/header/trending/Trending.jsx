import React, { useState } from 'react';
import { TrendingWrapper, TrendingWrapperOverlay, TrendingContent, TrendingDate, HamburgeMenu } from './Trending.style';
import logo from '../../../images/newsstand-logo-2.png'
import { SlCalender } from 'react-icons/sl';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { CgMenuRound } from 'react-icons/cg'


const Trending = ({ spanItem, handleIsOpen }) => {

    const list = [
        "NULLAM PELLENTESQUE ORNARE COMMODO SIT",
        "ULTRICIES CRAS AMET RISUS TRISTIQUE",
        "CRAS PARTURIENT ETIAM VEHICULA ULLAMCORPER",
        "ULLAMCORPER LIGULA NIBH RISUS MAGNA",
        "SINGLE RANKING WITH MULTIPLE PAGES",
    ]

    const [counter, setCounter] = useState(0);

    const increement = () => {
        if (counter < list.length) {
            setCounter(counter + 1)
        }
        if (counter === list.length - 1) {
            setCounter(0)
        }
    }


    const decreement = () => {
        if (counter > 0 || counter === list.length) {
            setCounter(counter - 1)
        }
        if (counter === 0) {
            setCounter(list.length - 1)
        }
    }
    // NULLAM PELLENTESQUE ORNARE COMMODO SIT
    return (
        <TrendingWrapper>
            <TrendingWrapperOverlay>
                <TrendingContent>
                    <img src={logo} alt="" srcset="" />
                    <TrendingDate>
                        <div><SlCalender />&nbsp; <strong>{new Date().toDateString()}</strong> </div>
                        <div>
                            <strong>TRENDING</strong>&nbsp; /&nbsp; <p>{list[counter]}</p>
                            &nbsp;

                            <span onClick={decreement}><MdNavigateBefore /></span>
                            <span onClick={increement}><MdNavigateNext /></span>
                        </div>
                    </TrendingDate>
                </TrendingContent>
                <HamburgeMenu onClick={handleIsOpen}>{spanItem}</HamburgeMenu>
            </TrendingWrapperOverlay>
        </TrendingWrapper>
    );
}

export default Trending;
