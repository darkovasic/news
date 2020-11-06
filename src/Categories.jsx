import React, {useState} from "react";
import styled from 'styled-components';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Wrapper = styled.div`
  margin-top: 20px;
  padding: 30px;
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
    <Wrapper>
      {categories.map(accordion => {
        const {id, heading} = accordion;
        return (
          <Accordion
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