import React, { useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Container,
} from "@material-ui/core";

const Wrapper = styled(Container)`
  margin-top: 50px;
`;

const Heading = styled(Typography)`
  font-size: theme.typography.pxToRem(15);
  flex-basis: '33.33%';
  flex-shrink: 0;
`;

const categories = [
  { id: `entertainment`, heading: `Entertainment` },
  { id: `general`, heading: `General` },
  { id: `health`, heading: `Health` },
  { id: `science`, heading: `Science` },
  { id: `sport`, heading: `Sport` },
  { id: `technology`, heading: `Technology` },
];

const Categories = (props) => {
  
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };  

  return (
    <Wrapper maxWidth="md">
      <h1>Top 5 news by categories from GB:</h1>
      {categories.map((accordion, i) => {
        const {id, heading} = accordion;
        return (
          <Accordion
            key={i}
            expanded={expanded === id}
            onChange={handleChange(id)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Heading>{heading}</Heading>
              {/* <Typography className={classes.secondaryHeading}>I am an accordion</Typography> */}
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Wrapper>
  );
}

export default Categories;