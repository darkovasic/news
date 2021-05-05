import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Loader from "react-loader-spinner";
import { categories } from "./constants";
import getNewsByCategory from "./actions/getNewsByCategory";

const Wrapper = styled(Container)`
  margin-top: 50px;
  color: "#494949";
`;

const StyledLoader = styled(Loader)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Heading = styled(Typography)`
  font-size: theme.typography.pxToRem(15);
`;

const CarouselStyled = styled(Carousel)`
  width: 100%;
`;

const chunkArray = (myArray, chunk_size) => {
  let index = 0;
  const arrayLength = 5;
  const arr = myArray.slice(0, arrayLength);
  const tempArray = [];

  for (index = 0; index < arrayLength; index += chunk_size) {
    let myChunk = arr.slice(index, index + chunk_size);

    tempArray.push(myChunk);
  }

  return tempArray;
};

const Categories = (props) => {

  const dispatch = useDispatch();
  const country = useSelector(state => state.country);
  const newsRaw = useSelector(state => state.news);
  const loading = useSelector(state => state.loading);
  const [expanded, setExpanded] = useState(false);

  const news = newsRaw && newsRaw.map((item, i) => {
    return {...categories[i], ...item}; 
  });

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    dispatch(getNewsByCategory(categories));
  }, [dispatch, country]);

  return (
    <Wrapper maxWidth="lg">
      <h1>{`Top 5 news by categories from ${country}:`}</h1>
      {loading && <StyledLoader
        type="Oval"
        color="#3f51b5"
        height={80}
        width={80}
      />}
      {news && news.map((accordion, i) => {       
        const newsChunks = accordion.articles ? chunkArray(accordion.articles, 3) : [];
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
                autoPlay={true}
                // timer={this.state.timer}
                animation="fade"
                indicators={true}
                timeout={500}
                navButtonsAlwaysVisible={true}
                next={(now, previous) => console.log(`Next Slide Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                prev={(now, previous) => console.log(`Prev Slide Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                onChange={(now, previous) => console.log(`OnChange Slide Callback: Now displaying child${now}. Previously displayed child${previous}`)}              
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