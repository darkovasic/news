import React from "react";
// import { Link, useHistory } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import styled from "styled-components";
import parse from 'html-react-parser';

const Wrapper = styled(Container)`
  margin-top: 50px;
`;

const NewsDetails = (props) => {

  const {item} = props.location.state;

  return (
    <Wrapper maxWidth="md">
      <main>
        <Grid container spacing={0}>
          <Grid item lg={12}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                alt={item.title}
                height="560"
                image={item.urlToImage}
                title={item.title}
              />
              <CardContent>
                <Typography>{parse(`${item.content}`)}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={props.history.goBack}>
                  {'< Back to News'}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </main>
    </Wrapper>
  );
}

export default NewsDetails;