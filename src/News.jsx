import React from "react";
import styled from 'styled-components';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
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
          <Grid item key={i}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={item.image}
                  title="Contemplative Reptile"
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