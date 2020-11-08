import React, { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Container
} from "@material-ui/core";
import Carousel from 'react-material-ui-carousel';
import { news } from "./constants";

const Wrapper = styled(Container)`
  margin-top: 50px;
  color: "#494949";
`;

const Heading = styled(Typography)`
  font-size: theme.typography.pxToRem(15);
  ${'' /* flex-basis: '33.33%'; */}
  flex-shrink: 0;
`;

const GridStyled = styled(Grid)`
  height: 350px;
`;

const CarouselStyled = styled(Carousel)`
  width: 100%;
`;

const CardMediaStyled = styled(CardMedia)`
  height: 70%;
`;

const CardContentStyled = styled(CardContent)`
  height: 30%;
`;

const categories = [
  { name: `entertainment`, heading: `Entertainment` },
  { name: `general`, heading: `General` },
  { name: `health`, heading: `Health` },
  { name: `science`, heading: `Science` },
  { name: `sport`, heading: `Sport` },
  { name: `technology`, heading: `Technology` },
];


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

const Item = (props) => {

  const totalItems = props.item.length ? props.item.length : 3;

  const items = props.item.map((card, i) => {
    return (
      <GridStyled item xs={12 / totalItems} key={i}>
        <CardMediaStyled image={card.image} title={card.title} />
        <CardContentStyled>
          <Typography gutterBottom variant="h5" component="h2">
            {card.title}
          </Typography>
        </CardContentStyled>
      </GridStyled>
    );
  });
    
  return (
    <Card raised>
      <Grid container spacing={0}>
        {items}
      </Grid>
    </Card>
  );
}


const Categories = (props) => {
  
  const [expanded, setExpanded] = useState(false);

  const handleChangeAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };  

  return (
    <Wrapper maxWidth="lg">
      <h1>Top 5 news by categories from GB:</h1>
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
                navButtonsAlwaysVisible={false}
                next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}              
              >
                {newsChunks.map((item, i) => (
                  <Item key={i} item={item} />
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