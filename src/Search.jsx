import React, { useState, useEffect, useCallback } from "react";
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
  TextField,
  Button,
} from "@material-ui/core";
import getTopNews from "./actions/getTopNews";
import getNewsByQuery from "./actions/getNewsByQuery";

const Wrapper = styled(Container)`
  margin-top: 50px;
`;

const Form = styled.form`
  margin-bottom: 70px;
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

const Search = () => {

  const dispatch = useDispatch();
  const news = useSelector(state => state.news);
  const country = useSelector(state => state.country);
  const [query, setQuery] = useState('');

  useEffect(() => {
    dispatch(getTopNews());
  }, [dispatch, country]);


  const submitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(getNewsByQuery(query));
    },
    [dispatch, query]
  );
   
  return (
    <Wrapper maxWidth="lg">
      <Grid container spacing={0} justify="center">
        <Grid item lg={4}>
          <Form noValidate onSubmit={submitForm}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="search"
              label={`Search top news from ${country} by term`}
              name="search"
              onChange={e => setQuery(e.target.value)}
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Search News
            </Button>
          </Form>
        </Grid>
        <Grid container spacing={4} justify="center">
          {news.map((item, i) => (
            <Grid item lg={4} md={6} xs={12} key={i}>
              <Card>
                <StyledLink
                  to={{
                    pathname: `/news/${item.url.substring(
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
                </StyledLink>
                <StyledCardActions>
                  <Button size="small" color="primary">
                    Read More
                  </Button>
                </StyledCardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default Search;