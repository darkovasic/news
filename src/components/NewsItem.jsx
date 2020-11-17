import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const StyledCardActionArea = styled(CardActionArea)`
  position: relative;
`;

const StyledCardTitle = styled(CardContent)`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
`;

const StyledCardContent = styled(CardContent)`
  color: black;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 300px;
`;

const StyledCardActions = styled(CardActions)`
  float: right;
`;

const NewsItem = ({item}) => {
   
  return (
    <Grid item lg={4} md={6} xs={12}>
      <Card variant="outlined">
        <StyledLink
          to={{
            pathname: `/news/${item && item.url && item.url.substring(
              item.url.lastIndexOf("/") + 1
            )}`,
            state: {item: item},
          }}
        >
          <StyledCardActionArea>
            <StyledCardTitle>
              <Typography variant="h5" component="h2">
                {item.title}
              </Typography>
            </StyledCardTitle>
            <StyledCardMedia
              component="img"
              alt={item.title}
              image={item.urlToImage}
              title={item.title}
            />
          </StyledCardActionArea>
          <StyledCardContent>
            <Typography component="p">{item.description}</Typography>
          </StyledCardContent>
          <StyledCardActions>
            <Button size="small" color="primary">
              Read More
            </Button>
          </StyledCardActions>
        </StyledLink>
      </Card>
    </Grid>
  );
}

export default NewsItem;