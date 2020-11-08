import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Container
} from "@material-ui/core";
import Carousel from 'react-material-ui-carousel';
import CarouselItem from './components/CarouselItem';
import { news, categories } from "./constants";

const Wrapper = styled(Container)`
  margin-top: 50px;
  color: "#494949";
`;

const Heading = styled(Typography)`
  font-size: theme.typography.pxToRem(15);
`;

const CarouselStyled = styled(Carousel)`
  width: 100%;
`;

const chunkArray = (myArray, chunk_size) => {
  let index = 0;
  const arrayLength = myArray.length;
  const tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    let myChunk = myArray.slice(index, index + chunk_size);

    tempArray.push(myChunk);
  }

  return tempArray;
};

const newsChunks = chunkArray(news, 3);


const Categories = (props) => {

  const selectedCountry = useSelector(state => state.selectedCountry);
  const [expanded, setExpanded] = useState(false);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };  

  return (
    <Wrapper maxWidth="lg">
      <h1>{`Top 5 news by categories from ${selectedCountry}:`}</h1>
      {categories.map((accordion, i) => {
        const {name, heading} = accordion;
        return (
          <Accordion
            key={i}
            expanded={expanded === name}
            onChange={handleChangeAccordion(name)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${name}bh-content`}
              id={`${name}bh-header`}
            >
              <Heading>{heading}</Heading>
            </AccordionSummary>
            <AccordionDetails>
              <CarouselStyled
                autoPlay={false}
                // timer={this.state.timer}
                animation="fade"
                indicators={true}
                timeout={500}
                navButtonsAlwaysVisible={true}
                next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}              
              >
                {newsChunks.map((item, i) => (
                  <CarouselItem key={i} item={item} />
                ))}
              </CarouselStyled>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Wrapper>
  );
}

export default Categories;