import React, { useEffect, useState } from 'react';
import { TrendingWrapper, TrendingWrapperOverlay, TrendingContent, TrendingDate, HamburgeMenu } from './Trending.style';
import logo from '../../../images/newsstand-logo-2.png'
import { SlCalender } from 'react-icons/sl';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'
import { CgMenuRound } from 'react-icons/cg'
import axios from 'axios';


const Trending = ({ spanItem, handleIsOpen }) => {

    const list = [
        "NULLAM PELLENTESQUE ORNARE COMMODO SIT",
        "ULTRICIES CRAS AMET RISUS TRISTIQUE",
        "CRAS PARTURIENT ETIAM VEHICULA ULLAMCORPER",
        "ULLAMCORPER LIGULA NIBH RISUS MAGNA",
        "SINGLE RANKING WITH MULTIPLE PAGES",
    ]



    const [counter, setCounter] = useState(0);
    const [category, setCategory] = useState([]);
    const [catLength, setCatLength] = useState([])

    // const increement = () => {
    //     if (counter < list.length) {
    //         setCounter(counter + 1)
    //     }
    //     if (counter === list.length - 1) {
    //         setCounter(0)
    //     }
    // }


    // const decreement = () => {
    //     if (counter > 0 || counter === list.length) {
    //         setCounter(counter - 1)
    //     }
    //     if (counter === 0) {
    //         setCounter(list.length - 1)
    //     }
    // }


    const fetchCategories = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/posts`)
            setCategory(res.data)
            setCatLength(res.data.length)
        } catch (err) {

        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])



    const increement = () => {
        if (counter < catLength) {
            setCounter(counter + 1)
        }
        if (counter === catLength - 1) {
            setCounter(0)
        }
    }


    const decreement = () => {
        if (counter > 0 || counter === catLength) {
            setCounter(counter - 1)
        }
        if (counter === 0) {
            setCounter(catLength - 1)
        }
    }



    return (
        <TrendingWrapper>
            <TrendingWrapperOverlay>
                <TrendingContent>
                    <img src={logo} alt="" srcset="" />
                    <TrendingDate>
                        <div><SlCalender />&nbsp; <strong>{new Date().toDateString()}</strong> </div>
                        {

                            <div >
                                <strong>TRENDING</strong>&nbsp; /&nbsp; <p style={{ textTransform: "uppercase" }}>{category[counter]?.title.substring(0, 50)}..</p>
                                <span onClick={decreement}><MdNavigateBefore /></span>
                                <span onClick={increement}><MdNavigateNext /></span>
                            </div>
                        }
                    </TrendingDate>
                </TrendingContent>
                <HamburgeMenu onClick={handleIsOpen}>{spanItem}</HamburgeMenu>
            </TrendingWrapperOverlay>
        </TrendingWrapper>
    );
}

export default Trending;
