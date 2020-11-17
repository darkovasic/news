import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent
} from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled(Container)`
  margin-top: 50px;
`;

const NoMatch = () => {

  return (
    <Wrapper maxWidth="lg">
      <main>
        <Grid container spacing={0}>
          <Grid item lg={12}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h4" component="h1">
                  Page not found :(
                </Typography>
                <Typography>
                  Maybe the page you are looking for has been removed, or you
                  typed in the wrong URL
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>
    </Wrapper>
  );
}

export default NoMatch;