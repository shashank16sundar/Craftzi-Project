import { ChevronLeftRounded, ChevronRightRounded } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';
import { useEffect, useState } from "react";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    ${'' /* padding: 30px; */}
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.25s ease;
    transform: translateX(${(props => props.slideIndex * (-100))}vw);
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};

`;
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;
const Image = styled.img`
    margin: 100px 75px 100px 180px;
    height: 80%;
    border-radius: 30px;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 75px;
`;

const Title = styled.h1`
    font-size: 70px;
    &:hover {
        color: #${props => props.bg};
        -webkit-text-stroke: 2px black;
    }
`;
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 5px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
        color: white;
        background-color: black;
        transform: scale(1.1);
    }
`;

function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => { handleClick("left") }}><ChevronLeftRounded sx={{ fontSize: 45 }} /></Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title bg={item.bg}>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => { handleClick("right") }}><ChevronRightRounded sx={{ fontSize: 45 }} /></Arrow>
        </Container >
    )
}

export default Slider