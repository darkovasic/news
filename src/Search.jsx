import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  Container,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import Loader from "react-loader-spinner";
import NewsItem from "./components/NewsItem";
import getNewsByQuery from "./actions/getNewsByQuery";

const Wrapper = styled(Container)`
  margin-top: 50px;
`;

const StyledLoader = styled(Loader)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Form = styled.form`
  margin-bottom: 70px;
`;

const Search = () => {

  const dispatch = useDispatch();
  const news = useSelector(state => state.news);
  const country = useSelector(state => state.country);
  const loading = useSelector(state => state.loading);
  const [query, setQuery] = useState('');

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
        {loading && <StyledLoader
          type="Oval"
          color="#3f51b5"
          height={80}
          width={80}
        />}
        <Grid container spacing={4} justify="center">
          {news && news.map((item, i) => (
            <NewsItem item={item} key={i} />
          ))}
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default Search;