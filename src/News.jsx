import React from "react";
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
import { news } from "./constants";

const Wrapper = styled(Container)`
  margin-top: 50px;
`;

const News = (props) => {
   
  return (
    <Wrapper maxWidth="lg">
      <Grid container spacing={4} justify="center">
        {news.map((item, i) => (
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