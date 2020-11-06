import React from "react";
import styled from 'styled-components';
import { Grid, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from "@material-ui/core";
import { posts } from "./dummy-post";

const Wrapper = styled.div`
  margin-top: 20px;
  padding: 30px;
`;

const News = (props) => {
   
  return (
    <Wrapper>
      <Grid container spacing={4} justify="center">
        {posts.map((item, i) => (
          <Grid item lg={4} key={i}>
            <Card>
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
                  image={item.image}
                  title={item.title}
                />
                <CardContent>
                  <Typography component="p">{item.excerpt}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default News;