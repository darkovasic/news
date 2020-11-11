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

const GridStyled = styled(Grid)`
  height: 400px;
`;

const CardMediaStyled = styled(CardMedia)`
  height: 60%;
`;

const CardContentStyled = styled(CardContent)`
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
      <GridStyled item xs={12 / totalItems} key={i}>
        <StyledLink
          to={{
            pathname: `/news/${card.url.substring(
              card.url.lastIndexOf("/") + 1
            )}`,
            state: { item: card },
          }}
        >
          <CardMediaStyled image={card.urlToImage} title={card.title} />
          <CardContentStyled>
            <Typography gutterBottom variant="h5" component="h2">
              {card.title}
            </Typography>
          </CardContentStyled>
        </StyledLink>
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

export default CarouselItem;