import React, { useState } from 'react'
import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from '../data';
import {mobile} from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
    overflow: hidden;
    ${mobile({
    display: "none"
    })};
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s all;
    transform: translateX(${(props) => props.slideIndex*-100}vw);
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const InfoContainer = styled.div`
    padding: 50px;
    position: absolute;
    left: 50%;
`;

const Title = styled.h1`
    font-style: 70px;
    color: white;

`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    color: white;
`

const Button = styled.button`
    padding: 10px;
    font-size:20px;
    background-color: transparent;
    cursor: pointer;
    color: white;
    border-color: white;
`


function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    }

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <ArrowLeftOutlinedIcon/>
        </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((slide) => (
                    <Slide key={slide.id}>
                        <ImgContainer bg={slide.bg}>
                            <Image src={slide.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{slide.title}</Title>
                            <Desc>{slide.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
        <Arrow direction="right" onClick={() => handleClick("right")}>
            <ArrowRightOutlinedIcon />
        </Arrow>
    </Container>
  )
}

export default Slider