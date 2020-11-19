import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core";
import Loader from "react-loader-spinner";
import NewsItem from "./components/NewsItem";
import getTopNews from "./actions/getTopNews";

const Wrapper = styled(Container)`
  margin-top: 50px;
`;

const StyledLoader = styled(Loader)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const News = () => {

  const dispatch = useDispatch();
  const news = useSelector(state => state.news);
  const country = useSelector(state => state.country);
  const loading = useSelector(state => state.loading);

  useEffect(() => {
    dispatch(getTopNews());
  }, [dispatch, country]);
   
  return (
    <Wrapper maxWidth="lg">
      {loading && <StyledLoader
        type="Oval"
        color="#3f51b5"
        height={80}
        width={80}
      />}
      <Grid container spacing={4}>
        {news && news.map((item, i) => (
          <NewsItem item={item} key={i} />
        ))}
      </Grid>
    </Wrapper>
  );
}

export default News;