import React from "react";
import styled from 'styled-components';
import {
  Container
} from "@material-ui/core";

const Wrapper = styled(Container)`
  margin-top: 50px;
`;

const Search = (props) => {
   
  return (
    <Wrapper maxWidth="md">
      <h2>Search</h2>
    </Wrapper>
  );
}

export default Search;