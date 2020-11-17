import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core";
import NewsItem from "./components/NewsItem";
import getTopNews from "./actions/getTopNews";

const Wrapper = styled(Container)`
  margin-top: 50px;
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
      <Grid container spacing={4}>
        {news && news.map((item, i) => (
          <NewsItem item={item} key={i} />
        ))}
      </Grid>
    </Wrapper>
  );
}

export default News;