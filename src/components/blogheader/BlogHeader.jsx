import React from 'react';
import { BlogHeaderWrapper, Container, ContainerContent, RightContent, Overlay, Linkstyled, RightContentTop, RightContentBottom, LeftContent } from './BlogHeader.style';
import Content from '../content/Content';
import { AiFillEdit, } from 'react-icons/ai'
import { FaRegClock, FaRegComment } from 'react-icons/fa'
import fringilla from '../../images/fringilla.jpg'
import torto from '../../images/torto.jpg'
import porta from '../../images/porta.jpg'
import pharetra from '../../images/pharetra.jpg'


const BlogHeader = () => {
    return (
        <BlogHeaderWrapper>
            <LeftContent>
                <Linkstyled to={"/contact"}>
                    <Container>
                        <img src={fringilla} alt="" srcset="" />
                        <Overlay></Overlay>
                        <ContainerContent>
                            <Content
                                contentLinkColor={"green"}
                                contentLinkText={"Entertainment"}
                                contentHeader={"Fringilla Ipsum Ligula Tortor Magna"}
                                headerColor={"white"}
                                IconColor={"white"}
                                linkUrl={'/contact'}
                                editIcon={<AiFillEdit />}
                                editText={'Rebecca Smith'}
                                dateIcon={<FaRegClock />}
                                dateText={new Date().toDateString()}
                                commentIcon={<FaRegComment />}
                                commentText={0}
                            />
                        </ContainerContent>
                    </Container>
                </Linkstyled>
            </LeftContent>

            <RightContent>

                <RightContentTop>
                    <Linkstyled to={"/contact"}>
                        <Container imgW={'100%'} imgH={"100%"}>
                            <img src={torto} alt="" />
                            <Overlay></Overlay>
                            <ContainerContent>
                                <Content
                                    size={'18px'}
                                    contentLinkColor={"#65B6EE"}
                                    contentLinkText={"Entertainment"}
                                    contentHeader={"Fringilla Ipsum Ligula Tortor Magna"}
                                    headerColor={"white"}
                                    IconColor={"white"}
                                    linkUrl={'/contact'}
                                    editIcon={<AiFillEdit />}
                                    editText={'Rebecca Smith'}
                                    dateIcon={<FaRegClock />}
                                    dateText={new Date().toDateString()}
                                />
                            </ContainerContent>
                        </Container>
                    </Linkstyled>

                </RightContentTop>


                <RightContentBottom>
                    <Linkstyled to={"/contact"}>
                        <Container imgH={"100%"}>
                            <img src={porta} alt="" />
                            <Overlay></Overlay>
                            <ContainerContent>
                                <Content
                                    size={'18px'}
                                    contentLinkColor={"#E46B45"}
                                    contentLinkText={"Entertainment"}
                                    contentHeader={"Fringilla Ipsum Ligula Tortor Magna"}
                                    headerColor={"white"}
                                    IconColor={"white"}
                                    linkUrl={'/contact'}
                                    editIcon={<AiFillEdit />}
                                    editText={'Rebecca Smith'}
                                    dateIcon={<FaRegClock />}
                                    dateText={new Date().toDateString()}
                                />
                            </ContainerContent>
                        </Container>
                    </Linkstyled>

                    <Linkstyled to={"/contact"}>
                        <Container>
                            <img src={pharetra} alt="" />
                            <Overlay></Overlay>
                            <ContainerContent>
                                <Content
                                    size={'18px'}
                                    contentLinkColor={"#AA9172"}
                                    contentLinkText={"Entertainment"}
                                    contentHeader={"Fringilla Ipsum Ligula Tortor Magna"}
                                    headerColor={"white"}
                                    IconColor={"white"}
                                    linkUrl={'/contact'}
                                    editIcon={<AiFillEdit />}
                                    editText={'Rebecca Smith'}
                                    dateIcon={<FaRegClock />}
                                    dateText={new Date().toDateString()}
                                />
                            </ContainerContent>
                        </Container>
                    </Linkstyled>
                </RightContentBottom>
            </RightContent>
        </BlogHeaderWrapper>
    );
}

export default BlogHeader;


{/* <Linkstyled to={"/contact"} containerWidth={"100%"}>
                    <Container>
                        <img src="https://a6e8z9v6.stackpathcdn.com/newsstand/demo2/wp-content/uploads/2015/12/shutterstock_235838851-900x668.jpg" alt="" srcset="" />
                        <Overlay></Overlay>
                        <ContainerContent>
                            <Content
                                contentLinkColor={"green"}
                                contentLinkText={"Entertainment"}
                                contentHeader={"Fringilla Ipsum Ligula Tortor Magna"}
                                headerColor={"white"}
                                IconColor={"white"}
                                linkUrl={'/contact'}
                            />
                        </ContainerContent>
                    </Container>
                </Linkstyled> */}