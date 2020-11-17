import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const StyledGrid = styled(Grid)`
  height: 400px;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 60%;
`;

const StyledCardContent = styled(CardContent)`
  height: 40%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const CarouselItem = (props) => {

  const totalItems = props.item.length ? props.item.length : 3;

  const items = props.item.map((card, i) => {
    return (
      <StyledGrid item xs={12 / totalItems} key={i}>
        <StyledLink
          to={{
            pathname: `/news/${card.url.substring(
              card.url.lastIndexOf("/") + 1
            )}`,
            state: { item: card },
          }}
        >
          <StyledCardMedia image={card.urlToImage} title={card.title} />
          <StyledCardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {card.title}
            </Typography>
          </StyledCardContent>
        </StyledLink>
      </StyledGrid>
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

export default CarouselItem;