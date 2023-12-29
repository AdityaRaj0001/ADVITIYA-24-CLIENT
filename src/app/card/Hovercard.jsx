
import React from 'react';

import styled from "styled-components";
import { Card } from './cardcomponents/nCard';
import image1 from "./image.png";


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 20px;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

`



const Hovercard = () => {
  return (
    <>
     <GridContainer>
      <Card  text="Card 1" smalltext="lorem1" largetext="lorem01" image={image1} circleColor="blue"/>
      
      <Card text="Card 2" smalltext="lorem2" largetext="lorem02" image={image1} circleColor="green"/>
      <Card text="Card 3" smalltext="lorem3" largetext="lorem03" image={image1}/>
      <Card text="Card 4" smalltext="lorem4" largetext="lorem04" image={image1}/>
      <Card text="Card 5" smalltext="lorem5" largetext="lorem05" image={image1}/>
      <Card text="Card 6" smalltext="lorem6" largetext="lorem06" image={image1}/>
    </GridContainer>
    
    </>
  );
};

export default Hovercard;


