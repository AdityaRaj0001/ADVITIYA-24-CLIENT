import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";



import { Details } from "./Details";

const CardWrapper = styled.div`
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  
  
`;



const CardContainer = styled(motion.div)`
  width: 225px;
  height: 320px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #000;
  color: #fff;
  position: relative;
  cursor: grab;
  background-image: url(''); /* Replace 'path_to_your_image.jpg' with your image file path */
  background-size: cover;
  background-position: center;
 
  }

  
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 300px;
  top: -6.7em;
  right: -10em;
  z-index: 5;
  background-color: red;
  border-radius: 50%;
  background-color: ${(props) => props.circleColor || "red"};
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

const Text = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font-size: 30px;  
  font-weight: 900;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const Secondimage = styled(motion.div)`
  width: auto;
  height: 140px;
  z-index: 99;
  user-select: none;
  margin-right: -8em;
  margin-top: -3em;
  img {
    width: auto;
    height: 100%;
    user-select: none;
    pointer-events:none;
  }
`;


export function Card({text,smalltext,largetext,image,circleColor}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapper>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.04}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle circleColor={circleColor}/>
          </CircleWrapper>
          <Wrapper>
            <Secondimage
              style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 100000 }}
              drag
              dragElastic={0.04}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
            >
              <img src={image} alt="Shoe" />
            </Secondimage>
          </Wrapper>
          <Text>{text}</Text>
        </TopContainer>
        <BottomContainer>
        <Details smalltext={smalltext} largetext={largetext}/>
        
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  );
}