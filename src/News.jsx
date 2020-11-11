import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import getTopNews from "./actions/getTopNews";

const Wrapper = styled(Container)`
  margin-top: 50px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  align-items: right;
`;

const News = () => {

  const dispatch = useDispatch();
  const news = useSelector(state => state.news);
  const country = useSelector(state => state.country);

  useEffect(() => {
    dispatch(getTopNews());
  }, [dispatch, country]);
   
  return (
    <Wrapper maxWidth="lg">
      <Grid container spacing={4} justify="center">
        {news && news.map((item, i) => (
          <Grid item lg={4} md={6} xs={12} key={i}>
            <Card>
              <StyledLink
                to={{
                  pathname: `/news/${item && item.url && item.url.substring(
                    item.url.lastIndexOf("/") + 1
                  )}`,
                  state: {item: item},
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    alt={item.title}
                    height="140"
                    image={item.urlToImage}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography component="p">{item.description}</Typography>
                  </CardContent>
                </CardActionArea>
                <StyledCardActions>
                  <Button size="small" color="primary">
                    Read More
                  </Button>
                </StyledCardActions>
              </StyledLink>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default News;