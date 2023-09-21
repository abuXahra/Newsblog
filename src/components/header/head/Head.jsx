import React, { useState } from 'react';
import Topbar from '../topbar/Topbar';
import { HeaderWrapper } from './Head.style';
import Adbanner from '../adbanner/Adbanner';
import Trending from '../trending/Trending';
import Navbar from '../navbar/Navbar';
import { CgMenuRound } from 'react-icons/cg';
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Head = () => {

    const [isOpen, setisOpen] = useState(false)
    const [spanItem, setspanItem] = useState(<CgMenuRound />)

    const handleIsOpen = () => {
        setisOpen(!isOpen)
        if (isOpen) {
            setspanItem(<CgMenuRound />)
        } else if (!isOpen) {
            setspanItem(<AiOutlineCloseCircle />)
        }

    }




    return (
        <HeaderWrapper>
            <Topbar />
            <Adbanner />
            <Trending spanItem={spanItem} handleIsOpen={handleIsOpen} />
            <Navbar isOpen={isOpen} handleIsOpen={handleIsOpen} />
        </HeaderWrapper>
    );
}

export default Head;
